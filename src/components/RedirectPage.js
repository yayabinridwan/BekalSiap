import React, { Component } from 'react'

const url = `https://wa.me/6289520851061`

export default class RedirectPage extends Component {
    componentDidMount() {
        window.location.assign(url);
      }

    render() {
        return(
            <div className="redirects">
                  <p>Loading ... </p>
            </div>
        )
    }
}

