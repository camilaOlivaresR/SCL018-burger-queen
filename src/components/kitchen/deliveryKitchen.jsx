import { Link } from "react-router-dom";
import { ProductKitchen } from "./ProductKitchen";

export const DeliveryKitchen = () => {

    return (
        <div>
            <button><Link to="/">Salir</Link></button>
            <h1>Pedidos Orden Desc</h1>
            <ProductKitchen />
        </div>
    )
}