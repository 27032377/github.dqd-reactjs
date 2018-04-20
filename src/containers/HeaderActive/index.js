import { connect } from 'react-redux'
import Header from '../../components/Header'
import { headerActive } from '../../store/actions'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        headerActive: state.headerActive
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(`==${ownProps}===`)
    return {
        onClick: () => {
            dispatch(headerActive(ownProps.index))
        }
    }
}

const MyHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default MyHeader