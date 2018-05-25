import React, {Component} from 'react'
import SectionTil from '../../components/SectionTil'

class Comment extends Component {
    render () {
        const hasComment = false
        return (
            <div>
                <SectionTil til="评论" hasComment={hasComment} />
            </div>
        )
    }
}

export default Comment