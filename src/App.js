import  react,{Component} from 'react';
import logo from './logo.svg';
import {CardList} from "./components/card-list/card-list";
import './App.css';
import {SearchBox} from "./components/search-box/search-box";


class App extends Component{

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));

   /* fetch("https://jsonplaceholder.typicode.com/userss")
        //.then(response => response.json())
        .then(users => console.log(users))
        .catch(error => console.log(error))
    ;*/
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }
  render() {
      const {monsters, searchField} = this.state;
      const filterdMonsters = this.state.monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return <div className="App">
    <h1>Momnsters Rolodex</h1>
      <SearchBox placeHolder ='Search monsters'
                 handleChange={this.handleChange} />
      <CardList monsters = {filterdMonsters}>
      </CardList>
    </div>;
  }
}

export default App;
