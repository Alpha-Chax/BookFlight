import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ChevronLeftIcon from "react-native-heroicons/outline/ChevronLeftIcon";
import CalendarDaysIcon from "react-native-heroicons/outline/CalendarDaysIcon";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import FlightCardExtra from "./Components/FlightCardExtra";
import FlightCard from "./Components/FlightCard";
import ArrowLongUpIcon from "react-native-heroicons/solid/ArrowLongUpIcon";
import ArrowLongDownIcon from "react-native-heroicons/solid/ArrowLongDownIcon";
import AdjustmentsVerticalIcon from "react-native-heroicons/solid/AdjustmentsVerticalIcon";

export default function App() {
  const handlePress = () => {
    console.log("Back Button Pressed!");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#cfecf7" }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={handlePress}>
            <View style={{ marginTop: 13, paddingLeft: 10 }}>
              <ChevronLeftIcon name="chevron-left" size={35} color="#0f4d92" />
            </View>
          </TouchableOpacity>
          <View style={styles.headSection}>
            <Text style={styles.text}>Kuwait Intl</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <Path d="M0 0h24v24H0z" fill="none" />
              <Path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                fill="#00aeef"
                transform="rotate(180 12 12)"
              />
            </Svg>
            <Text style={styles.text}>
              King Abdilaziz International Airport
            </Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Edit Details Section */}
        <View style={styles.editDetails}>
          <View style={styles.editDetails2}>
            {/* User Svg */}
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00308F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <Path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                fill="none"
                strokeWidth="1"
              />
              <Circle cx="12" cy="7" r="4" fill="none" strokeWidth="1" />
            </Svg>
            <Text style={styles.textMedium}>1</Text>

            {/* Airplane Seat Svg*/}
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 64 64"
              id="flight-seat"
              height="26"
              width="30"
            >
              <Path
                fill="none"
                stroke="#00308F"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="20"
                d="M25.775 40q.116.5.225 1a46.53 46.53 0 0 1 14.62-.06A7.642 7.642 0 0 1 47 47H21.46a3.167 3.167 0 0 1-3.07-2.38L11 16a8.583 8.583 0 0 1 7.6 4.64 81.411 81.411 0 0 1 5.35 12.75M12 10c-1.882 2.933-1.208 4.326-1 6M11.872 3.735l.872-.312a3.421 3.421 0 0 1 4.373 2.068l1.065 2.973a3.421 3.421 0 0 1-2.068 4.374l-.872.312a1.653 1.653 0 0 1-2.114-1L10.873 5.85a1.653 1.653 0 0 1 1-2.114Z"
              ></Path>
              <Path
                fill="none"
                stroke="#00308F"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="20"
                d="M42.002 38a2.014 2.014 0 0 1-.36-.032 59.276 59.276 0 0 0-21.284 0 2 2 0 1 1-.716-3.936 63.283 63.283 0 0 1 22.716 0A2 2 0 0 1 42.002 38ZM37 59h-4l-6-12h4l6 12zM17 59h31"
              ></Path>
            </Svg>
            <Text style={styles.textSmall}>Economy</Text>

            {/* Calendar Icon */}
            <CalendarDaysIcon
              style={{ marginLeft: 7, marginRight: 2 }}
              name="calendar-days"
              size={22}
              color="#00308F"
            />
            <Text style={styles.textXSmall}>20 Nov 2023</Text>
          </View>
          {/* Edit Deatils Button */}
          <TouchableOpacity>
            <View style={{ paddingRight: 16, paddingTop: 4 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00308F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-edit"
              >
                <Path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></Path>
                <Path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></Path>
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
        {/* Flight Cards */}
        <ScrollView style={{ marginBottom: 15 }}>
          <FlightCardExtra
            fromTime="18:30"
            toTime="23:55"
            flightDuration="5h 25m"
            stops="1 Stop"
            luggagePerson="0 piece"
            flightId="SV-511(T)"
            points="78.9"
            airlineName="Saudi Arabian Airlines"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS87k7HhS-sqOqkfTrgTzu5ppKhcXjlhR_kQ&usqp=CAU"
          />
          <FlightCard
            fromTime="21:15"
            toTime="23:55"
            flightDuration="17h 45m"
            stops="1 Stop"
            luggagePerson="30KG"
            flightId="NP-162(0)"
            points="83.3"
            ticketPrice="42KWD"
            airlineName="Nile Air"
            image="https://airhex.com/images/airline-logos/nile-air.png"
          />
          <FlightCard
            fromTime="23:40"
            toTime="02:05"
            flightDuration="2h 25m"
            stops="Non-Stop"
            luggagePerson="20KG"
            flightId="SV-511(T)"
            points="68.7"
            ticketPrice="38KWD"
            airlineName="Kuwait Airways"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8cKlsAAEsAAEwXJlkaKFoABk0UJFgAAEkTI1cADk8AA0wNIFYKHlUAF1IAE1AAC04AGlObn7DR09vk5erv8PNvdY/KzNXc3uQqNmNOVnlgZ4UAE1Glqbh3fZUAAECOkqXq6+9ZYIDCxc+vsr85Q2tIUXUwO2aDiJ51epO4usUAADtBSnCkp7aLj6MkMmIAADlZaNnVAAADmElEQVR4nO3aCXbaMBAGYJAlY9mS933DAQMOhaT3P11JXpsm2KRNArWr938H4M14NBpZZjYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALi5u7EDuL26GjuCmwvy9dgh3Fx1CMYO4ebqPBw7hFtLszgaO4Zbq5b1V3JM11XT3RdFEdeNv0/CKT6vqPjWfSqutK0z0zJtTwrOuZCe7ZiayVYPbXrtGL8qocv6g/0YtoVNHEHZ/AxjXDq6duj205q4zdJYJbMoTdO/WWapv9Ec0UvuNSpLLeumNI7C3HAJsXRdM0RxfK+gob8jHn0vu5dySpOs2uk05r6UPwPjNtlcOvC0+aX0GF0IIU+E4JSxnxXmjpa3/zSP99TkJXbqaF1/u1jHxOFDyQnbJWKXF3VX111c5IcdLYlu2pKzpySNOBkhnSHBrvwdtiSnPnpZrneJvzLNgd5j3CFZ3Qa9xRid5shDkRm6I7nQH/2JrNajK173UWm5822ebx9dy/SGqkdtfdW+v2mm+4fcs0rduJ/GDIkK8qbNGKWLBWXD++ZC31V/V5q0jRfGMp/GYk0yZzCdfv2sw4ciTqv8224a88PXxJ/zY+XuExXZFx97KrdyvlQHcOJ/8sf303hje7OrDnAO0zqTfUblyssJymbs8K6iJkPz4Zn5/1fwWZpfakc6n8j8/rJ1Vg5PQk5VSXFW2d5gjgsxjRPKNTTa4JbDyH7syK4mujcGTwCkGzuy6wmLwW3V3il0FRmsyGJgSzWasQO7omA7VEf7cRpH6esI8oEcmZars6leqCMnsULt+NSP/X1VGGrlWBj9+ShIrNJaDTvT7p1zBFlN473vSvzS6Z3JOdmoc8o5qTK915DUFI0ir1XPkoL0DuXMM1YqDcg7X7q9O2JuyoHb8v/XutDt845kkmS+QuMjOm76q5V6ZKNSkmkzt+R5kguPZI1CAyToaP+rG/Usfr9X5rpjFjSZZvOzUjJR6gdfnVKG1cp1z0vJqKebRaXO/po0G9L/EsdtSxZHZWoZJU1ua458eyvAuK2TvFkr05dp220JMW25YK+z9Ewtiytlijm7Wx/r7Vy3TMeT4leqT1/9jcf4mChTzVmUJq1fF3lWGoRolq67rqsby+V3sqmn8z+NK4miMEzT5OT5z0nqVBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApu0HzAg3/uCr6ksAAAAASUVORK5CYII="
          />
          <FlightCard
            fromTime="21:15"
            toTime="23:55"
            flightDuration="17h 45m"
            stops="1 Stop"
            luggagePerson="30KG"
            flightId="NP-162(0)"
            points="83.3"
            ticketPrice="42KWD"
            airlineName="Nile Air"
            image="https://airhex.com/images/airline-logos/nile-air.png"
          />
          <FlightCard
            fromTime="23:40"
            toTime="02:05"
            flightDuration="2h 25m"
            stops="Non-Stop"
            luggagePerson="20KG"
            flightId="SV-511(T)"
            points="68.7"
            ticketPrice="38KWD"
            airlineName="Kuwait Airways"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8cKlsAAEsAAEwXJlkaKFoABk0UJFgAAEkTI1cADk8AA0wNIFYKHlUAF1IAE1AAC04AGlObn7DR09vk5erv8PNvdY/KzNXc3uQqNmNOVnlgZ4UAE1Glqbh3fZUAAECOkqXq6+9ZYIDCxc+vsr85Q2tIUXUwO2aDiJ51epO4usUAADtBSnCkp7aLj6MkMmIAADlZaNnVAAADmElEQVR4nO3aCXbaMBAGYJAlY9mS933DAQMOhaT3P11JXpsm2KRNArWr938H4M14NBpZZjYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALi5u7EDuL26GjuCmwvy9dgh3Fx1CMYO4ebqPBw7hFtLszgaO4Zbq5b1V3JM11XT3RdFEdeNv0/CKT6vqPjWfSqutK0z0zJtTwrOuZCe7ZiayVYPbXrtGL8qocv6g/0YtoVNHEHZ/AxjXDq6duj205q4zdJYJbMoTdO/WWapv9Ec0UvuNSpLLeumNI7C3HAJsXRdM0RxfK+gob8jHn0vu5dySpOs2uk05r6UPwPjNtlcOvC0+aX0GF0IIU+E4JSxnxXmjpa3/zSP99TkJXbqaF1/u1jHxOFDyQnbJWKXF3VX111c5IcdLYlu2pKzpySNOBkhnSHBrvwdtiSnPnpZrneJvzLNgd5j3CFZ3Qa9xRid5shDkRm6I7nQH/2JrNajK173UWm5822ebx9dy/SGqkdtfdW+v2mm+4fcs0rduJ/GDIkK8qbNGKWLBWXD++ZC31V/V5q0jRfGMp/GYk0yZzCdfv2sw4ciTqv8224a88PXxJ/zY+XuExXZFx97KrdyvlQHcOJ/8sf303hje7OrDnAO0zqTfUblyssJymbs8K6iJkPz4Zn5/1fwWZpfakc6n8j8/rJ1Vg5PQk5VSXFW2d5gjgsxjRPKNTTa4JbDyH7syK4mujcGTwCkGzuy6wmLwW3V3il0FRmsyGJgSzWasQO7omA7VEf7cRpH6esI8oEcmZars6leqCMnsULt+NSP/X1VGGrlWBj9+ShIrNJaDTvT7p1zBFlN473vSvzS6Z3JOdmoc8o5qTK915DUFI0ir1XPkoL0DuXMM1YqDcg7X7q9O2JuyoHb8v/XutDt845kkmS+QuMjOm76q5V6ZKNSkmkzt+R5kguPZI1CAyToaP+rG/Usfr9X5rpjFjSZZvOzUjJR6gdfnVKG1cp1z0vJqKebRaXO/po0G9L/EsdtSxZHZWoZJU1ua458eyvAuK2TvFkr05dp220JMW25YK+z9Ewtiytlijm7Wx/r7Vy3TMeT4leqT1/9jcf4mChTzVmUJq1fF3lWGoRolq67rqsby+V3sqmn8z+NK4miMEzT5OT5z0nqVBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApu0HzAg3/uCr6ksAAAAASUVORK5CYII="
          />
        </ScrollView>
        {/* Floating Buttons */}
        <View style={styles.floatingButtons}>
          {/* Sort By Button */}
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => {
              console.log("Sort By button pressed");
            }}
          >
            <ArrowLongUpIcon color="#0f4d92" size={18} />
            <ArrowLongDownIcon
              style={{ marginLeft: -7 }}
              color="#0f4d92"
              size={18}
            />
            <Text style={styles.floatingButtonText}>Sort By</Text>
          </TouchableOpacity>

          {/* Filter Button */}
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => {
              console.log("Filter button pressed");
            }}
          >
            <AdjustmentsVerticalIcon
              color="#0f4d92"
              style={{ paddingHorizontal: 15 }}
              size={21}
            />
            <Text style={styles.floatingButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    marginRight: 25,
  },

  headSection: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    color: "#0f4d92",
    fontWeight: "800",
    fontSize: 16,
  },

  textMedium: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 16,
    paddingTop: 3,
    paddingLeft: 2,
    paddingRight: 2,
  },

  textSmall: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 14,
    paddingTop: 3,
  },

  textXSmall: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 12,
    paddingTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#0f4d92",
    marginTop: 10,
  },

  editDetails: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
  },

  editDetails2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    paddingLeft: 35,
  },

  floatingButtons: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  floatingButton: {
    backgroundColor: "#FAF9F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  floatingButtonText: {
    color: "#0f4d92",
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 5,
  },
});
