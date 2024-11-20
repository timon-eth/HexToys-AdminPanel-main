import React from 'react';
import { Card, CardBody } from '@windmill/react-ui';

const CardItem = ({ title, Icon, quantity, amount, className }) => {
  return (
    <>
      <Card className="flex h-full">
        <CardBody className="flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
          <div
            className={`flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg ${className}`}
          >
            <Icon />
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              <span>{title}</span>{' '}
              {amount && (
                <span className="text-red-400 text-sm font-semibold">
                  ({parseFloat(amount).toFixed(2)})
                </span>
              )}
            </p>
            <p className="font-bold leading-none text-gray-600 dark:text-gray-200">
              {quantity}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardItem;
