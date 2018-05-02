import {connect} from 'react-redux'
import NavCom from '../../components/NavCom'
import {changeGameItem} from '../../store/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.gameState.itemIndex,
        itemName: ownProps.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itemChange: index => {
            dispatch(changeGameItem(index))
        }
    }
}

const GameNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavCom)

export default GameNav