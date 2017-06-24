import React from 'react';

import Header from './Header.jsx';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
     {
        link: '/contacts',
        label: 'Contacts'
    },
     {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends React.Component {
    render() {
        return (

            <div>
                <Header items={menu}/>
            </div>
      );
    }
}

export default App;
