import { Component } from 'react';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.push({ name: 'Hena',id: 12765 });
        return data;
      })
      .then(users => this.setState(
        () => ({ monsters: users }),
        () => console.log(this.state)
      ))
      .catch((err) => console.log('ERROR!!!!',err.message || err))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((el) => {
            return (
              <div key={el.id}>
                <h1> {el.name} </h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;


//