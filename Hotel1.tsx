import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";

interface Hotel1ScreenProps
{
  navigation:any;
}
const Hotel1 = (props:Hotel1ScreenProps) => {
  const book11=()=>props.navigation.navigate("RoomBook")
  const back11=()=>props.navigation.navigate("Hotels")
  return (
    <View style={styles.container}>
      <View style={styles.HotelPictureview}>
        <Image
          source={require("./assets/hhhh1.jpg")}
          style={styles.HotelPicture}
        />
      </View>
      <Text style={styles.hotelname}>Serena Hotel FaisalAbad</Text>
      <Text style={styles.hotelname1}>Location: D Ground Near Mac Donalds</Text>
      <View style={styles.hotelname2view}>
        <Text style={styles.hotelname2}>
          "The Serena Hotel is a modern, elegant 4-star hotel perfect for a
          romantic, charming vacation.
        </Text>
        <Image
          source={require("./assets/rating.png")}
          style={styles.H3rating}
        />
        <Text style={styles.H3ratingtxt}>(7.5 rating)</Text>
        <Text style={styles.H4ratingtxt}>($230 per night)</Text>
      </View>
      <TouchableOpacity style={styles.bookbtn} onPress={book11}>
        <Text style={styles.bookbtntxt}>Book Now!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelbtn} onPress={back11}>
        <Text style={styles.cancelbtntxt}>Back</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Hotel1;

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
