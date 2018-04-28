import React, {Component} from 'react'
import PropTypes from 'prop-types'
import headerPortrait from '../../assets/images/img/img-portrait.jpg'

class HeaderNor extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render () {
        const { title } = this.props
        return (
            <div className="header clearfix">
                <div className="header-portrait">
                    <img className="br100 w100" src={headerPortrait} alt="头像" />
                </div>
                <div className="titleText">{title}</div>
            </div>
        )
    }
}

export default Header