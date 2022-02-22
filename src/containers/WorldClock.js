import React, { Component } from "react";
import Aux from "../hoc/Auxiliary";
import Clock from "../components/Clock/Clock";
import ClockControl from "../components/Clock/ClockControl/ClockControl";
import axios from "../axios-instance";
import Modal from "../components/UI/Model/Modal";
import Page404 from "../components/UI/Page404Error/Page404";

class WorldClock extends Component {
  state = {
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      ampm: 0,
    },
    countries: null,
    error: null,
    countryTime: null,
    selectedCountryName: null,
    localTimezone: null,
    showModal: false,
  };
  componentDidMount() {
    axios
      .get("/timezone")
      .then((response) => {
        // console.log(response);
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message, showModal: true });
      });

    axios
      .get("/ip")
      .then((response) => {
        // console.log(response.data.timezone);
        this.setState({
          localTimezone: response.data.timezone,
          selectedCountryName: "Your",
        });
      })
      .catch((error) => {
        this.setState({ error: error.message, showModal: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.localTimezone) {
      if (prevState.localTimezone !== this.state.localTimezone) {
        axios
          .get("/timezone/" + this.state.localTimezone)
          .then((response) => {
            const time = response.data.datetime;
            this.setState({ countryTime: time.substr(0, 19) });
          })
          .catch((error) => {
            this.setState({ error: error.message, showModal: true });
          });
      }
    }
    // setInterval(()=> {}, 1000)
    if (this.state.countryTime) {
      if (prevState.countryTime !== this.state.countryTime) {
        const date = new Date(this.state.countryTime);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.setState({ time: { hours, minutes, seconds, ampm } });
      }
    }
  }

  selectedCountryHandler = (country) => {
    // console.log(country);
    axios
      .get("/timezone/" + country)
      .then((response) => {
        // console.log(response.data.datetime);
        const time = response.data.datetime;
        let countryName = country;
        countryName = countryName.substring(countryName.indexOf("/") + 1);

        this.setState({
          countryTime: time.substr(0, 19),
          selectedCountryName: countryName,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message, showModal: true });
      });
  };

  render() {
    // setInterval(() => console.log(this.state.countryTime), 1000);
    return (
      <Aux>
        <Aux>
          <Modal show={this.state.showModal} close={() => this.setState({ showModal: false })}>
            {this.state.error}
          </Modal>

          {!this.state.error ? (
            <Aux>
              <Clock
                hours={this.state.time.hours}
                minutes={this.state.time.minutes}
                seconds={this.state.time.seconds}
                ampm={this.state.time.ampm}
                selectedCountryName={this.state.selectedCountryName}
                localTimezone={this.state.localTimezone}
              />
              <ClockControl
                countries={this.state.countries}
                selectedCountryHandler={this.selectedCountryHandler}
                localTimezone={this.state.localTimezone}
                error={this.state.error}
              />{" "}
            </Aux>
          ) : (
            <Page404 />
          )}
        </Aux>
      </Aux>
    );
  }
}

export default WorldClock;
