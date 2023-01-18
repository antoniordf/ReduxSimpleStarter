import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAitamgr_GysMuZ9seJrbWntNh2InkTFPE';



// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // the callback function could be refactored to: (videos) => {this.setState({ videos: videos })}
    // It could be refactored further as such: (videos) => this.setState({ videos })
    // when you have "videos: videos" you can just say "videos" in ES6.
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
