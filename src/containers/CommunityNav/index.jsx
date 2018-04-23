import { connect } from 'react-redux'
import NavCom from '../../components/NavCom'
import { communityState } from '../../store/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        itemIndex: state.communityState.itemIndex,
        itemName: ownProps.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itemChange: index => {
            dispatch(communityState(index))
        }
    }
}

const CommunityNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavCom)

export default CommunityNav