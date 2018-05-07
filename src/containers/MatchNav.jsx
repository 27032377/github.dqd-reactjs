import NavCom from '../components/NavCom'
import {connect} from 'react-redux'
import {changeMatchIndex} from '../store/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.communityState.matchIndex,
        itemName: ownProps.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itemChange: index => {
            dispatch(changeMatchIndex(index))
        }
    }
}

const MatchNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavCom)

export default MatchNav