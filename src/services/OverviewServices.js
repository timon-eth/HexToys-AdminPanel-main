import requests from './httpService';

const OverviewServices = {  
  getCollectionOverview() {
    return requests.get(`/admin-routes/api/overview`);
  },
};

export default OverviewServices;
