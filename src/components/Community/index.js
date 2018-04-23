import React, {Component} from 'react'
import CommunityNav from '../../containers/CommunityNav'

class Community extends Component {
    render () {
        const itemName = ['直播', '头条']
        return (
            <div>
                <CommunityNav itemName={itemName} />
            </div>
        )
    }
}

export default Community