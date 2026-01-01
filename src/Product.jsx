import ProductItem from "./ProductItem";

function Product(){
    let options = ["high_quality", " long_battery", " value_for_money", " powerful"];
    return (
        <div>
      <ProductItem title="watch" price={5000} />
      <ProductItem title="mobile" price={3000}/>
      <ProductItem title="laptop" price={1000}/>
      <ProductItem title="TV" price={2000}/>
     </div>
    );
}

export default Product;