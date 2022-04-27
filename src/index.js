import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';


class App extends Component {

    render() {
        return <>
            <h1>Sistema de Citas - Cliente</h1>
        </>
    }

}


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<App />);
