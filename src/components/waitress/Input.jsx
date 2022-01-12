
 export const  InputClient  = () => {
    return (
        <div style={{textAlign:"center"}}>
     <form  >
      <h3>Resumen del pedido</h3>
      <section >
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
        />
        <p>Email : </p>
        <input
          type="text"
          email="client@gmail.com"
        />
        <p>Mesero: </p>
        <input
          type="text"
          name="server"
        />
        <p># Mesa : </p>
        <input
          type="number"
          name="table"
          min="1" max="6"
          placeholder="1-6"
        />
      </section>
      <section >
        <div >
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
          <p>No hay Productos</p>
        </aside>
      </section>
      <div>

        <button  >
          Borrar orden
        </button>
        <button >
          Enviar a cocina
        </button>
      </div>

    </form>
            
    </div>
   )

 }