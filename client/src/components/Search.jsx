import React from 'react';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchStr: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({searchStr: e.target.value});
    // console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.searchStr);
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <label className='MovieSearch'>Search Movies
      <input type='text' id='MovieSearch' value={this.state.searchStr} onChange={this.handleChange} placeholder='search...'></input>
      </label>
      <button>Search</button>
      </form>
  )
  };
}
export default Search;