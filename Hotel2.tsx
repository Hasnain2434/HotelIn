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
import { AlignJustify, Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";

interface Hotel2ScreenProps
{
  navigation:any;
}
const Hotel2 = (props:Hotel2ScreenProps) => {
  const book22=()=>props.navigation.navigate("RoomBook")
  const back22=()=>props.navigation.navigate("Hotels")
  return (
    <View style={styles.container}>
      <View style={styles.HotelPictureview}>
        <Image
          source={require("./assets/hhhh2.jpg")}
          style={styles.HotelPicture}
        />
      </View>
      <Text style={styles.hotelname}>Pearl Continental Bhurban</Text>
      <Text style={styles.hotelname1}>
        Location: Murree, Rawalpindi, Khyber Pakhtunkhwa
      </Text>
      <View style={styles.hotelname2view}>
        <Text style={styles.hotelname2}>
          "The P-C Hotel is a modern, elegant 4-star hotel, perfect for a
          romantic, charming vacation in the enchanting setting of green
          Mountains."
        </Text>
        <Image
          source={require("./assets/rating.png")}
          style={styles.H3rating}
        />
        <Text style={styles.H3ratingtxt}>(8.8 rating)</Text>
        <Text style={styles.H4ratingtxt}>($300 per night)</Text>
      </View>
      <TouchableOpacity style={styles.bookbtn} onPress={book22}>
        <Text style={styles.bookbtntxt}>Book Now!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelbtn} onPress={back22}>
        <Text style={styles.cancelbtntxt}>Back</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Hotel2;

const styles = StyleSheet.create({
  bookbtn: {
    backgroundColor: "#808080",
    borderWidth: 3,
    width: 100,
    height: 40,
    bottom: -31,
    left: 300,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
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
    bottom: 10,
    right: -15,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  cancelbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  H3rating: {
    width: 100,
    height: 60,
    bottom: 10,
    left: 20,
  },
  H3ratingtxt: {
    bottom: 20,
    left: 20,
    fontWeight: "bold",
  },
  H4ratingtxt: {
    bottom: 10,
    left: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    flex: 0,
    height: 1000,
  },
  HotelPictureview: {
    borderRadius: 2,
    width: 430,
    height: 430,
    top: 0,
  },
  HotelPicture: {
    borderWidth: 0,
    resizeMode: "stretch",
    left: -5,
    width: 430,
    height: 500,
    top: -130,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  hotelname: {
    fontSize: 30,
    fontWeight: "bold",
    top: -30,
    left: 10,
  },
  hotelname1: {
    fontSize: 15,
    fontWeight: "bold",
    top: -10,
    left: 14,
  },
  hotelname2view: {
    top: 0,
    left: 0,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignSelf: "center",
    width: 400,
    borderWidth: 0,
  },
  hotelname2: {
    fontSize: 14,
    top: 0,
    left: 0,
    textAlign: "center",
    alignSelf: "center",
    padding: 10,
  },
});
