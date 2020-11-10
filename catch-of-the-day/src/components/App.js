import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        //1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2. Add our new fish to that fishes variable
        fishes[`fish${Date.now}`] = fish; //{Date.now} will give the time in milliseconds, so unless you submit multiple fishes in a millisec, these will all be unique.
        //3. Set the new fishes object to state
        this.setState({
            fishes: fishes //or can do just fishes if they are the same thing
        })
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={100}/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;
