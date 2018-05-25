import React, {Component} from 'react'
import SectionTil from '../../components/SectionTil'
import SectionMain from '../../components/SectionMain'
import SectionFoot from '../../components/SectionFoot'
import hotNews from '../../assets/json/hotNews.json'

class HotSection extends Component {
    componentWillMount () {
        console.log(this.props.location)
    }
    render () {
        const {num} = hotNews
        const hasComment = true
        return (
            <div className="Hot_Section">
                <SectionTil num={num} til="懂球帝" hasComment={hasComment} />
                <SectionMain {...hotNews} />
                <SectionFoot num={num} />
            </div>
        )
    }
}

export default HotSection