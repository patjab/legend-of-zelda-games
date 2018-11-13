import React, { Component } from 'react'

class Search extends Component {
  handleChange = (e) => {
    this.props.getSearchTerms(e.target.value)
  }

  render() {
    return (
      <div id="Search">
        <input type="text" onChange={this.handleChange} placeholder="enter a year"/>
      </div>
    )
  }
}

export default Search
