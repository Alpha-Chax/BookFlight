import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const FlightCard = (props) => {
  const textColor = props.stops === "Non-Stop" ? "green" : "#d9413d";
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.cardBody}>
        {/* Card Top */}
        <View style={styles.SubcardBody}>
          <Text style={styles.timeText}>{props.fromTime}</Text>
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text style={styles.airlineText}>{props.airlineName}</Text>
          </View>
          <Text style={styles.timeText}>{props.toTime}</Text>
        </View>
        {/* Card Flight Route */}

        <View style={styles.lineContainer}>
          <Text style={styles.locationText}>KWI</Text>
          <View style={styles.dottedLine}></View>
          <View style={styles.airplaneContainer}>
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
                transform="rotate(90 12 12)"
              />
            </Svg>
          </View>
          <View style={styles.dottedLine}></View>
          <Text style={styles.flightDuration}>{props.flightDuration}</Text>
          <View style={styles.dottedLine2}></View>
          <Text
            style={{
              color: textColor,
              marginTop: 6,
              fontWeight: "700",
              paddingHorizontal: 1,
              fontSize:13
            }}
          >
            {props.stops}
          </Text>
          <View style={styles.dottedLine2}></View>
          <Text style={styles.locationText}>JED</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#0f4d92", fontSize: 11.5, fontWeight: "500" }}>
            Kuwait Intl
          </Text>
          <Text style={{ color: "#0f4d92", fontSize: 11.5, fontWeight: "500" }}>
            King Abdulaziz International Airport
          </Text>
        </View>

        {/* Divider */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.semiCircleLeft}></View>
          <View style={styles.dottedDivider}></View>
          <View style={styles.semiCircleRight}></View>
        </View>

        {/* Card End */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cardBottomDetails}>
            {/* Airplane Seat Svg*/}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="20"
                  d="M25.775 40q.116.5.225 1a46.53 46.53 0 0 1 14.62-.06A7.642 7.642 0 0 1 47 47H21.46a3.167 3.167 0 0 1-3.07-2.38L11 16a8.583 8.583 0 0 1 7.6 4.64 81.411 81.411 0 0 1 5.35 12.75M12 10c-1.882 2.933-1.208 4.326-1 6M11.872 3.735l.872-.312a3.421 3.421 0 0 1 4.373 2.068l1.065 2.973a3.421 3.421 0 0 1-2.068 4.374l-.872.312a1.653 1.653 0 0 1-2.114-1L10.873 5.85a1.653 1.653 0 0 1 1-2.114Z"
                ></Path>
                <Path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="20"
                  d="M42.002 38a2.014 2.014 0 0 1-.36-.032 59.276 59.276 0 0 0-21.284 0 2 2 0 1 1-.716-3.936 63.283 63.283 0 0 1 22.716 0A2 2 0 0 1 42.002 38ZM37 59h-4l-6-12h4l6 12zM17 59h31"
                ></Path>
              </Svg>
              <Text style={{ alignSelf: "center", fontSize:13 }}>
                9
              </Text>
            </View>
            {/* Suitcase Icon */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 64 80"
                height="26"
                width="30"
                fill="#000"
              >
                <Path d="M44.643,17.105h-6.111V8.184c1.106-.016,2.001-.917,2.001-2.027v-2.127c0-1.119-.91-2.03-2.029-2.03h-13.006c-1.119,0-2.029,.911-2.029,2.03v2.127c0,1.109,.895,2.011,2.001,2.027v8.921h-6.111c-2.543,0-4.612,2.069-4.612,4.612v30.703c0,2.112,1.435,3.878,3.376,4.423v2.494c0,1.468,1.194,2.663,2.663,2.663h.451c1.468,0,2.662-1.194,2.662-2.663v-2.304h16.205v2.304c0,1.468,1.194,2.663,2.662,2.663h.451c1.469,0,2.663-1.194,2.663-2.663v-2.494c1.941-.544,3.376-2.31,3.376-4.423V21.718c0-2.543-2.069-4.612-4.612-4.612ZM25.497,4l13.035,.03-.029,2.157-13.035-.03,.029-2.157Zm1.972,4.187h9.062v8.918h-9.062V8.187Zm-5.571,51.15c0,.365-.297,.663-.662,.663h-.451c-.365,0-.663-.297-.663-.663v-2.304h1.776v2.304Zm21.981,0c0,.365-.298,.663-.663,.663h-.451c-.365,0-.662-.297-.662-.663v-2.304h1.776v2.304Zm3.376-6.917c0,1.44-1.172,2.612-2.612,2.612H19.357c-1.44,0-2.612-1.172-2.612-2.612V21.718c0-1.44,1.172-2.612,2.612-2.612h25.285c1.44,0,2.612,1.172,2.612,2.612v30.703Z" />
                <Path d="M22.631,24.889c-.553,0-1,.448-1,1v22c0,.552,.447,1,1,1s1-.448,1-1V25.889c0-.552-.447-1-1-1Z" />
                <Path d="M28.877,24.889c-.553,0-1,.448-1,1v22c0,.552,.447,1,1,1s1-.448,1-1V25.889c0-.552-.447-1-1-1Z" />
                <Path d="M35.123,24.889c-.553,0-1,.448-1,1v22c0,.552,.447,1,1,1s1-.448,1-1V25.889c0-.552-.447-1-1-1Z" />
                <Path d="M41.369,24.889c-.553,0-1,.448-1,1v22c0,.552,.447,1,1,1s1-.448,1-1V25.889c0-.552-.447-1-1-1Z" />
              </Svg>
              <Text style={{ marginHorizontal: 1, fontSize: 12 }}>
                {props.luggagePerson}/person
              </Text>
            </View>
            {/* Aiplane Front Icon */}
            <View style={{marginHorizontal:4, marginTop:5, flexDirection: "row",
                alignItems: "center",}}>
              <Image
                source={require("../assets/aiplane-front.png")}
                style={{ width: 30, height: 26 }}
              />
              <Text style={{ marginHorizontal: 5, fontSize: 12 }}>{props.flightId}</Text>
            </View>
          </View>
          {/* card amount section */}
          <View style={{flexDirection:"column"}}> 
              <Text style={{alignSelf:"flex-end",fontSize:18, marginTop:5, fontWeight:"700", color:'#0f4d92'}}>{props.ticketPrice}</Text>
              <View style={{flexDirection:"row", paddingTop:6}}>
              <Image
                source={require("../assets/coin.png")}
                style={{ width: 20, height: 20, marginRight:5 }}
              />
                <Text style={{color:'#00aeef'}}>Get </Text>
                <Text style={{fontWeight:"900", color:'#00aeef'}}>{props.points}</Text>
                <Text style={{color:'#00aeef'}}> Points</Text>
              </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubcardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardBody: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
    padding: 10,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom:10,
    height: 210,
    elevation: 1.5
  },

  timeText: {
    paddingTop: 28,
    paddingHorizontal: 7,
    fontSize: 20,
    fontWeight: "700",
    color: "#0f4d92",
  },

  locationText: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#0f4d92",
  },

  airlineText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0f4d92",
  },

  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    width: 35,
    height: 35,
  },

  lineContainer: {
    flexDirection: "row",
  },

  dottedLine: {
    flexDirection: "row",
    width: "11%",
    height: "60%",
    borderColor: "#87CEEB",
    borderBottomWidth: 1.2,
    borderStyle: "dashed",
    marginLeft: 4,
  },

  dottedLine2: {
    width: "8%",
    height: "60%",
    borderColor: "#87CEEB",
    borderBottomWidth: 1.2,
    borderStyle: "dashed",
  },

  dottedDivider: {
    marginTop: 15,
    height: 2,
    width: "100%",
    borderStyle: "dashed",
    borderBottomWidth: 1.4,
    borderColor: "#D3D3D3",
  },

  airplaneContainer: {
    marginTop: 5,
    marginLeft: -5,
  },

  airplaneImage: {
    width: 30,
    height: 30,
  },

  flightDuration: {
    alignSelf: "center",
    color: "#808080",
    fontWeight: "600",
    paddingHorizontal: 5,
  },

  semiCircleLeft: {
    width: 20,
    marginTop: 10,
    marginLeft: -17,
    height: 15,
    backgroundColor: "#cfecf7",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: "90deg" }],
  },

  semiCircleRight: {
    width: 20,
    marginTop: 10,
    marginLeft: -6,
    height: 15,
    backgroundColor: "#cfecf7",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: "-90deg" }],
  },

  cardBottomDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:4
  },
});

export default FlightCard;
