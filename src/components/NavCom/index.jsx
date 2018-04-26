import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavCom.css'

class NavCom extends Component {
    render () {
        let {itemIndex, itemChange, itemName} = this.props
        return (
            <div className="nav-com">
                {itemName.map((item, index) => (
                    <span
                        key={`communityNav${index}`}
                        onClick={() => {itemChange(index)}}
                        className="navItem"
                        style={itemIndex === index ?
                            {'color': '#33CC00', 'borderBottom' : '1px solid #33CC00'} :
                            {'color': '#333'}}
                    >{item}</span>
                ))}
            </div>
        )
    }
}

NavCom.propTypes = {
    itemIndex: PropTypes.number.isRequired,
    itemChange: PropTypes.func.isRequired,
    itemName: PropTypes.array.isRequired
}

export default NavCom