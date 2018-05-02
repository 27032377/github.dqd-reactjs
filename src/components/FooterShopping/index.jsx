import React, {Component} from 'react'
import {changeShoppingActive} from '../../store/actions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './shoppingFooter.css'
import iHome from '../../assets/images/icon/icon-house.png'
import iHomeS from '../../assets/images/icon/icon-house-s.png'
import iList from '../../assets/images/icon/icon-list.png'
import iListS from '../../assets/images/icon/icon-list-s.png'
import iShopcar from '../../assets/images/icon/icon-shopcar.png'
import iShopcarS from '../../assets/images/icon/icon-shopcar-s.png'
import iMy from '../../assets/images/icon/icon-my.png'
import iMyS from '../../assets/images/icon/icon-my-s.png'

const mapStateToProps = state => {
    return {
        footerActive: state.shoppingState.active
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeActive: index => {
            dispatch(changeShoppingActive(index))
        }
    }
}

class FooterShopping extends Component {
    static propTypes = {
        footerActive: PropTypes.number.isRequired,
        changeActive: PropTypes.func.isRequired
    }
    render () {
        const {footerActive, changeActive} = this.props
        return (
            <div className="tc Shopping_Footer">
                <section className="dpi w25" onClick={() => {changeActive(0)}}>
                    <div className="img_box">
                        <img className="w20"
                        alt="首页"
                        src={footerActive === 0 ? iHomeS : iHome}
                    /></div>
                    <span>首页</span>
                </section>
                <section className="dpi w25" onClick={() => {changeActive(1)}}>
                    <div className="img_box">
                        <img className="w20"
                        alt="首页"
                        src={footerActive === 1 ? iListS: iList}
                    /></div>
                    <span>分类</span>
                </section>
                <section className="dpi w25" onClick={() => {changeActive(2)}}>
                    <div className="img_box">
                        <img className="w20"
                        alt="首页"
                        src={footerActive === 2 ? iShopcarS: iShopcar}
                    /></div>
                    <span>购物车</span>
                </section>
                <section className="dpi w25" onClick={() => {changeActive(3)}}>
                    <div className="img_box">
                        <img className="w20"
                        alt="首页"
                        src={footerActive === 3 ? iMyS: iMy}
                    /></div>
                    <span>我的商城</span>
                </section>
            </div>
        )
    }
}

FooterShopping = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterShopping)

export default FooterShopping