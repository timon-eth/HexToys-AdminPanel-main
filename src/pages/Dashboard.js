import React from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useState, useEffect } from 'react';

import { ImStack } from 'react-icons/im';

import OverviewServices from '../services/OverviewServices';

import PageTitle from '../components/Typography/PageTitle';
import CardItemTwo from '../components/dashboard/CardItemTwo';

const Dashboard = () => {
  dayjs.extend(isBetween);

  const [collectionCount, setCollectionCount] = useState(0);
  
  useEffect(() => {
    OverviewServices.getCollectionOverview().then((res) => {
      if (res.overview) {
        setCollectionCount(Number(res.overview.collectionCount));        
      }
    })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <>
      <PageTitle>Collection Overview</PageTitle>

      {/* investing overview */}
      <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
        <CardItemTwo
          title="Collection Count"
          Icon={ImStack}
          price={collectionCount}
          className="text-white dark:text-green-100 bg-teal-500"
        />        
      </div>
    </>
  );
};

export default Dashboard;
