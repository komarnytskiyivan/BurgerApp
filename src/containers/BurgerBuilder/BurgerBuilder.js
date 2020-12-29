import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;