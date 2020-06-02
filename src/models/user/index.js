// import { EF24Login } from './services';

const user = {
  namespace: 'user',
  state: {},
  reducers: {
    onLoginStart(state) {
      return { ...state, loggingIn: true };
    },
    onLoginSuccess(state, { payload }) {
      return { ...state, logginIn: false, ...payload };
    },
    onLoginFailed(state) {
      return { ...state, loggingIn: false };
    },
    clear() {
      return {};
    },
  },
  effects: {
    *login(action, { call, put, select }) {
      try {
        console.log('action', action);
        // const result = yield call(EF24Login, { ...action });
        yield put({ type: 'onLoginStart' });
      } catch (error) {
        yield put({ type: 'onLoginFailed' });
      }
    },
  },
};

export default user;
