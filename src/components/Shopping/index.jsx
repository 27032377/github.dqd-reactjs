import React, {Component} from 'react'
import ShoppingNav from '../../components/ShoppingNav'
import FooterShopping from '../../components/FooterShopping'

class Shopping extends Component {
    render () {
        return (
            <div className="Shopping">
                <ShoppingNav/>
                <div className="fill-box" />
                <FooterShopping/>
            </div>
        )
    }
}

export default Shopping