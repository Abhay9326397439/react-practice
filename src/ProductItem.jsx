import "./ProductItem.css";

function ProductItem({title, price, features}) {
    return (
        <div>
        <h2 className="product-title">This is a {title} and this is that product price is={price}</h2>
        <h3 className="product-features">Features: {features}</h3>
        </div>
    );

}

export default ProductItem;