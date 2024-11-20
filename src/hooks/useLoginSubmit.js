import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import AdminServices from '../services/AdminServices';
import { notifyError, notifySuccess } from '../utils/toast';
import Querystring from "query-string"

const useLoginSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AdminContext);
  const history = useHistory();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;

    if (location.pathname === '/login') {      
      AdminServices.loginAdmin(Querystring.stringify({ 
        email: email, 
        password: password }))
        .then((res) => {
          if (res) {
            setLoading(false);
            notifySuccess('Login Success!');
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('adminInfo', JSON.stringify(res), {
              expires: cookieTimeOut,
            });
            history.replace('/');
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });
    }
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
