import React, {Component} from 'react'
import './ShoppingNav.css'
import logo01 from '../../assets/images/logo/logo01.png'
import logo02 from '../../assets/images/logo/logo02.png'
import logo03 from '../../assets/images/logo/logo03.png'
import logo04 from '../../assets/images/logo/logo04.png'
import logo05 from '../../assets/images/logo/logo05.png'
import logo06 from '../../assets/images/logo/logo06.png'
import logo07 from '../../assets/images/logo/logo07.png'
import logo08 from '../../assets/images/logo/logo08.png'
import logo09 from '../../assets/images/logo/logo09.png'
import logo10 from '../../assets/images/logo/logo10.png'

class ShoppingNav extends Component {
    render () {
        const allList = [
            {intro: '球鞋', path: logo01},
            {intro: '球衣', path: logo02},
            {intro: '配件', path: logo03},
            {intro: '足球', path: logo04},
            {intro: '休闲鞋', path: logo05},
            {intro: '运动休闲', path: logo06},
            {intro: '球票', path: logo07},
            {intro: '洗护用品', path: logo08},
            {intro: 'T恤', path: logo09},
            {intro: '全部分类', path: logo10}
        ]
        let arr = []
        allList.forEach((item, index) => {
            let navBlock =
                <section className="navItem" key={'imgNav_' + index}>
                    <div className="img-box">
                        <img className="w30" alt="search" src={item.path} />
                    </div>
                    <div>{item.intro}</div>
                </section>
            arr.push(navBlock)
        })
        return (
            <div className="Shopping_Nav">
                <section className="input_box">
                    <input className="search" type="text" placeholder="大家都在搜：伊涅斯塔"/>
                </section>
                {arr}
            </div>
        )
    }
}

export default ShoppingNav