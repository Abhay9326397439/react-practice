import ProductItem from "./ProductItem";

function Product(){
    return (
        <div>
      <ProductItem title="watch" price="100"/>
      <ProductItem title="mobile" price="200"/>
      <ProductItem title="laptop" price="300"/>
      <ProductItem title="TV" price="400"/>
     </div>
    );
}

export default Product;