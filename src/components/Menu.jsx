import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {

    render() {

        return (

            <div className = "primary-menu">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/"><span>Home</span></Link></li>
                            <li><Link to="/Task1"><span>Task1</span></Link></li>
                            <li><Link to="/Task2"><span>Task2</span></Link></li>
                            <li><Link to="/Task3"><span>Task3</span></Link></li>
                        </ul>
                    </nav>
                </header>
            </div>

        );
    }
}

export default Menu;
