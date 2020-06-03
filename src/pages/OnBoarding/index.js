import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import images from '../../resources/images';
import Background from '../../components/Background';

const OnBoarding = ({ isFirstTime }) => {
  return (
    <Background>
      <Image source={images.onboarding} style={styles.image} />
    </Background>
  );
};

const styles = StyleSheet.create({ image: { height: 50, width: 50 } });

export default connect((state) => ({ isFirstTime: state.onboarding.isFirstTime }))(OnBoarding);
