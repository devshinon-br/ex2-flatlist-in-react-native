import React from 'react';
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    width: 50,
    height: 50
  },
});

const ImageList = (props) => {
  // Pega as imagens do diretorio assets de forma dinâmica
  const images = require.context('../assets', false, /\.(png|jpe?g|gif|svg)$/);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={images(`./${item.fileName}`)} style={styles.image} />
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default ImageList;
