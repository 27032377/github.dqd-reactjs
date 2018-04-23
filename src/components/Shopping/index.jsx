import React, {Component} from 'react'
import ShoppingNav from '../../containers/ShoppingNav'

class Shopping extends Component {
    render () {
        let itemName = ['推荐', 'FIFA OL']
        return (
            <div>
                <ShoppingNav itemName={itemName} />
            </div>
        )
    }
}

export default Shopping