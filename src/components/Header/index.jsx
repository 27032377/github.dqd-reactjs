import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headerPortrait from '../../assets/images/img/img-portrait.jpg'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className="header clearfix">
                <div className="header-portrait">
                    <img className="br100 w100" src={headerPortrait} />
                </div>
                <div className="titleText">{this.props.title}</div>
                <div className="headerItem">
                    <span className="item">社区
                        <span className="activeBlock" />
                    </span>
                    <span className="item">商城
                        <span className="activeBlock" />
                    </span>
                    <span className="item">游戏
                        <span className="activeBlock" />
                    </span>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header