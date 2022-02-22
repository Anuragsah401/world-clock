import React, { Component, useEffect, useState } from "react";
import Aux from "../hoc/Auxiliary";
import Clock from "../components/Clock/Clock";
import ClockControl from "../components/Clock/ClockControl/ClockControl";
import axios from "../axios-instance";
import Modal from "../components/UI/Model/Modal";
import Page404 from "../components/UI/Page404Error/Page404";

const WorldClockFn = () => {
  const [countriesList, setCountriesList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentSelectedCountryTimeZone, setCurrentSelectedCountryTimeZone] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      await axios.get("/timezone").then(({ data }) => {
        setCountriesList(data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      await axios.get("/ip").then(({ data }) => {
        setSelectedCountry(data.timezone);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async (currentCountry) => {
      // You can await here
      await axios.get("/timezone/" + currentCountry).then(({ data }) => {
        const formattedDate = data.datetime.slice(11, 19);

        const formattedDateArray = formattedDate.split(":");

        const hour = +formattedDateArray[0] % 12;
        const minutes = +formattedDateArray[1];
        const seconds = +formattedDateArray[2];

        const ampm = hour <= 12 ? "PM" : "AM";

        setCurrentSelectedCountryTimeZone({ hour, minutes, seconds, ampm });
      });
    };

    let timer;
    if (selectedCountry) {
      timer = setInterval(() => {
        fetchData(selectedCountry);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [selectedCountry]);

  const selectedCountryHandler = (val) => {
    setSelectedCountry(val);
  };

  return (
    <Aux>
      <Aux>
        <Modal
        //show={this.state.showModal}
        //close={() => this.setState({ showModal: false })}
        >
          Error
          {/* {this.state.error} */}
        </Modal>

        <Aux>
          {currentSelectedCountryTimeZone && (
            <Clock
              currentSelectedCountryTimeZone={currentSelectedCountryTimeZone}
              selectedCountry={selectedCountry}
            />
          )}
          {selectedCountry && (
            <ClockControl
              selectedCountry={selectedCountry}
              countries={countriesList}
              selectedCountryHandler={selectedCountryHandler}
              //error={this.state.error}
            />
          )}
        </Aux>
      </Aux>
    </Aux>
  );
};

export default WorldClockFn;

// class WorldClock extends Component {
//   state = {
//     time: {
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       ampm: 0,
//     },
//     countries: null,
//     error: null,
//     countryTime: null,
//     selectedCountryName: null,
//     localTimezone: null,
//     showModal: false,
//   };

//   componentDidMount() {
//     axios
//       .get("/timezone")
//       .then((response) => {
//         // console.log(response);
//         this.setState({ countries: response.data });
//       })
//       .catch((error) => {
//         this.setState({ error: error.message, showModal: true });
//       });

//     axios
//       .get("/ip")
//       .then((response) => {
//         // console.log(response.data.timezone);
//         this.setState({
//           localTimezone: response.data.timezone,
//           selectedCountryName: "Your",
//         });
//       })
//       .catch((error) => {
//         this.setState({ error: error.message, showModal: true });
//       });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.localTimezone) {
//       if (prevState.localTimezone !== this.state.localTimezone) {
//         setInterval(() => {
//           axios
//             .get("/timezone/" + this.state.localTimezone)
//             .then((response) => {
//               const time = response.data.datetime;
//               this.setState({ countryTime: time.substr(0, 19) });
//             })
//             .catch((error) => {
//               this.setState({ error: error.message, showModal: true });
//             });
//         }, 1000);
//       }
//     }

//     if (this.state.countryTime) {
//       if (prevState.countryTime !== this.state.countryTime) {
//         const date = new Date(this.state.countryTime);
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let ampm = hours >= 12 ? "PM" : "AM";
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         this.setState({ time: { hours, minutes, seconds, ampm } });
//       }
//     }
//   }

// selectedCountryHandler = (country) => {
// // console.log(country);
// axios
//   .get("/timezone/" + country)
//   .then((response) => {
// console.log(response.data.datetime);
// const time = response.data.datetime;
//         let countryName = country;
//         countryName = countryName.substring(countryName.indexOf("/") + 1);

//         this.setState({
//           countryTime: time.substr(0, 19),
//           selectedCountryName: countryName,
//         });
//       })
//       .catch((error) => {
//         this.setState({ error: error.message, showModal: true });
//       });
//   };

//   render() {
//     return (
//       <Aux>
//         <Aux>
//           <Modal show={this.state.showModal} close={() => this.setState({ showModal: false })}>
//             {this.state.error}
//           </Modal>

//           {!this.state.error ? (
//             <Aux>
//               <Clock
//                 selectedCountryName={this.state.selectedCountryName}
//               />
//               <ClockControl
//                 countries={this.state.countries}
//                 selectedCountry={this.selectedCountryHandler}

//                 error={this.state.error}
//               />{" "}
//             </Aux>
//           ) : (
//             <Page404 />
//           )}
//         </Aux>
//       </Aux>
//     );
//   }
// }

// export default WorldClock;
