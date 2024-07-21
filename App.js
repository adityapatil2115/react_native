// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { ProductProvider } from './context/ProductContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
