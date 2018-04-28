import React, {Component} from 'react'
import GameNav from '../../containers/GameNav'

class Game extends Component {
    render () {
        let itemName = ['推荐', 'FIFA OL', '游戏视频', '冠军中超OL',
            '实况中超', 'FIFA', 'PES', 'FM', '其他游戏'
        ]
        return (
            <div>
                <GameNav itemName={itemName} />
            </div>
        )
    }
}

export default Game