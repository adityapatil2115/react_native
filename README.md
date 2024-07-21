
# Product List App

## Description

The Product List App is a simple React Native application that displays a list of products. Users can view product details and initiate a "Buy Now" action. The app uses React Navigation for screen navigation and Context API for state management.

## Features

- Display a list of products with names, prices, and thumbnail images.
- Navigate to a detailed view of each product.
- View full product details including name, description, price, and larger image.
- "Buy Now" button to trigger a placeholder action.
- Basic styling for a clean and user-friendly interface.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ProductApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npx expo start
   ```

4. Run on your device:
   - Open the Expo Go app on your mobile device.
   - Scan the QR code displayed in your terminal.

## File Structure

```
ProductApp/
├── components/
│   ├── ProductList.js
│   ├── ProductDetails.js
├── context/
│   ├── ProductContext.js
├── App.js
├── data.js
├── package.json
```

## Components

### ProductList.js

Displays a list of products and navigates to the Product Details screen when a product is selected.

### ProductDetails.js

Displays detailed information about the selected product and includes a "Buy Now" button.

## Context

### ProductContext.js

Provides the list of products to the application using React's Context API.

## Data

### data.js

Contains the product data used in the app. Example data:
```javascript
export const products = [
  {
    id: '1',
    name: 'New Specific Product Name',  // Updated name for Product 1
    description: 'Updated description for Product 1',
    price: '$15',
    image: 'https://example.com/new-image1.jpg',  // Updated image URL
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20',
    image: 'https://example.com/image2.jpg',
  },
];
```
