import { useReducer } from 'react';
const m = require('use-deep-compare-effect');

const useDeepCompareEffect = m.default;

// by pass warning of deep compare
const EMPTY_OBJECT = {};

const reducer = (state, { payload, type }) => {
  switch (type) {
    case 'replace_state':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default function useService(service, params) {
  const [{ loading, data, error }, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
    error: null,
  });

  useDeepCompareEffect(() => {
    let isMounted = true;
    (async () => {
      if (!loading) {
        isMounted && dispatch({ type: 'replace_state', payload: { loading: true } });
      }

      const response = await service(params);

      if (response) {
        if (response.success) {
          isMounted &&
            dispatch({
              type: 'replace_state',
              payload: { loading: false, data: response.data, error: null },
            });
        } else {
          isMounted &&
            dispatch({
              type: 'replace_state',
              payload: { loading: false, error: response.error },
            });
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn('invalid error', service, params);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [params, EMPTY_OBJECT]);

  return [loading, data, error];
}
