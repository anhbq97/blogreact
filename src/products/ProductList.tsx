import { Product } from './Product';
import { MOCK_PRODUCT } from './MockProducts';
import { useState } from 'react';
import ProductCard from './ProductCard';

interface ProductProp {
  products: Product[]
}

function ProductList({products}: ProductProp) {
  const items = products.map((product) => (
    <div key={product.id} className="col-md-4">
      {
        ( <ProductCard product={product} /> )
      }
    </div>
  ));

  return (
    <div className="row">{items}</div>
  );
}

export default ProductList;