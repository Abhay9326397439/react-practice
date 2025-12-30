import ProductItem from "./ProductItem";

function Product(){
    let options = [{color:"red"}, {size:"M"}, {brand:"xyz"}];
    return (
        <div>
      <ProductItem title="watch" price="100" features={options[0]}/>
      <ProductItem title="mobile" price="200"/>
      <ProductItem title="laptop" price="300"/>
      <ProductItem title="TV" price="400"/>
     </div>
    );
}

export default Product;