import { connect } from 'react-redux'
import HeaderCom from '../components/HeaderCom'
import { headerActive } from '../store/actions'

const mapStateToProps = state => {
    const {headerActive, swi, location, title} = state.headerData
    return {
        headerActive,
        swi,
        location,
        title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleActive: index => {
            dispatch(headerActive(index))
        }
    }
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderCom)

export default Header