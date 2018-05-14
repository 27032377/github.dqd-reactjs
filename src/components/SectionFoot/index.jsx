import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './sectionFoot.css'
import comment from '../../assets/images/icon/icon-comment.png'
import like from '../../assets/images/icon/icon-like.png'
import send from '../../assets/images/icon/icon-send.png'
import likeY from '../../assets/images/icon/icon-like-y.png'

class SectionFoot extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired
    }
    constructor (...args) {
        super(...args)
        this.state = {
            url: like
        }
    }
    likeClick () {
        let url = this.state.url
        let path = url === like ? likeY : like
        this.setState({url: path})
    }
    render () {
        return (
            <div className="Section_Foot">
                <section className="input-box">
                    <input type="text" placeholder="发表你的懂球帝言论"/>
                </section>
                <section className="dpi icon-box">
                    <div className="num-box">
                        <img className="h100" src={comment} alt="comment"/>
                        <span className="num">{this.props.num}</span>
                    </div>
                    <img className="img" src={this.state.url} alt="like" onClick={this.likeClick.bind(this)}/>
                    <img className="img" src={send} alt="send"/>
                </section>
            </div>
        )
    }
}

export default SectionFoot