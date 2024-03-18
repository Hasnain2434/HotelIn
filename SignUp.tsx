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
  Alert
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

interface SignUpScreenProps
{
  navigation:any;
}
const SignUp=(props:SignUpScreenProps)=> {
  const signedup=()=>props.navigation.navigate("LogIn")

  const alregister=()=>props.navigation.navigate("LogIn")
  return (
    <View style={styles.bg}>
      <Image
        style={styles.loginGif}
        source={require("./assets/animation_300_kxqb0lhw.gif")}
      />
      <Text style={styles.logintxt}>Sign Up</Text>

      <View style={styles.bg1}>
        <View>
          <Text style={styles.Email1}> Email:</Text>

          <FontAwesome style={styles.User1} name="user-o" color="#808080" />

          <TextInput
            style={styles.textInput}
            placeholder="Your Email or username"
            placeholderTextColor="#808080"
          />
          <Feather
            style={styles.check}
            name="check-circle"
            color="green"
            size={20}
          />
        </View>

        <View style={styles.pss}>
          <Text style={styles.password1}> Phone No#:</Text>

          <FontAwesome style={styles.lock} name="phone" color="#808080" />

          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your Phone No#"
            placeholderTextColor="#808080"
          />
        </View>

        <View style={styles.Home}>
          <Text style={styles.Address}> Home Address:</Text>

          <FontAwesome style={styles.house} name="home" color="#808080" />
          <TextInput
            style={styles.addressInput}
            placeholder="Enter Your Address"
            placeholderTextColor="#808080"
          />

          <View style={styles.phone}>
            <Text style={styles.phone1}> Password:</Text>

            <FontAwesome style={styles.receiver} name="lock" color="#808080" />

            <TextInput
              style={styles.phoneInput}
              placeholder="Enter Password#"
              placeholderTextColor="#808080"
              secureTextEntry={true}
            />
            <Feather
              style={styles.eyeview}
              name="eye-off"
              color="#808080"
              size={20}
            />
          </View>
        </View>

        <View style={styles.btn1}>
          <TouchableOpacity style={styles.btn} onPress={signedup}>
            <Text style={styles.btntxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contain}>
          <Text>Already registered!</Text>
          <TouchableOpacity onPress={alregister}>
            <Text style={styles.asking}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  check: {
    left: 350,
    top: -19,
  },
  contain: {
    left: 143,
    top: 30,
    alignContent: "center",
  },
  asking: {
    color: "#ffa500",
    fontWeight: "bold",
    left: 43,
    textDecorationLine: "underline",
  },
  btn1: {
    top: 0,
    left: 132,
    justifyContent: "center",
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#ffa500",
    height: 55,
    width: 150,
    alignContent: "center",
    justifyContent: "center",
  },
  btntxt: {
    alignContent: "center",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  bg: {
    flex: 1,
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  pss: {
    top: -65,
    alignContent: "center",
    justifyContent: "center",
  },
  password1: {
    fontSize: 15,
    fontWeight: "bold",
    top: 70,
    left: -132,
    justifyContent: "center",
    textAlign: "center",
  },
  passwordInput: {
    width: 280,
    left: 60,
    top: 43,
  },
  lock: {
    fontSize: 15,
    top: 80,
    left: 40,
    height: 30,
  },
  Email1: {
    fontSize: 15,
    fontWeight: "bold",
    top: 30,
    left: 30,
  },
  User1: {
    fontSize: 15,
    top: 40,
    left: 40,
    height: 30,
  },

  textInput: {
    width: 350,
    top: 4,
    paddingLeft: 60,
    color: "#05375a",
  },
  bg1: {
    flex: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: -200,
    height: 900,
    width: 414,
  },
  logintxt: {
    textAlign: "center",
    left: 4,
    fontSize: 30,
    fontWeight: "bold",
    top: 150,
  },
  loginGif: {
    resizeMode: "center",
    top: 220,
    left: 0,
  },

  Home: {
    top: -65,
    alignContent: "center",
    justifyContent: "center",
  },
  Address: {
    fontSize: 15,
    fontWeight: "bold",
    top: 60,
    left: -118,
    justifyContent: "center",
    textAlign: "center",
  },
  addressInput: {
    width: 280,
    left: 61,
    top: 37,
  },
  house: {
    fontSize: 16,
    top: 72,
    left: 38,
    height: 30,
  },

  phone: {
    top: -5,
    alignContent: "center",
    justifyContent: "center",
  },
  phone1: {
    fontSize: 15,
    fontWeight: "bold",
    top: 60,
    left: -136,
    justifyContent: "center",
    textAlign: "center",
  },
  phoneInput: {
    width: 280,
    left: 61,
    top: 36,
  },
  receiver: {
    fontSize: 16,
    top: 72,
    left: 38,
    height: 30,
  },
  eyeview: {
    left: 350,
    top: 10,
  },
});
