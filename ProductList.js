import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ProductContext } from '../context/ProductContext';

export default function ProductList({ navigation }) {
  const { products } = useContext(ProductContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
  },
  price: {
    color: 'green',
  },
});
