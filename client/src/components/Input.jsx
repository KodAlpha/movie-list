import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    addStr: ''
    }
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({addStr: e.target.value})
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type='text' id='MovieInput' value={this.state.addStr} onChange={this.handleChange} placeholder='Add to your movie list'></input>
      <button>Add</button>
      </form>
    )
  }
}

export default Input;