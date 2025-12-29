import "./ProductItem.css";

function ProductItem({title}) {
    return (
        <div>
        <h2 className="product-title">{title}</h2>
        </div>
    );

}

export default ProductItem;