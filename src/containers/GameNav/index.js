import {connect} from 'react-redux'
import NavCom from '../../components/NavCom'
import {shoppingState} from '../../store/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.shoppingState.itemIndex,
        itemName: ownProps.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itemChange: index => {
            dispatch(shoppingState(index))
        }
    }
}

const GameNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavCom)

export default GameNav