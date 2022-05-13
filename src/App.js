
import React, { useState } from 'react';
import Fruta from './components/Fruta'

class App extends React.Component {

    state = {
        corozo: 0,
        zapote: 0,
        mongo: 0
    }

    total = (parametro) => {

        if (parametro.nombre == "Corozo") {
            this.state.corozo = parametro.total
        } else {
            if (parametro.nombre == "Zapote") {
                this.state.zapote = parametro.total
            } else {
                this.state.mongo = parametro.total
            }
        }

        this.forceUpdate()

    }

    render() {
        return (
            <>
                <Fruta name={'Corozo'} price={3} bus={this.total} mayor_bus={this.props.bus_mayor} />
                <Fruta name='Zapote' price={5}  bus={this.total}  mayor_bus={this.props.bus_mayor} />
                <Fruta name='Mongo' price={2} bus={this.total}  mayor_bus={this.props.bus_mayor} />

                <p><strong>Total:</strong> {this.state.corozo + this.state.zapote + this.state.mongo}</p>
            </>
        )
    }
}

export default App
