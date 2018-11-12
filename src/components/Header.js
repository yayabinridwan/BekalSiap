import React from 'react'
import PropTypes from 'prop-types'


class Header extends React.Component {
    static propTypes = {
        tagline: PropTypes.string
    }
    
    render() {
        return (
            <header >
                <img src="/images/logo1.png" width="200px" height="100%" />
                <h3 >
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}

export default Header