import React from 'react';

import style from './app.css';

import RegistrationForm from './RegistrationForm.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <RegistrationForm/>
            </div>
      );
    }
}

export default App;
