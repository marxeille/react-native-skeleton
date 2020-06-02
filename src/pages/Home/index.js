import React, { useCallback } from 'react';
import useService from '../../hooks/useService';
import { getHomeDetail, updateHomeDetail, getListHome } from './services';
import { View, Alert } from 'react-native';
import Text from '../../components/Text';
import FlatListService from '../../components/FlatListService';
import { wrap } from '../../themes';

const HomeScreen = wrap(() => {
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

  const renderItem = useCallback(({ item }) => {
    console.log('item', item);
    return <Text style={{ color: 'yellow', height: 100 }}>{item}</Text>;
  }, []);

  const keyExtractor = useCallback(item => {
    // console.log('item', item);
    return item;
  }, []);

  // if (homeProperty.id) {
  return (
    <View cls="flx-i bg-red">
      <FlatListService
        style={{ flex: 1 }}
        service={getListHome}
        params={{ name: 'name' }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
  // }
  // return null;
});

export default HomeScreen;
