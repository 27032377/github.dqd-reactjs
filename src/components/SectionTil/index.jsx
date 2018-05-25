import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './sectiontil.css'
import back from '../../assets/images/icon/icon-leftArrow.png'

class SectionTil extends Component {
    static propTypes = {
        num: PropTypes.number,
        til: PropTypes.string,
        hasComment: PropTypes.bool.isRequired
    }
    clickBack () {
        this.props.history.go(-1)
    }
    clickComment () {
        this.props.history.push('/comment')
    }
    render () {
        const {til = '懂球帝', num = 0, hasComment} = this.props
        const comment = hasComment ?
            <section className="num-box" onClick={this.clickComment.bind(this)}>{num}评论</section> :
            null
        return (
            <div className="Section_Til">
                <img className="arrow-box" src={back} alt="back" onClick={this.clickBack.bind(this)}/>
                {til}
                {comment}
            </div>
        )
    }
}

export default withRouter(SectionTil)