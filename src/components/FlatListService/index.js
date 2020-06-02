import React, { useCallback, useReducer, useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import Text from '../Text';

const reducer = (state, { payload, type }) => {
  switch (type) {
    case 'onLoadStart':
      return {
        ...state,
        loading: true,
      };
    case 'onLoadSuccess':
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case 'onLoadFailure':
      return {
        ...state,
        loading: false,
      };
    case 'onLoadMoreStart':
      return {
        ...state,
        loadingMore: true,
      };
    case 'onLoadMoreSuccess':
      return {
        ...state,
        loadingMore: false,
        list: [...state.list, ...payload],
      };
    case 'onLoadMoreFailure':
      return {
        ...state,
        loadingMore: false,
      };
    default:
      return state;
  }
};

const FlatListService = ({ params, service, ...otherProps }) => {
  const [state, dispatch] = useReducer(reducer, { loading: false, list: null, loadingMore: false });
  const limit = useRef(10);
  const offset = useRef(0);
  const noMore = useRef(false);
  const { loadingMore, loading, list } = state;

  const onLoad = useCallback(async () => {
    try {
      dispatch({ type: 'onLoadStart' });
      limit.current = 10;
      offset.current = 0;
      const result = await service({ ...params, limit: limit.current, offset: offset.current });
      if (result.success) {
        if (result.total < offset * limit + limit) {
          noMore.current = true;
        }
        dispatch({ type: 'onLoadSuccess', payload: result.data.list });
      } else {
        dispatch({ type: 'onLoadFailure' });
      }
    } catch (error) {
      dispatch({ type: 'onLoadFailure' });
    }
  }, [params, service]);

  const onLoadMore = useCallback(async () => {
    try {
      if (loadingMore || noMore.current) {
        return;
      }
      console.log('onLoadMore', onLoadMore);
      offset.current += limit.current;
      dispatch({ type: 'onLoadMoreStart' });
      const result = await service({ ...params, limit: limit.current, offset: offset.current });
      if (result.success) {
        if (result.total && result.total < offset * limit + limit) {
          noMore.current = true;
        }
        dispatch({ type: 'onLoadMoreSuccess', payload: result.data.list });
      } else {
        dispatch({ type: 'onLoadMoreFailure' });
      }
    } catch (error) {
      dispatch({ type: 'onLoadMoreFailure' });
    }
  }, [loadingMore, params, service]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <FlatList
      refreshing={loading}
      onRefresh={onLoad}
      data={list}
      onEndReachedThreshold={0.5}
      renderFooter={() => loadingMore && <Text>Loading</Text>}
      onEndReached={onLoadMore}
      {...otherProps}
    />
  );
};

export default FlatListService;
