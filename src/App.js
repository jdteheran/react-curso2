
import React, { useState } from 'react';
import Fruta from './components/Fruta'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CheckIn from './components/CheckIn';


class App extends React.Component {



    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/corozo" element={
                        <Fruta 
                            name={'Corozo'}
                            price={3}
                            bus={this.total}
                            mayor_bus={this.props.bus_mayor} 
                        />
                    } />

                    <Route path="/zapote" element={
                        <CheckIn />
                    } />

                    <Route path="/mongo" element={
                        <Fruta
                        name='Mongo'
                        price={2}
                        bus={this.total}
                        mayor_bus={this.props.bus_mayor}
                        />
                    } />

                    <Route path="/*" element={
                        <Fruta
                        name='Azul'
                        price={2}
                        bus={this.total}
                        mayor_bus={this.props.bus_mayor}
                        />
                    } />

                </Routes>
            </BrowserRouter>
        )
    }
}

export default App
