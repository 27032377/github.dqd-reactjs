import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './newsCom.css'
import logo from '../../assets/images/logo/logo04.png'

class NewsCom extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        commentNum: PropTypes.number.isRequired,
        top: PropTypes.bool.isRequired
    }
    render () {
        const {
            title,
            author = '',
            commentNum,
            top = false,
            deep = false
        } = this.props
        let topBlock = top ? <span className="border topBlock">置顶</span> : null
        let deepBlock = (!top && deep) ? <span className="border deepBlock">深度</span> : null
        return (
            <div className="News_Com b_box">
                <section className="w20 dpi img_box">
                    <img className="w50" src={logo} alt={author} />
                </section>
                <section className="w80 dpi intro_box">
                    <p className="w100 intro_top">{title}</p>
                    <div className="w100 intro_bottom clearfix">
                        <div className="fl">{author}</div>
                        <div className="fr">
                            <span>{commentNum}评论</span>
                            {topBlock}
                            {deepBlock}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NewsCom