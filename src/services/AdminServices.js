import requests from './httpService';

const AdminServices = {
  loginAdmin(body) {
    return requests.post(`/admin-routes/api/login`, body);
  },
};

export default AdminServices;
