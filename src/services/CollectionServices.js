import requests from './httpService';

const CollectionServices = {
  getCollections({ page, limit, searchTxt }) {
    const searchTitle = searchTxt !== null ? searchTxt : '';
    
    return requests.get(
      `/api/collection?page=${page}&limit=${limit}&searchTxt=${searchTitle}`
    );
  },

  getCollectionByAddress(address) {
    return requests.get(`/api/collection/detail?address=${address}`);
  },

  updateCollection(body) {
    return requests.post(`/admin-routes/api/update_collection`, body);
  },

};

export default CollectionServices;
