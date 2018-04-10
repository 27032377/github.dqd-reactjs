import React, { Component } from 'react'
import FilterLink from '../../containers/FilterLink'
import { Button } from 'antd-mobile'
import 'antd-mobile/lib/button/style/index.css'

class Footer extends Component {
    render () {
        return (
            <div>
                <p>
                    Show:
                    {' '}
                    <FilterLink filter="SHOW_ALL">
                        All
                    </FilterLink>
                    {', '}
                    <FilterLink filter="SHOW_ACTIVE">
                        ACTIVE
                    </FilterLink>
                    {', '}
                    <FilterLink filter="SHOW_COMPLETED">
                        Completed
                    </FilterLink>
                </p>
                <Button type="warning">按钮</Button>
            </div>
        )
    }
}

export default Footer