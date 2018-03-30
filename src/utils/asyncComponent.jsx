import React, {Component} from 'react'

export default function asyncComponent (importantComponent) {
    class AsyncComponent extends Component {
        constructor (props) {
            super(props)
            this.state = {
                component: null
            }
        }
        async componentDidMount () {
            const { default: component } = importantComponent()
            this.setState({component})
        }
        render () {
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncCOmponent
}