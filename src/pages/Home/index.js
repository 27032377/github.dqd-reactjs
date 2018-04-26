import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../containers/Header'
import Community from '../../components/Community'
import Shopping from '../../components/Shopping'
import Footer from '../../components/Footer'
import './home.css'

const mapStateToProps = state => {
    return {
        headerActive: state.headerActive
    }
}

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        let {headerActive} = this.props
        let item
        switch (headerActive) {
            case '1':
                item = <Community/>
                break
            case '3':
                item = <Shopping/>
                break
            default:
                item = null
                break
        }
        return (
            <div>
                <Header title="懂球帝" />
                {item}
                <div className="fill-box" />
                <Footer />
            </div>
        )
    }
}

Home.propTypes = {
    headerActive: PropTypes.string.isRequired
}

Home = connect(mapStateToProps)(Home)

export default Home