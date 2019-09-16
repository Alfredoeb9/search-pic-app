import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images:[] };

  // Turn this into a arrow function to bind this to fetch data
  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      // Diffrent query parameters
      params:  { query: term },
      headers: {
        Authorization: 'Client-ID 67068dbce91d728386a576b8af17a9f34cc304cbafc84a32ce7438cf3c028063'
      }
      // Callback that will get invoked with the data from the API get request
    }).then((response) => {
      this.setState({ images: response.data.results });
    });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: { this.state.images.length } images
      </div>
    );
  }
}

export default App;

