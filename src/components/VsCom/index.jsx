import React, {Component} from 'react'
import PropTypes from 'prop-types'
import logo01 from '../../assets/images/logo/logo11.png'
import logo02 from '../../assets/images/logo/logo12.png'
import bell from '../../assets/images/icon/icon-bell.png'
import './vscom.css'

class VsCom extends Component {
    static propTypes = {
        host: PropTypes.string.isRequired,
        visit: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool,
        live: PropTypes.string.isRequired,
        score: PropTypes.string
    }
    render () {
        const {host, visit, name, live, isFinish = false, score = '0 - 0'} = this.props
        return (
            <div className="Vs_Com">
                <section className="w33">
                    <div className="img-box">
                        <img className="h100" src={logo01} alt="host"/>
                    </div>
                    <div>{host}</div>
                </section>
                <section className="w33 c6">
                    <p>{name}</p>
                    {
                        isFinish ? <p className="score-box">{score}</p> :
                            <div className="bell-box"><img className="h100" src={bell} alt="bell"/></div>
                    }
                    <p>{live}</p>
                </section>
                <section className="w33">
                    <div className="img-box">
                        <img className="h100" src={logo02} alt="visit"/>
                    </div>
                    <div>{visit}</div>
                </section>
            </div>
        )
    }
}

export default VsCom