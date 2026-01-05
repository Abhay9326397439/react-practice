import ProductItem from "./ProductItem";
import User from "./User";

function Product(){
    let styles={
        display: "flex",
        flexWrap:"wrap",
         gap: "50px",
    };
    let option= ["Rs-1000", "Rs-2000", "Rs-3000", "Rs-4000"];
    return (
        <div style={styles}>
      <ProductItem title="watch"  Description="high quality" Price={option[0]}/>
      <ProductItem title="mobile" Description="realible" Price={option[1]}/>
      <ProductItem title="laptop" Description="powerful" Price={option[2]}/>
      <ProductItem title="TV" Description="value for money" Price={option[3]} />
     </div>
    );
}

export default Product;