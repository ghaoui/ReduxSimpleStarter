import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render (){
    return (
      <div>
        <input onChange={this.onInputChange}/>
        Value of the input: { this.state.term }
      </div>
  );
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({ term: event.target.value})
  }
}

export default SearchBar;
