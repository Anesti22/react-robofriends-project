import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './Robots';


class App extends Component {

    constructor() {

        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    render() {

        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        console.log('Filtered: ', filteredRobots)

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )   
    }
}

export default App