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
import { TextInput, Alert } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";
import { BlurView } from "@react-native-community/blur";
interface ReminderScreenProps
{
  navigation:any;
}

const Reminder = (props:ReminderScreenProps) => {

  const backto=()=>props.navigation.navigate("MainMenu")
  const set7=()=>Alert.alert("Set Successfully!")
  const del7=()=>Alert.alert("Deleted Successfully!")
  const loggedout2=()=>props.navigation.navigate("LogIn")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/reminder.jpg")}
      >

        
        <View style={styles.Roomdetails}>
          <Text style={styles.hello}>Reminders</Text>

          <View style={styles.Beds}>
            <Text style={styles.bedtext}> Reminder Name:</Text>

            <TextInput
              style={styles.bedInput}
              placeholder="   Enter reminder name"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.washroom}>
            <Text style={styles.washroomtext}>Description:</Text>

            <TextInput
              style={styles.washroomInput}
              placeholder="   Enter Description"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.Person}>
            <Text style={styles.persontext}> No# of Reminders:</Text>

            <TextInput
              style={styles.personInput}
              placeholder="1-10"
              placeholderTextColor="#808080"
            />
          </View>
        </View>

        <View style={styles.arrive}>
          <Text style={styles.arrival}>Set Date and Time</Text>

          <Text style={styles.arrivetext}> Date:</Text>

          <TextInput
            style={styles.arriveInput}
            placeholder="   DD/MM/YY"
            placeholderTextColor="#808080"
          />

          <Text style={styles.datetext}> Time:</Text>

          <TextInput
            style={styles.dateInput}
            placeholder="   Time of reminder"
            placeholderTextColor="#808080"
          />
        </View>
        <TouchableOpacity style={styles.availbtn} onPress={set7}>
          <Text style={styles.availbtntxt}>Set Now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookbtn} onPress={del7}>
          <Text style={styles.bookbtntxt}>Delete Reminder</Text>
        </TouchableOpacity>
        <View style={styles.back}>
          <TouchableOpacity  onPress={backto}>
            <Image
              source={require("./assets/back-button.png")}
              style={styles.backpng}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  Roomdetails: {
    top: 190,
  },
  ppk:

{},
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
    width: 180,
    bottom: 13,
    left: 180,
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
    width: 180,
    bottom: 13,
    left: 180,
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
    width: 180,
    bottom: 13,
    left: 180,
    borderRadius: 0,
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
    left: 50,
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
    height: 40,
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
    bottom: -30,
    left: 0,
  },
  bookbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 13,
  },
  menubar: {
    flex: 0,
    width: 50,
    height: 50,
    right: 165,
    bottom: 115,
    borderWidth: 0,
  },
  menupng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },

  logout: {
    flex: 0,
    width: 50,
    height: 50,
    left: 175,
    bottom: 167,
    borderWidth: 0,
  },
  logoutpng: {
    resizeMode: "center",
    right: 0,
    width: 40,
    height: 40,
    top: 4,
  },
  back: {
    flex: 0,
    width: 50,
    height: 50,
    left: -168,
    bottom: -150,
    borderWidth: 0,
  },
  backpng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },
});
