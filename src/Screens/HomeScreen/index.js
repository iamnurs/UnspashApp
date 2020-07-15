import React, {useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {requestPics, requestNextPage} from '../../Store/actions';
import Card from '../../Components/Card';

const mapStateToProps = state => ({
  isPending: state.requestPics.isPending,
  pics: state.requestPics.pics,
  page: state.requestPics.page,
});

const mapDispatchToProps = dispatch => ({
  onRequestPics: () => dispatch(requestPics()),
  onRequestNextPage: page => dispatch(requestNextPage(page)),
});

const HomeScreen = ({
  navigation,
  onRequestPics,
  onRequestNextPage,
  pics,
  isPending,
  page,
}) => {
  useEffect(() => {
    onRequestPics();
  }, [onRequestPics]);

  const renderItem = pic => <Card pic={pic} navigation={navigation} />;
  return (
    <FlatList
      renderItem={renderItem}
      data={pics}
      keyExtractor={item => item.id}
      ListFooterComponent={
        isPending ? (
          <ActivityIndicator style={styles.margin} size="large" />
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.margin]}
            onPress={() => onRequestNextPage(page)}>
            <Text style={styles.text}>Load More</Text>
          </TouchableOpacity>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  margin: {
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
