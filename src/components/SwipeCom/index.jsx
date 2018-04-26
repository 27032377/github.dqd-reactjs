import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './swipeCom.css'

class SwipeCom extends Component {
    constructor (...args) {
        super(...args)
        this.state = {num: 0}
    }
    static propTypes = {
        swList: PropTypes.array.isRequired,
        distance: PropTypes.number.isRequired
    }
    componentWillMount () {
        const {swList} = this.props
        let len = swList.length
        let num = 0
        this.timer = setInterval(() => {
            num++
            if (num === len) {
                num = 0
            }
            this.setState({num})
        }, 2000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render () {
        const {swList, distance} = this.props
        const len = swList.length
        let idotArr = []
        let height = parseInt(distance / 2)
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                let name = i === this.state.num ? 'idot active' : 'idot'
                let item = <div
                    className={name}
                    key={'idot_' + i}
                />
                idotArr.push(item)
            }
        }
        return (
            <div className="Swipe_Com" style={{'height': height}}>
                {len > 0 && swList.map((item, index) => {
                    if (index === this.state.num) {
                        return (
                            <section
                                key={'swipe_' + index}
                                className="Swipe_Item"
                            >
                                <img
                                    className="w100"
                                    src={item}
                                    alt={index}
                                />
                            </section>
                        )
                    } else {
                        return null
                    }
                })}
                <section className="Idot_Box">
                    <div>{idotArr}</div>
                </section>
            </div>
        )
    }
}
export default SwipeCom