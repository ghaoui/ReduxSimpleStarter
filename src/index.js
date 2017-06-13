import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = ' AIzaSyBQVm0f0zLQxeNqdUqpOBA7VCEVCge7gQo';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}



ReactDOM.render(<App />, document.querySelector('.container'));
