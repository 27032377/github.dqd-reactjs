import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headerPortrait from '../../assets/images/img/img-portrait.jpg'

class HeaderCom extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        headerActive: PropTypes.string.isRequired,
        toggleActive: PropTypes.func.isRequired
    }
    render () {
        const activeBlock = <span className="activeBlock" />
        const { headerActive, toggleActive } = this.props
        return (
            <div className="header clearfix">
                <div className="header-portrait">
                    <img className="br100 w100" src={headerPortrait} alt="头像" />
                </div>
                <div className="titleText">{this.props.title}</div>
                <div className="headerItem">
                    <span className="item" onClick={() => {toggleActive('1')}}>社区
                        {headerActive === '1' ? activeBlock : null}
                    </span>
                    <span className="item" onClick={() => {toggleActive('2')}}>商城
                        {headerActive === '2' ? activeBlock : null}
                    </span>
                    <span className="item" onClick={() => {toggleActive('3')}}>游戏
                        {headerActive === '3' ? activeBlock : null}
                    </span>
                </div>
            </div>
        )
    }
}

export default HeaderCom