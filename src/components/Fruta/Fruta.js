import React from "react"

class Fruta extends React.Component {

    constructor() {
      super()
  
      this.state = {
        cantidad: 0
      }
    }
  
    agregar = () => {
      this.setState({cantidad: this.state.cantidad + 1})
    }
  
    quitar = () => {
      this.setState({cantidad: this.state.cantidad - 1})
    }
  
    limpiar = () => {
      this.setState({cantidad: 0})
    }
  
    render() {
      return (
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
      )
    }
  }

export default Fruta