import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from './../components/googleMap';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;
        console.log(cityData);
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temperatures} color="red" units="D"/></td>
                <td><Chart data={pressures} color="black" units="hPa"/></td>
                <td><Chart data={humidities} color="blue" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (D)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);