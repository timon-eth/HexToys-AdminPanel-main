import React from 'react';
import { FiEdit } from 'react-icons/fi';
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from '@windmill/react-ui';

import Tooltip from '../tooltip/Tooltip';
import { truncateWalletString } from '../../utils';

const CollectionTable = ({ collections }) => {

  return (
    <>
      <TableBody>
        {collections?.map((collection, index) => (
          <TableRow key={index}>
            {/* Collection Name */}
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={collection.image}
                  alt={collection.name}
                />
                <div>
                  <h2 className="text-sm font-medium">{collection.name}</h2>
                </div>
              </div>
            </TableCell>

            {/* Address */}
            <TableCell>
              <span className="text-sm font-semibold">
                {truncateWalletString(collection.address)}
              </span>
            </TableCell>

            {/* Type */}
            <TableCell>
              <span className="text-sm font-semibold">
                {collection.type === 'multi' ? 'PRC-1155' : 'PRC-721'}
              </span>
            </TableCell>            

            <TableCell>
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600"
                onClick={() => window.open(`/edit-collection/${collection.address}`, "_self")}
              >
                <Tooltip id="edit" Icon={FiEdit} title="Edit" bgColor="#10B981" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default React.memo(CollectionTable);
