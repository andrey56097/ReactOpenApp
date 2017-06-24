import React from 'react';

class App extends React.Component {

    submit(){
        console.log("submit", this.testInput.value);
    }

    constructor(){
        super();
        this.kaka = {hfjsd:"fdgfd"};
    }

    render() {
        
        return (
            <div>
                <input type="text" placeholder="test" ref={(input)=>this.testInput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
               {React.cloneElement(this.props.children, {items: this.kaka})}
            </div>
      );
    }
}

export default App;
