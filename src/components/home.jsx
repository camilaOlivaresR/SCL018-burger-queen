import { Link } from "react-router-dom";
//import imagen

export const Home = () => {
    return (
        <section style={{textAlign:"center"}}>
            <h1>Bienvenides al sistema de Pedidos</h1>
            <p>CoffeQuens</p>
            <div>
            <button><Link to="/cocina">cocina</Link></button>
            <button><Link to="/servicio">mesera</Link></button>
            </div>
        </section>
    )
}