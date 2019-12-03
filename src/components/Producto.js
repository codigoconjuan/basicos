import React from 'react';

const Producto = ({producto}) => {


    const { nombre, precio, id } = producto;

    // Agregar producto al carrito
    const seleccionarProducto = id => {
        console.log('comprando... ', id);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={ () => seleccionarProducto(id) }
            >Comprar</button>
        </div>
     );
}

 
export default Producto;