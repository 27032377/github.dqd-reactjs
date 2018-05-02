import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {footerActive, headerSwi, headerLocation, headerTitle} from '../../store/actions'
import iconHome from '../../assets/images/icon/icon_home.png'
import iconHomeS from '../../assets/images/icon/icon_home_s.png'
import iconVideo from '../../assets/images/icon/icon_video.png'
import iconVideoS from '../../assets/images/icon/icon_video_s.png'
import iconFootball from '../../assets/images/icon/icon_football.png'
import iconTalk from '../../assets/images/icon/icon_talk.png'
import iconTalkS from '../../assets/images/icon/icon_talk_s.png'
import iconData from '../../assets/images/icon/icon_data.png'
import iconDatas from '../../assets/images/icon/icon_data_s.png'
import './footer.css'

const mapStateToProps = state => {
    return {
        footerActive: state.footerActive
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickHandler: index => {
            dispatch(footerActive(index))
        },
        headerSwi: bool => {
            dispatch(headerSwi(bool))
        },
        headerLocation: str => {
            dispatch(headerLocation(str))
        },
        headerTitle: str => {
            dispatch(headerTitle(str))
        }
    }
}

class FooterHome extends Component {
    static propTypes = {
        footerActive: PropTypes.string.isRequired,
        clickHandler: PropTypes.func.isRequired
    }
    tabChange (str) {
        const {clickHandler, headerSwi, headerLocation, headerTitle} = this.props
        clickHandler(str)
        switch (str) {
            case '2':
                new Promise(() => {
                    headerSwi(false)
                }).then(
                    headerLocation('center')
                ).then(
                    headerTitle('比赛')
                )
                break
            case '3':
                new Promise(() => {
                    headerSwi(false)
                }).then(
                    headerLocation('center')
                ).then(
                    headerTitle('圈子')
                )
                break
            case '4':
                new Promise(() => {
                    headerSwi(false)
                }).then(
                    headerLocation('center')
                ).then(
                    headerTitle('数据')
                )
                break
            default:
                new Promise(() => {
                    headerSwi(true)
                }).then(
                    headerLocation('left')
                ).then(
                    headerTitle('懂球帝')
                )
                break
        }
    }
    render () {
        const {footerActive} = this.props
        return (
            <div className="Foot_Com">
                <section className="foot-item" onClick={this.tabChange.bind(this, '1')}>
                    <div>
                        <img className="w30" src={footerActive === '1' ? iconHomeS : iconHome} alt="home"/>
                    </div>
                    <p className={`footer_intro ${footerActive === '1' ? 'active' : ''}`}>首页</p>
                </section>
                <section className="foot-item" onClick={this.tabChange.bind(this, '2')}>
                    <div>
                        <img className="w30" src={footerActive === '2' ? iconVideoS : iconVideo} alt="video"/>
                    </div>
                    <p className={`footer_intro ${footerActive === '2' ? 'active' : ''}`}>比赛</p>
                </section>
                <section className="foot-item">
                    <div>
                        <img src={iconFootball} alt="football"/>
                    </div>
                </section>
                <section className="foot-item" onClick={this.tabChange.bind(this, '3')}>
                    <div>
                        <img className="w30" src={footerActive === '3' ? iconTalkS : iconTalk} alt="talk"/>
                    </div>
                    <p className={`footer_intro ${footerActive === '3' ? 'active' : ''}`}>圈子</p>
                </section>
                <section className="foot-item" onClick={this.tabChange.bind(this, '4')}>
                    <div>
                        <img className="w30" src={footerActive === '4' ? iconDatas : iconData} alt="data"/>
                    </div>
                    <p className={`footer_intro ${footerActive === '4' ? 'active' : ''}`}>数据</p>
                </section>
            </div>
        )
    }
}

FooterHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterHome)

export default FooterHome