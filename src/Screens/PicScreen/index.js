import React, {useState} from 'react';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import {WIDTH, HEIGHT} from '../../constants';

const PicScreen = ({navigation, route}) => {
  const {url, title} = route.params;
  navigation.setOptions({title});

  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {isLoading && <ActivityIndicator style={styles.spinner} size="large" />}
      <Image
        source={{uri: url}}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    resizeMode: 'contain',
  },
  spinner: {
    marginTop: 20,
  },
});

export default PicScreen;
