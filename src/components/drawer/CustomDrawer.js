import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Textarea } from '@windmill/react-ui';
import ReactTagInput from '@pathofdev/react-tag-input';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import InputValue from '../form/InputValue';
import SelectOption from '../form/SelectOption';
import DrawerButton from '../form/DrawerButton';

const CustomDrawer = ({ id }) => {
  
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update"
            description="Updated and necessary information from here"
          />
        ) : (
          <Title
            title="Add "
            description="Add and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">            

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="SKU" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required="false"
                  label="SKU"
                  name="sku"
                  type="text"
                  placeholder="SKU"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Title/Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  label="Title/Name"
                  name="title"
                  type="text"
                  placeholder="title"
                />
                <Error />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Slug" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required="false"
                  label="Slug"
                  name="slug"
                  type="text"
                  placeholder="slug"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                  {...register('description', {
                    required: 'Description is required!',
                    minLength: {
                      value: 20,
                      message: 'Minimum 20 character!',
                    },
                  })}
                  name="description"
                  placeholder="details"
                  rows="4"
                  spellCheck="false"
                />                
              </div>
            </div>


            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Type" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  label="type"
                  name="type"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Unit (kg/pc/lb/ml/g...etc)" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                   label="Unit"
                  name="unit"
                  type="text"
                  placeholder="Unit"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Quantity" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  maxValue={1000}
                  minValue={0}
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Price" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  maxValue={2000}
                  minValue={1}
                  label="Price"
                  name="originalPrice"
                  type="number"
                  placeholder="Price"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Sale Price" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  maxValue={2000}
                  minValue={1}
                  defaultValue="0"
                  required="false"
                  label="Sale price"
                  name="salePrice"
                  type="number"
                  placeholder="Sale price"
                />                
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tag" />
              <div className="col-span-8 sm:col-span-4">
                <ReactTagInput
                  placeholder="Tag (Write then press enter to add new tag )"                  
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Custom" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(CustomDrawer);
