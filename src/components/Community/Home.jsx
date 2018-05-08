import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import NewsCom from '../../components/NewsCom'
import CommunityNav from '../../containers/CommunityNav.jsx'
import SwipeCom from '../../components/SwipeCom'
import newsJson from '../../assets/json/news.json'
import swipe01 from '../../assets/images/swipe/swipe01.jpg'
import swipe02 from '../../assets/images/swipe/swipe02.jpg'
import swipe03 from '../../assets/images/swipe/swipe03.jpg'
import swipe04 from '../../assets/images/swipe/swipe04.jpg'

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.communityState.itemIndex,
        distance: ownProps.distance
    }
}

class Home extends Component {
    static propTypes = {
        distance: PropTypes.number.isRequired,
        itemIndex: PropTypes.number.isRequired
    }
    render () {
        const itemName  = ['直播', '头条', '热门', '视频', '中超', 'TANGO',
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
        return (
            <div>
                <CommunityNav itemName={itemName} />
                <SwipeCom distance={this.props.distance} swList={swList} />
                {newsArr}
            </div>
        )
    }
}

Home = connect(
    mapStateToProps
)(Home)

export default Home