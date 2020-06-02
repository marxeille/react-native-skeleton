import React from 'react'; // useCallback
// import useService from '../../hooks/useService';
// import { getHomeDetail, updateHomeDetail, getListHome } from './services';
import {
  // View,
  TouchableOpacity,
} from 'react-native';
import Text from '../../components/Text';
// import FlatListService from '../../components/FlatListService';
import { connect } from 'react-redux';

const HomeScreen = (props) => {
  const { dispatch } = props;
  // console.log('props', user);
  // const [loading, homeProperty] = useService(getHomeDetail, { id: '3' });

  // const onSubmit = useCallback(async () => {
  //   try {
  //     const result = await updateHomeDetail({ id: '2' });
  //     if (!result.success) {
  //       throw result.msg;
  //     }
  //     Alert.alert('Success');
  //   } catch (error) {
  //     Alert.alert(error);
  //   }
  // }, []);

  // const renderItem = useCallback(({ item }) => {
  //   console.log('item', item);
  //   return <Text style={{ color: 'yellow', height: 100 }}>{item}</Text>;
  // }, []);

  // const keyExtractor = useCallback((item) => {
  //   // console.log('item', item);
  //   return item;
  // }, []);

  // if (homeProperty.id) {
  return (
    <TouchableOpacity
      onPress={() => dispatch({ type: 'user/login', username: 'name', password: 'pass' })}
      style={{ flex: 1, backgroundColor: 'red' }}>
      <Text style={{ color: 'yellow', height: 100 }}>Login</Text>
      {/* <FlatListService
        style={{ flex: 1, backgroundColor: 'blue' }}
        service={getListHome}
        params={{ name: 'name' }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      /> */}
    </TouchableOpacity>
  );
  // }
  // return null;
};

export default connect((state) => ({ user: state.user }))(HomeScreen);
