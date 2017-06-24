import React from 'react';
import Menu from './components/Menu.jsx'
import Main from './components/Main.jsx'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Button } from 'react-bootstrap';

const buttonsInstance = (
  <Button>Click me!</Button>
);

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Menu/>
                <Main/>
                 <Button>Click me!</Button>
            </div>
      );
    }
}

export default App;
