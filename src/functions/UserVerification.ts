import axios from 'axios';

import API from '../api/index.json'; //API import from apis/index.json

const userVerification = async (token: string) => {
  let result = '';
  if (token) {
    await axios
      .get(API.UserLoggedInVerification, {
        headers: {'x-access-token': token},
      })
      .then(r => {
        if (r.data.isLoggedIn === true) {
          result = r.data;
          return result;
        }
      });
  } else {
    return result;
  }
  return result;
};

export  {userVerification};
