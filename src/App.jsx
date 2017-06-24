import React from 'react';
import Menu from './components/Menu.jsx'
import Main from './components/Main.jsx'

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Menu/>
                <Main/>
            </div>
      );
    }
}

export default App;
