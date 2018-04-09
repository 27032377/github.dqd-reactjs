import React, { Component } from 'react'
import FilterLink from '../../containers/FilterLink'

class Footer extends Component {
    render () {
        return (
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
        )
    }
}

export default Footer