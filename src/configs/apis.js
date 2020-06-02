import apisauce from 'apisauce';
import TokenManagement from '../utils/TokenManager';

const ENDPOINT = '';

export const API = apisauce.create({
  baseURL: ENDPOINT,
});

// export const injectToken = service => TokenManager.inject(service);
export const injectBearer = (token, configs) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'X-Organization-Id': getUserOrgId(),
      },
    };
  }

  if (configs.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
        // 'X-Organization-Id': getUserOrgId(),
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `Bearer ${token}`,
      // 'X-Organization-Id': getUserOrgId(),
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    // const userInfo = getUserInfo();
    // if (!userInfo) {
    //   return false;
    // }
    // const isNotExpired = moment(
    //   userInfo.loggedIn + userInfo.expires_in - 30,
    // ).isAfter(moment().unix());
    // const isNotRefreshExpired = moment(
    //   userInfo.loggedIn + userInfo.expires_in * 2 - 30,
    // ).isAfter(moment().unix());
    // if (!isNotRefreshExpired) {
    //   removeUserInfo();
    //   router.push({pathname: '/auth/login'});
    // }
    // return isNotExpired;
    return true;
  },
  getAccessToken: () => {
    // const userInfo = await getUserInfo();
    // return userInfo.access_token;
    return 'abcdef';
  },
  // onRefreshToken: (done) => {
  //   refreshToken()
  //     .then((result) => {
  //       const userInfo = getUserInfo();
  //       if (result.success) {
  //         done(userInfo.access_token);
  //       }
  //     })
  //     .catch((error) => {
  //       done(null);
  //       window.g_app._store.dispatch({type: 'user/clear'});
  //       router.push({pathname: '/auth/login'});
  //     });
  // },
});

export const privateRequest = async (request, url, data, configs) => {
  const token = await TokenManager.getToken();
  return request(url, data, injectBearer(token, configs));
};
