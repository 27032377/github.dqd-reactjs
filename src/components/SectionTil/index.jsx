import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './sectiontil.css'
import back from '../../assets/images/icon/icon-leftArrow.png'

class SectionTil extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired
    }
    render () {
        return (
            <div className="Section_Til">
                <img className="arrow-box" src={back} alt="back"/>
                懂球帝
                <section className="num-box">{this.props.num}评论</section>
            </div>
        )
    }
}

export default SectionTil