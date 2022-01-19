

//carrito de compas es un estado que va cambiando
const Pedido = ({ pedido  }) => {
    return (
        <div>
     {pedido.length > 0 ?
    pedido.map((producto, index ) => {
        return(
            <div key={index}>
             <p>{producto.name}</p>
             <p>{producto.price}</p>
             </div>
             );
       
     })

    : 
    <p>Aun no has agregado nada</p>
    }

        </div>
    )
}

export default Pedido
