import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images:[] };

  // Turn this into a arrow function to bind this to fetch data
  onSearchSubmit = (term) => {
    unsplash.get('/search/photos', {
      // Diffrent query parameters
      params:  { query: term },
      
      // Callback that will get invoked with the data from the API get request
    }).then((response) => {
      this.setState({ images: response.data.results });
    });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;

