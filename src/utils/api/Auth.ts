import axios,{AxiosResponse}  from 'axios';
import API from '../../api/index.json'

async function AccountLogin  (data:object){
    try {
        const response = await axios
          .post(API.PostAccountLogin as string, {
            data:data
          })
          .then((r: AxiosResponse) => {
            console.log(r.data.error, r.data.message);
            if (r.data.message == 'invalid') {
              return {payload: null, message: 'invalid'};
            }
            if (r.data.message == 'success') {
              return {payload: r.data.payload, error: null, token: r.data.token};
            }
            if (r.data.message == 'error') {
              return {error: Error('Failed to login'), payload: null};
            }
          });
        return response;
      } catch (e) {
        return {error: 'error', payload: null, message:null, token:null};
      }
}

export {AccountLogin}