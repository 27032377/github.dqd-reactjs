import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MatchNav from '../../containers/MatchNav.jsx'
import VsCom from '../VsCom'
import matchList from '../../assets/json/matchList.json'

const mapStateToProps = state => {
    return {
        matchIndex: state.communityState.matchIndex
    }
}

class Match extends Component {
    static propTypes = {
        matchIndex: PropTypes.number.isRequired
    }
    render () {
        const list = matchList.list
        const itemName = ['关注', '重要', '足彩', '中超', '世界杯', '英超', '西甲',
            '德甲', '意甲', '中甲', '足协杯', '中乙']
        return (
            <div className="Match_Com">
                <MatchNav itemName={itemName} />
                {
                    list.map((item, index) => {
                        let arr = []
                        item.item.map((detail, i) => {
                            return arr.push(
                                <VsCom key={'detail_' + i} {...detail}/>
                            )
                        })
                        return (
                            <section key={'list_' + index}>
                                <p className="date-til">{item.date}</p>
                                {arr}
                            </section>
                        )
                    })
                }
            </div>
        )
    }
}

Match = connect(
    mapStateToProps
)(Match)

export default Match