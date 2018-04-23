import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavCom extends Component {
    render () {
        let {itemIndex, itemChange, itemName} = this.props
        return (
            <div>
                {itemName.map((item, index) => (
                    <span
                        key={`communityNav${index}`}
                        onClick={() => {itemChange(index)}}
                        style={itemIndex === index ?
                            {'color': 'red'} : {'color': '#999'}}
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