import "./ProductItem.css";

function ProductItem({title, price}) {
    let isdiscount= price>=3000 ? "You are eligible for a discount on this product!" : "you are not eligible for discount";
    return (
        <div>
        <h2 className="product-title">This is a {title} and this is that product price is={price}</h2>
        <p className="discount-info">{isdiscount}</p>
        </div>
    );
   
}

export default ProductItem;