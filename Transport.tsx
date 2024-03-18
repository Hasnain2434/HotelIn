import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  Settings,
  ImageBackground,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native";
import {
  backgroundColor,
  borderColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";

interface TransportScreenProps
{
  navigation:any;
}

const Transport = (props:TransportScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const back6=()=>props.navigation.navigate("Order")
  const book6=()=>Alert.alert("Seat Booked Successfully!")
  const tic=()=>Alert.alert("Tickets Available!")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/traveling.jpg")}
      >
        <View style={styles.transporttype}>
          <Text style={styles.transporttypetxt}>Travel Via</Text>

          <View style={styles.bybus}>
            <CheckBox
              title="Bus"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={checked}
              onPress={() => setchecked(!checked)}
            />
            <Image style={styles.bus} source={require("./assets/bus.png")} />
          </View>
          <View style={styles.byplane}>
            <CheckBox
              title="Airplane"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={checked2}
              onPress={() => setchecked2(!checked2)}
            />
            <Image
              style={styles.plane}
              source={require("./assets/plane.png")}
            />
          </View>
          <View style={styles.bytaxi}>
            <CheckBox
              title="Taxi"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={checked3}
              onPress={() => setchecked3(!checked3)}
            />
            <Image style={styles.car} source={require("./assets/car.png")} />
          </View>
        </View>

        <View style={styles.departure}>
          <Text style={styles.departuretxt}>Departure</Text>

          <Text style={styles.datetxt}> Date:</Text>

          <TextInput
            style={styles.date}
            placeholder="   DD/MM/YY"
            placeholderTextColor="#808080"
          />

          <Text style={styles.timetxt}> Time:</Text>

          <TextInput
            style={styles.time}
            placeholder="   Time of Departure"
            placeholderTextColor="#808080"
          />
        </View>
        <TouchableOpacity style={styles.availbtn} onPress={tic}>
          <Text style={styles.availbtntxt}>Check Availibilty of Tickets!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookbtn} onPress={book6}>
          <Text style={styles.bookbtntxt}>Book Now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelbtn} onPress={back6}>
          <Text style={styles.cancelbtntxt}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default Transport;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bgimage: {
    resizeMode: "center",
    width: 450,
    height: 930,
    top: -1,
    justifyContent: "center",
    alignItems: "center",
  },

  transporttypetxt: {
    bottom: 0,
    fontSize: 30,
    left: 30,
    fontWeight: "bold",
  },

  transporttype: {
    borderWidth: 0,
    width: 200,
    bottom: -80,
    height: 220,
  },
  bybus: {
    width: 180,
    left: -80,
    top: 20,
  },
  byplane: {
    width: 180,
    left: -80,
    top: -5,
  },
  bytaxi: {
    width: 180,
    left: -80,
    top: -17,
  },

  departure: {
    bottom: 350,
    left: 0,
    borderWidth: 0,
    width: 350,
    height: 170,
  },
  departuretxt: {
    fontSize: 30,
    left: 108,
    fontWeight: "bold",
  },
  datetxt: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  date: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  timetxt: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  time: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  availbtn: {
    backgroundColor: "#aaaaaa",
    width: 100,
    height: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  availbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 11,
  },
  bookbtn: {
    backgroundColor: "#aaaaaa",
    width: 100,
    height: 40,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: -170,
    left: 150,
  },
  bookbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  cancelbtn: {
    backgroundColor: "#aaaaaa",
    borderWidth: 3,
    width: 100,
    height: 40,
    bottom: -130,
    right: 140,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  cancelbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  bus: {
    width: 30,
    height: 30,
    left: 120,
    bottom: 43,
  },
  plane: {
    width: 20,
    height: 20,
    left: 127,
    bottom: 38,
  },
  car: {
    width: 30,
    height: 30,
    left: 124,
    bottom: 40,
  },
});
