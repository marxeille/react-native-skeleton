import React, { useEffect } from 'react'; // useCallback
// import useService from '../../hooks/useService';
// import { getHomeDetail, updateHomeDetail, getListHome } from './services';
import { TextInput, View, Button } from 'react-native';
import Text from '../../components/Text';
// import FlatListService from '../../components/FlatListService';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Background from '../../components/Background';

const HomeScreen = (props) => {
  // const { dispatch } = props;
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);
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

  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  // if (homeProperty.id) {
  return (
    <View
    // onPress={() => dispatch({ type: 'user/login', username: 'name', password: 'pass' })}
    // style={{ flex: 1, backgroundColor: 'red' }}
    >
      <Text
      // style={{ color: 'yellow', height: 100 }}
      >
        Login
      </Text>
      <TextInput
        // style={{ width: 100, height: 50 }}
        onChangeText={(value) => setValue('username', value)}
        placeholder="name"
      />
      <TextInput
        // style={{ width: 100, height: 50 }}
        onChangeText={(value) => setValue('password', value)}
        placeholder="pass"
      />
      {/* <FlatListService
        style={{ flex: 1, backgroundColor: 'blue' }}
        service={getListHome}
        params={{ name: 'name' }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      /> */}
      <Button title={'Login'} onPress={handleSubmit(onSubmit)} />
      <Background />
    </View>
  );
  // }
  // return null;
};

export default connect((state) => ({ user: state.user }))(HomeScreen);
