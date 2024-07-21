import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  const handleBuyNow = () => {
    Alert.alert('Buy Now', `You selected ${product.name}.`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Buy Now" onPress={handleBuyNow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 20,
  },
});
