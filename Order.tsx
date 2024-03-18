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
import { TextInput, Alert} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";

interface OrderScreenProps
{
  navigation:any;
}
const Order = (props:OrderScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);
  const [checked6, setchecked6] = useState(false);
  const back4=()=>props.navigation.navigate("MainMenu")
  const orderdone=()=>Alert.alert("Order Placed Successfully!")
  const acloc=()=>props.navigation.navigate("Location")
  const bookticket1=()=>props.navigation.navigate("Transport")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/bg12.jpg")}
      >
        <Text style={styles.Slctorder}>Select Order</Text>
        <View style={styles.all}>
          <CheckBox
            center
            title="Room Service                     "
            checked={checked}
            onPress={() => setchecked(!checked)}
          />
          <CheckBox
            center
            title="Room Cleaning                  "
            checked={checked2}
            onPress={() => setchecked2(!checked2)}
          />
          <CheckBox
            center
            title="Massage Therapy             "
            checked={checked3}
            onPress={() => setchecked3(!checked3)}
          />
          <CheckBox
            center
            title="Other health Therapies   "
            checked={checked4}
            onPress={() => setchecked4(!checked4)}
          />
          <CheckBox
            center
            title="Book Restaurant              "
            checked={checked5}
            onPress={() => setchecked5(!checked5)}
          />
          <CheckBox
            center
            title="Book Tourist Activities   "
            checked={checked6}
            onPress={() => setchecked6(!checked6)}
          />
        </View>
        <TouchableOpacity style={styles.bookbtn} onPress={orderdone}>
          <Text style={styles.bookbtntxt}>Order Now!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.transportbtn} onPress={bookticket1}>
          <Text style={styles.transporttxt}>Book Ticket for Tourism</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelbtn} onPress={back4}>
          <Text style={styles.cancelbtntxt}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activitybtn} onPress={acloc}>
          <Text style={styles.activitybtntxt}>View Activity Location</Text>
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};
export default Order;

const styles = StyleSheet.create({
  container:
  {

  },
  Slctorder: {
    fontSize: 40,
    borderWidth: 0,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 150,
    marginLeft: -150,
  },
  bgimage: {
    resizeMode: "center",
    width: 450,
    height: 930,
    top: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  all: {
    right: 72,
    bottom: 130,
  },

  bookbtn: {
    backgroundColor: "#808080",
    width: 100,
    height: 40,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: -240,
    left: 120,
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
    bottom: -160,
    right: 160,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  cancelbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  transportbtn: {
    backgroundColor: "#D3D3D3",
    width: 100,
    height: 40,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: 100,
    left: -10,
  },
  transporttxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
  activitybtn: {
    backgroundColor: "#D3D3D3",
    width: 100,
    height: 46,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: 301,
    left: 120,
  },
  activitybtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
});
