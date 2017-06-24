import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

    render() {

        return (

            <div>
                <header>
                    <nav>
                        <ul>
                            {/*<li><Link to='/'>Home</Link></li>
                            <li><Link to='/roster'>Roster</Link></li>
                            <li><Link to='/schedule'>Schedule</Link></li>*/}
                        </ul>
                    </nav>
                </header>
            </div>

        );
    }
}

export default Header;
