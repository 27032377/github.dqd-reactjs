import React, {Component} from 'react'
import CommunityNav from '../../containers/CommunityNav'
import NewsCom from '../../components/NewsCom'
import newsJson from '../../assets/json/news.json'
import SwipeCom from '../../components/SwipeCom'
import swipe01 from '../../assets/images/swipe/swipe01.jpg'
import swipe02 from '../../assets/images/swipe/swipe02.jpg'
import swipe03 from '../../assets/images/swipe/swipe03.jpg'
import swipe04 from '../../assets/images/swipe/swipe04.jpg'

class Community extends Component {
    constructor (...args) {
        super(...args)
        this.state = {distance: 375}
    }
    componentWillMount () {
        const distance = document.body.clientWidth
        console.log(distance)
        this.setState({
            distance
        })
    }
    render () {
        const itemName = ['直播', '头条', '热门', '视频', '中超', 'TANGO',
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
                <SwipeCom distance={this.state.distance} swList={swList} />
                {newsArr}
            </div>
        )
    }
}

export default Community