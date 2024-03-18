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

interface NotificationScreenProps
{
  navigation:any;
}
const Notification = (props:NotificationScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);

  const back8=()=>props.navigation.navigate("MainMenu")
  const set8=()=>Alert.alert("Notifications customized Successfully!")
  const loggedout3=()=>props.navigation.navigate("LogIn")  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/albert-vincent-wu-AkqnZZR1oL4-unsplash.jpg")}
      >
        <View style={styles.meal}>
          <Text style={styles.hello2}>Notifications</Text>

          <CheckBox
            style={styles.check1}
            title="Forced Notifications"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
            onPress={() => setchecked(!checked)}
          />
          <CheckBox
            style={styles.check2}
            title="Clear Notifications"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked2}
            onPress={() => setchecked2(!checked2)}
          />
          <CheckBox
            style={styles.check3}
            title="Remove Notifications"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked3}
            onPress={() => setchecked3(!checked3)}
          />
          <CheckBox
            style={styles.check3}
            title="Mute Notifications"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked4}
            onPress={() => setchecked4(!checked4)}
          />
          <CheckBox
            style={styles.check3}
            title="Push Notifications"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked5}
            onPress={() => setchecked5(!checked5)}
          />
        </View>

        <TouchableOpacity style={styles.availbtn} onPress={set8}>
          <Text style={styles.availbtntxt}>Done!</Text>
        </TouchableOpacity>
        <View style={styles.back}>
          <TouchableOpacity onPress={back8}>
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

export default Notification;

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

  hello2: {
    bottom: 50,
    fontSize: 30,
    left: 115,
    fontWeight: "bold",
  },
  meal: {
    borderWidth: 0,
    width: 400,
    bottom: 150,
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
  menubar: {
    flex: 0,
    width: 50,
    height: 50,
    right: 165,
    bottom: 200,
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
    bottom: 252,
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
    left: -165,
    bottom: -240,
    borderWidth: 0,
  },
  backpng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },
});
