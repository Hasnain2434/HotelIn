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
} from "react-native";
import { TouchableOpacity } from "react-native";
import {
  backgroundColor,
  borderColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TextInput,Alert } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";

interface RoomBookScreenProps
{
  navigation:any;
}
const RoomBook = (props:RoomBookScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const checkav=()=>Alert.alert("Rooms Available!")
  const cancelback=()=>props.navigation.navigate("Hotels")
  const ok=()=>Alert.alert("Booked Successfully.")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/albert-vincent-wu-AkqnZZR1oL4-unsplash.jpg")}
      >
        <View style={styles.Roomdetails}>
          <Text style={styles.hello}>Room Details</Text>

          <View style={styles.Beds}>
            <Text style={styles.bedtext}> Beds:</Text>

            <TextInput
              style={styles.bedInput}
              placeholder="   Enter number of beds"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.washroom}>
            <Text style={styles.washroomtext}> Washrooms:</Text>

            <TextInput
              style={styles.washroomInput}
              placeholder="   Enter number of washrooms"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.Person}>
            <Text style={styles.persontext}> Persons:</Text>

            <TextInput
              style={styles.personInput}
              placeholder="   Enter number of Persons"
              placeholderTextColor="#808080"
            />
          </View>
        </View>

        <View style={styles.meal}>
          <Text style={styles.hello2}>Meals</Text>

          <CheckBox
            style={styles.check1}
            title="BreakFast"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
            onPress={() => setchecked(!checked)}
          />
          <CheckBox
            style={styles.check2}
            title="Lunch"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked2}
            onPress={() => setchecked2(!checked2)}
          />
          <CheckBox
            style={styles.check3}
            title="Dinner"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked3}
            onPress={() => setchecked3(!checked3)}
          />
        </View>

        <View style={styles.arrive}>
          <Text style={styles.arrival}>Arrival</Text>

          <Text style={styles.arrivetext}> Date:</Text>

          <TextInput
            style={styles.arriveInput}
            placeholder="   DD/MM/YY"
            placeholderTextColor="#808080"
          />

          <Text style={styles.datetext}> Time:</Text>

          <TextInput
            style={styles.dateInput}
            placeholder="   Time of Arrival"
            placeholderTextColor="#808080"
          />
        </View>
        <TouchableOpacity style={styles.availbtn} onPress={checkav}>
          <Text style={styles.availbtntxt}>Check Availibilty!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookbtn}  onPress={ok}>
          <Text style={styles.bookbtntxt}>Book Now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelbtn}  onPress={cancelback}>
          <Text style={styles.cancelbtntxt}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default RoomBook;

const styles = StyleSheet.create({
  Roomdetails: {
    top: 280,
  },
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
  hello: {
    bottom: 310,
    fontSize: 30,
    left: 91,
    fontWeight: "bold",
  },
  hello2: {
    bottom: 0,
    fontSize: 30,
    left: 155,
    fontWeight: "bold",
  },
  Beds: {
    bottom: 300,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  bedtext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  bedInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  washroom: {
    bottom: 290,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  washroomtext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  washroomInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },

  Person: {
    bottom: 280,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  persontext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  personInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  meal: {
    borderWidth: 0,
    width: 400,
    bottom: 10,
    height: 220,
  },
  check1: {
    width: 100,
    left: 100,
  },
  check2: {
    width: 100,
    left: 100,
  },
  check3: {
    width: 100,
    left: 100,
  },

  arrive: {
    bottom: 10,
    left: 0,
    borderWidth: 0,
    width: 350,
    height: 170,
  },
  arrival: {
    fontSize: 30,
    left: 130,
    fontWeight: "bold",
  },
  arrivetext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  arriveInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  datetext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  dateInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 0,
  },
  availbtn: {
    backgroundColor: "#808080",
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
    fontSize: 15,
  },
  bookbtn: {
    backgroundColor: "#808080",
    width: 100,
    height: 40,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: -100,
    left: 150,
  },
  bookbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  cancelbtn: {
    backgroundColor: "#808080",
    borderWidth: 3,
    width: 100,
    height: 40,
    bottom: -60,
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
});
