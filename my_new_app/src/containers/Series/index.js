import React, { Component } from 'react';
import SeriesList from '../../components/Serieslist';

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false,
    message: "Here you can find all of your favourite TV Series"
  }


  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true});
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) =>  response.json())
    .then( json => this.setState({series: json, isFetching: false}))
  }
  render(){
    const { series, seriesName, isFetching } = this.state;
    return(
      <div>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}/>
        </div>
        {
          series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series name into the input field</p>
        }
        {
          series.length === 0 && seriesName !== ''
          &&
          <p>No TV series found with that name</p>
        }
        <SeriesList list={this.state.series}/>
      </div>
    )
  }
}

export default Series;
