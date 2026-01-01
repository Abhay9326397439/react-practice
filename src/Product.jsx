import ProductItem from "./ProductItem";

function Product(){
    let options = ["high_quality", " long_battery", " value_for_money", " powerful"];
    return (
        <div>
      <ProductItem title="watch" price="100" features={options[0]}/>
      <ProductItem title="mobile" price="200"features={options[1]}/>
      <ProductItem title="laptop" price="300" features={options[2]}/>
      <ProductItem title="TV" price="400" features={options[3]}/>
     </div>
    );
}

export default Product;