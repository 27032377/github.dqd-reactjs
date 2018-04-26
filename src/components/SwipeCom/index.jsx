import React, {Component} from 'react'
import './swipeCom.css'

class SwipeCom extends Component {
    constructor (...args) {
        super(...args)
        this.state = {
            startX: 0,
            endX: 0,
            moveX: 0
        }
    }
    touchStart (index, e) {
        let lastMove = this.state.moveX
        let startX = e.targetTouches[0].pageX - lastMove
        this.setState({startX})
    }
    touchMove (index, e) {
        let endX = e.targetTouches[0].pageX
        let moveX = endX - this.state.startX
        console.log(moveX)
        // console.log(e.targetTouches[0], index)
        this.setState({endX, moveX})
        if (Math.abs(moveX) > parseInt(this.props.distance / 3)) {
            moveX = 0 - this.props.distance * (index + 1)
            this.setState({moveX})
        }
    }
    touchEnd (index, e) {
        // console.log(e.targetTouches)
    }
    render () {
        const {distance, swList} = this.props
        const len = swList.length
        return (
            <div style={{'width': '100%'}} className="Swipe_Container">
                <div
                    style={{'width': distance * len,
                        'left': this.state.moveX,
                        'position': 'absolute'
                    }}
                >
                    {len > 0 && swList.map((item, index) => {
                        return (
                            <div
                                className="itemBox"
                                key={'swipe_' + index}
                                onTouchStart={this.touchStart.bind(this, index)}
                                onTouchMove={this.touchMove.bind(this, index)}
                                onTouchEnd={this.touchEnd.bind(this, index)}
                            >
                                <img
                                    style={{'width': distance}}
                                    src={item}
                                    alt={index}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default SwipeCom