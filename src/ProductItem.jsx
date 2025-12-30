import "./ProductItem.css";

function ProductItem({title, price}) {
    return (
        <div>
        <h2 className="product-title">This is a {title} and this is that product price is={price}</h2>

        </div>
    );

}

export default ProductItem;