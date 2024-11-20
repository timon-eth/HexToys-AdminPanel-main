import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CloseCircleFilled } from "@ant-design/icons";
import 'devextreme/ui/html_editor/converters/markdown';
import Querystring from "query-string";

import CollectionServices from '../../services/CollectionServices';
import * as Element from './styles';
import { notifySuccess, notifyError } from '../../utils/toast';
import { isAddress } from '../../utils';

const EditCollection = (props) => {
  const { address } = useParams();

  const [whitelist, setWhitelist] = useState([]);
  function createWhitelist() {
    setWhitelist((highlightList) => [...highlightList, ""]);
  }
  function editHighlights(propIndex, newVal) {
    let highlightList = [...whitelist];
    highlightList[propIndex] = newVal;
    setWhitelist(highlightList);
  }
  function deleteWhitelist(index) {
    let props = [...whitelist];
    props.splice(index, 1);
    setWhitelist(props);
  }

  // get collection information
  const [collectionInfo, setCollectionInfo] = useState(null);
  useEffect(() => {
    CollectionServices.getCollectionByAddress(address).then((res) => {
      if (res.collection) {
        setCollectionInfo(res.collection);
        setWhitelist(res.collection.whitelist || []);
      } else {
        setCollectionInfo(null);
      }
    })
      .catch((err) => {
        setCollectionInfo(null);
        console.log(err);
      });
  }, [])
  

  async function onupdateCollection() {
    for (let index = 0; index < whitelist.length; index++) {
      const element = whitelist[index];
      if (!isAddress(element)) {
        notifyError("Please Input Address Correctly!");
        return;
      }
      
    }
    
    
    CollectionServices.updateCollection(Querystring.stringify({
      address: address,
      whitelist: JSON.stringify(whitelist),      
    }))
      .then((res) => {
        if (res?.collection) {
          notifySuccess('Whitelist Updated!');
          window.open(`/collections`, "_self");
        } else {
          notifyError("Failed to Update Company");
        }
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
      });

  }


  return (
    <Element.Container>
      {
        collectionInfo &&       
      <div className="text-left mx-auto my-10">
        <h1 className="text-3xl xl:text-4xl font-bold text-cusBlack dark:text-white">
          Edit Collection (Add whitelist)
        </h1>
        
        {/* company video & logo */}
        <div className="media-info">
          <img src={collectionInfo.image} alt='company'/>          
        </div>

        {/* company name */}
        <div className="mt-8">
          <h4 className="mr-5 text-cusBlack font-bold dark:font-medium dark:text-white text-2xl cursor-pointer"
            onClick={() => window.open(`${process.env.REACT_APP_BLOCK_EXPLORER}/address/${address}`)}>
            {collectionInfo.name} 
          </h4>          
        </div>

        {/* company description */}
        <div className="mt-8">
          <p> Description </p>
          <h4 className="mr-5 text-cusBlack font-bold dark:font-medium dark:text-white text-lg">{collectionInfo.description}</h4>
          
        </div>


        {/* company highlight */}
        <div className="mt-8">
          <div className='flex items-center'>
            <h4 className="mr-5 text-cusBlack font-bold dark:font-medium dark:text-white text-lg">Whitelist</h4>
            <button className="lightBlueBg py-3 px-4 rounded-lg text-cusBlack dark:text-white"
              onClick={createWhitelist}>
              + Add
            </button>
          </div>
          {
            whitelist.map((value, index) => {
              return (
                <div className='flex' key={index}>
                  <div className="lightBlueBg p-5 rounded-xl mt-3 w-full">
                    <input type="text" name="" id="" placeholder='highlight context'
                      className="bg-transparent w-full outline-none text-cusBlack dark:text-white"
                      value={value} onChange={(e) => { editHighlights(index, e.target.value) }} />
                  </div>
                  <button className="property-remove-button"
                    onClick={() => { deleteWhitelist(index) }}>
                    <CloseCircleFilled style={{ fontSize: '26px' }} />
                  </button>
                </div>
              );
            })
          }
        </div>

       
        {/* action */}
        <div className="mt-8 flex justify-center">
          <button className="lightBlueBg py-3 px-4 rounded-lg text-cusBlack dark:text-white bg-green-500"
            onClick={() => {
              onupdateCollection();
            }}>
            Update Collection
          </button>
        </div>


      </div>
      }
    </Element.Container>

  );
};

export default EditCollection;
