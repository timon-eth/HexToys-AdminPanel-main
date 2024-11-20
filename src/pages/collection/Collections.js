import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
} from '@windmill/react-ui';
import { FiPlus } from 'react-icons/fi';

import NotFound from '../../components/table/NotFound';
import Loading from '../../components/preloader/Loading';

import PageTitle from '../../components/Typography/PageTitle';
import CollectionTable from '../../components/collection/CollectionTable';
import CollectionServices from '../../services/CollectionServices';

const Collections = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const [collections, setCollections] = useState([]);
  const [collectionCount, setCollectionCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCollections([]);
    setLoading(true);
    setPage(1);
    fetchCollections();
  }, [searchTxt])

  useEffect(() => {
    setLoading(true);
    fetchCollections();
  }, [page])

  function fetchCollections() {  
    CollectionServices.getCollections({
      page: page,
      limit: 20,
      searchTxt: searchTxt,
    }).then((res) => {
      if (res) {
        setCollectionCount(res.count);
        setLoading(false);
        setCollections(res.collections);
      } else {
        setLoading(false);   
        setCollectionCount(0);     
        setCollections([]);        
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      setCollections([]);
    });
  }



  return (
    <>
      <PageTitle>Collections</PageTitle>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <div className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex" >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="text"
                name="search"
                placeholder="Search by collection name"
                onChange={(e) => setSearchTxt(e.target.value)}
              />
            </div>            
          </div>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : collectionCount > 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Type</TableCell>                
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <CollectionTable collections={collections} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={collectionCount}
              resultsPerPage={20}
              onChange={(p) => {
                setPage(p);
              }}
              label="Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Collection" />
      )}
    </>
  );
};

export default Collections;
