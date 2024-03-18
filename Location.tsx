import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native";
interface LocationScreenProps
{
  navigation:any;
}
const Location = (props:LocationScreenProps) => {
  const back5=()=>props.navigation.navigate("Order")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/bg12.jpg")}
      >
        <Text style={styles.activityloc}>Activity Location</Text>
        <TouchableOpacity style={styles.map}>
          <Image
            source={require("./assets/maps-building-layer.png")}
            style={styles.mapimg}
          />
        </TouchableOpacity>
        <View style={styles.textview}>
          <Text style={styles.address1}> Location:</Text>
          <Text style={styles.address}>
            6 Coronation Avenue, Dockland, NSW, 2033
          </Text>
          <Text style={styles.address3}> Next Stop:</Text>
          <Text style={styles.address2}>1 Lincoln Road, Nevara, NSW, 2000</Text>
        </View>

        <View style={styles.back}>
          <TouchableOpacity onPress={back5}>
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
export default Location;

const styles = StyleSheet.create({
  container:
  {

  },
  activityloc: {
    fontSize: 40,
    borderWidth: 0,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 170,
    marginLeft: -30,
  },
  bgimage: {
    resizeMode: "center",
    width: 450,
    height: 930,
    top: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    resizeMode: "center",
    width: 350,
    height: 300,
    bottom: 130,
    right: 20,
    borderWidth: 3,
  },
  mapimg: {
    width: 346,
    height: 295,
    bottom: 0,
    right: 1,
  },
  textview: {
    width: 400,
    right: 10,
    bottom: -40,
  },
  address: {
    bottom: 140,
    fontSize: 16,
    fontWeight: "bold",
  },
  address2: {
    bottom: 120,
    fontSize: 16,
    fontWeight: "bold",
  },
  address1: {
    bottom: 140,
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  address3: {
    bottom: 120,
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  back: {
    flex: 0,
    width: 50,
    height: 50,
    right: 175,
    bottom: -155,
    borderWidth: 0,
  },
  backpng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },
});
