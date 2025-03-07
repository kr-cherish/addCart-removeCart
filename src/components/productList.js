import { useDispatch } from "react-redux";
import { add_to_cart } from "../action/cartAction";

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Smartphone", price: 699 }
];

const ProductList = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Product List</h1>
                <ul>{products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}{" "}
            <button onClick={() => dispatch(add_to_cart(product))}>Add to Cart</button>
          </li>
        ))}
                </ul>
        </div>
    )
};

export default ProductList