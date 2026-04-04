import "./ProductItem.css";

function ProductItem({ title, Description,Price}) {
    return (
        <div className="product-Box">
           <h2>{title}</h2>
           <p className="product-des">{Description}</p>
           <p className="product-price">{Price}</p>
        </div>
    );  
}

export default ProductItem;
