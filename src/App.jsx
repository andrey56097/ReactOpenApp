import React from 'react';

class App extends React.Component {

    submit(){
        console.log("submit", this.testInput.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="test" ref={(input)=>this.testInput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
      );
    }
}

export default App;
