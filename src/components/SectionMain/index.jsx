import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './section-main.css'
import img from '../../assets/images/swipe/swipe02.jpg'

class SectionMain extends Component {
    static proptypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
        label: PropTypes.arrayOf(PropTypes.string).isRequired,
        sourceFrom: PropTypes.string
    }
    render () {
        const {title, author, date, header, main, label, sourceFrom} = this.props
        let sourceBox = sourceFrom ?
            <section className="source-box">消息来源参考：{sourceFrom}</section> : null
        return (
            <div className="Section_Main">
                <section className="til-box">{title}</section>
                <section className="date-box">
                    <span style={{'color': '#33CC00'}}>{author}</span> {date}
                </section>
                <section className="c-style">{header}</section>
                <section className="c-style">
                    <img className="w100" src={img} alt="img"/>
                </section>
                <section className="c-style" dangerouslySetInnerHTML={{__html: main}}/>
                {sourceBox}
                <section className="label-box">{label.length > 0 && label.map((item, index) => {
                    return (
                        <div className="label-item" key={'label' + index}>{item}</div>
                    )
                })}</section>
            </div>
        )
    }
}

export default SectionMain