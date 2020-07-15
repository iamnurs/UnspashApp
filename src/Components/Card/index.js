import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {WIDTH} from '../../constants';

const Card = ({navigation, pic}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Pic', {
          url: pic.item.urls.full,
          title: pic.item.user.name,
        })
      }>
      <ImageBackground
        source={{uri: pic.item.urls.small}}
        style={styles.container}
        imageStyle={styles.image}>
        <Text style={styles.text}>{pic.item.user.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 20,
    height: 200,
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Card;
