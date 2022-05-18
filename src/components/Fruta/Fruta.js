import React from "react"

import { Link } from "react-router-dom";

class Fruta extends React.Component {

    state = {
      cantidad: 0
    }

  
    componentWillUnmount() {
      console.log('ultima voluntad', this.props.name);
    }
      
    agregar = () => {

      let nueva_cantidad = this.state.cantidad + 1

      this.props.bus({
        nombre: this.props.name,
        total: this.props.price * nueva_cantidad
      });

      this.props.mayor_bus(this.props.price * nueva_cantidad)

      this.setState({cantidad: nueva_cantidad})

    }
  
    quitar = () => {

      let nueva_cantidad = this.state.cantidad - 1

      this.props.bus({
        nombre: this.props.name,
        total: this.props.price * nueva_cantidad
      });


      this.setState({cantidad: nueva_cantidad})
    }
  
    limpiar = () => {

      let nueva_cantidad = 0

      this.props.bus({
        nombre: this.props.name,
        total: this.props.price * nueva_cantidad
      });

      this.setState({cantidad: nueva_cantidad})
    }
  
    render() {
      return (
        <>
          <ul>
            <li>
              <Link to="/Corozo">ir Corozo</Link>
            </li>
            <li>
              <Link to="/Zapote">ir Zapote</Link>
            </li>
            <li>
              <Link to="/Mongo">ir Mongo</Link>
            </li>
          </ul>
          <div>
            <h3>{this.props.name}</h3>
            <p>Precio: {this.props.price}</p>
            <p>Cantidad: {this.state.cantidad}</p>
            <p><strong>Total:</strong> {this.props.price * this.state.cantidad}</p>
    
            <button onClick={this.agregar}>+</button>
            <button onClick={this.quitar}>-</button>
            <button onClick={this.limpiar}>Limpiar</button>
    
            <hr />
          </div>
        </>
      )
    }
  }

export default Fruta