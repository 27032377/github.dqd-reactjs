import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../containers/Header.jsx'
import Community from '../../components/Community'
import Game from '../../components/Game'
import Shopping from '../../components/Shopping'
import './home.css'

const mapStateToProps = state => {
    return {
        headerActive: state.headerData.headerActive
    }
}

class Home extends Component {
    static propTypes = {
        headerActive: PropTypes.string.isRequired
    }
    render () {
        let {headerActive} = this.props
        let item
        switch (headerActive) {
            case '1':
                item = <Community/>
                break
            case '2':
                item = <Shopping/>
                break
            case '3':
                item = <Game/>
                break
            default:
                item = null
                break
        }
        return (
            <div>
                <Header />
                {item}
            </div>
        )
    }
}

Home = connect(mapStateToProps)(Home)

export default Home