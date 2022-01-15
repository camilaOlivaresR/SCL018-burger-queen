import { Link } from "react-router-dom";
//import imagen


export const Home = () => {
    return (
        <section style={{textAlign:"center"}}>
            <h1>Bienvenides al sistema de Pedidos</h1>
            <p>CoffeeQuens</p>
            <div>
            <button><Link to="/kitchen">cocina</Link></button>
            <button><Link to="/waitress">mesera</Link></button>
            </div>
        </section>
    )
}
