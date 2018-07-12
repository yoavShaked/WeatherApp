import React, {Component} from 'react';
import SearchBer from './../containers/search_ber';
import WeatherList from './../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBer/>
        <WeatherList/>
      </div>
    );
  }
}
