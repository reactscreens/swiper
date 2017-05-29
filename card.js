import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default ({ image, title, subTitle }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </Image>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  textContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginLeft: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
  },
  image: {
    flex: 1,
  },
  text: {
    margin: 20,
  },
  name: {
    fontSize: 20,
    color: 'white',
  },
  subTitle: {
    fontSize: 15,
    color: 'white',
  },
});
