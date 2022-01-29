import { Link } from "react-router-dom";
import { ProductKitchen } from "./ProductKitchen";
import { Header } from "../commons/Header";

export const DeliveryKitchen = () => {

    return (
        <div>
           <Header/>
            <h1>Pedidos Orden Desc</h1>
            <div>      
            <ProductKitchen />
            </div>
    
        </div>
    )
}