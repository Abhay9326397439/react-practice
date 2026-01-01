import "./ProductItem.css";

function ProductItem({ title, price }) {
    return (
        <div>
            <h2 className="product-title">
                This is a {title} and product price is {price}
            </h2>
            {price >=3000 ? (<p> profit you 'll get: {price *0.30} </p>) : null}
        </div>
    );
}

export default ProductItem;
