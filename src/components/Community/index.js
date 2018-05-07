import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommunityNav from '../../containers/CommunityNav.jsx'
import MatchNav from '../../containers/MatchNav.jsx'
import NewsCom from '../../components/NewsCom'
import newsJson from '../../assets/json/news.json'
import SwipeCom from '../../components/SwipeCom'
import FooterHome from '../../components/FooterHome'
import swipe01 from '../../assets/images/swipe/swipe01.jpg'
import swipe02 from '../../assets/images/swipe/swipe02.jpg'
import swipe03 from '../../assets/images/swipe/swipe03.jpg'
import swipe04 from '../../assets/images/swipe/swipe04.jpg'

const mapStateToProps = state => {
    return {
        footerActive: state.footerActive
    }
}

class Community extends Component {
    constructor (...args) {
        super(...args)
        this.state = {distance: 375}
    }
    static propTypes = {
        footerActive: PropTypes.string.isRequired
    }
    componentWillMount () {
        const distance = document.body.clientWidth
        this.setState({
            distance
        })
    }
    render () {
        const {footerActive} = this.props
        let content
        let itemName
        switch (footerActive) {
            // 首页
            case '1':
                itemName  = ['直播', '头条', '热门', '视频', '中超', 'TANGO',
                    '懂球号', '足彩', '集锦', '深度', '问答', '闲情', '专题'
                ]
                const newsList = newsJson.news
                const len = newsList.length
                const swList = [swipe01, swipe02, swipe03, swipe04]
                let newsArr = []
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let item =  <NewsCom {...newsList[i]} key={'news_' + i} />
                        newsArr.push(item)
                    }
                }
                content = (
                    <div>
                        <CommunityNav itemName={itemName} />
                        <SwipeCom distance={this.state.distance} swList={swList} />
                        {newsArr}
                    </div>
                )
                break
            // 比赛
            case '2':
                itemName = ['关注', '重要', '足彩', '中超', '世界杯', '英超', '西甲',
                    '德甲', '意甲', '中甲', '足协杯', '中乙']
                content = (
                    <div>
                        <MatchNav itemName={itemName} />
                    </div>
                )
                break
            default:
                content = (
                    <div />
                )
                break
        }
        return (
            <div>
                {content}
                <div className="fill-box" />
                <FooterHome />
            </div>
        )
    }
}

Community = connect(
    mapStateToProps
)(Community)

export default Community