import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './sectiontil.css'
import back from '../../assets/images/icon/icon-leftArrow.png'

class SectionTil extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired
    }
    clickBack () {
        this.props.history.go(-1)
    }
    render () {
        return (
            <div className="Section_Til">
                <img className="arrow-box" src={back} alt="back" onClick={this.clickBack.bind(this)}/>
                懂球帝
                <section className="num-box">{this.props.num}评论</section>
            </div>
        )
    }
}

export default withRouter(SectionTil)