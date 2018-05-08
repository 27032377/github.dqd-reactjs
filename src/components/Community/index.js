import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FooterHome from '../../components/FooterHome'
import Home from './Home.jsx'
import Match from './Match'
import './community.css'

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
        switch (footerActive) {
            // 首页
            case '1':
                content = <Home distance={this.state.distance}/>
                break
            // 比赛
            case '2':
                content = <Match/>
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