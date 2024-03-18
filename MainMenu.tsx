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
  SafeAreaView,
  ScrollView
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
import Hotels from "./Hotels";
import Payment from "./Payment";
import Order from "./Order";

interface MainMenuScreenProps
{
  navigation:any;
}
const MainMenu=(props:MainMenuScreenProps)=> {
  const lookforhotels=()=>props.navigation.navigate("Hotels")
  const paynavigate=()=>props.navigation.navigate("Payment")
  const ordernavigate=()=>props.navigation.navigate("Order")
  const loggedout=()=>props.navigation.navigate("LogIn")
  const notifi=()=>props.navigation.navigate("Notification")
  const remind=()=>props.navigation.navigate("Reminder")
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/animation_300_kxqdk0d7.gif")}
      />
      <Text style={styles.Main}>Home</Text>
      <ScrollView>
      <View style={styles.getstarted}>
        
        <View style={styles.look}>
          <TouchableOpacity onPress={lookforhotels}>
            <Text style={styles.looktxt}>Look for Hotels</Text>
            <Image
              style={styles.lookpng}
              source={require("./assets/output-onlinepngtools.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.look1}>
          <TouchableOpacity  onPress={paynavigate}>
            <Text style={styles.look1txt}>Go for Payment</Text>
            <Image
              style={styles.look1png}
              source={require("./assets/animation_200_kxqgkk0l.gif")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.look2}>
          <TouchableOpacity  onPress={ordernavigate}>
            <Text style={styles.look2txt}>Room Services</Text>
            <Image
              style={styles.look2png}
              source={require("./assets/waiter.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.look3}>
          <TouchableOpacity  onPress={notifi}>
            <Text style={styles.look3txt}> Manage Notification</Text>
            <Image
              style={styles.look3png}
              source={require("./assets/jump.gif")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.look4}>
          <TouchableOpacity  onPress={remind}>
            <Text style={styles.look4txt}>Set Reminders</Text>
            <Image
              style={styles.look4png}
              source={require("./assets/Remind.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

      <View style={styles.logout}>
        <TouchableOpacity onPress={loggedout}>
          <Image
            source={require("./assets/log-out1.png")}
            style={styles.logoutpng}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default MainMenu;
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  getstarted: {
    backgroundColor: "#fff",
    // borderTopLeftRadius: 60,
    // borderTopRightRadius: 50,
    borderRadius:60,
    top: 50,
    height: 930,
    width: 414,
  },
  Main: {
    bottom: 90,
    textAlign: "center",
    left: 5,
    color: "black",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "center",
    height: 350,
    width: 250,
    top: 50,
    alignContent: "center",
    justifyContent: "center",
    left: 5,
  },
  look: {
    backgroundColor: "black",
    width: 320,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    left: 48,
    top: 20,
    height: 100,
    borderRadius: 30,
  },
  looktxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 125,
    left: -18,
  },
  lookpng: {
    resizeMode: "center",
    left: 100,
    top: -18,
  },

  look1: {
    backgroundColor: "black",
    width: 320,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    left: 48,
    top: 60,
    height: 100,
    borderRadius: 30,
  },
  look1txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 100,
    left: -42,
  },
  look1png: {
    resizeMode: "center",
    left: 100,
    top: -18,
  },

  look2: {
    backgroundColor: "black",
    width: 320,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    left: 48,
    top: 100,
    height: 100,
    borderRadius: 30,
  },
  look2txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 45,
    left: -48,
  },

  look2png: {
    resizeMode: "center",
    left: 150,
    top: -18,
    width: 90,
    height: 90,
  },
  look3: {
    backgroundColor: "black",
    width: 320,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    left: 48,
    top: 140,
    height: 100,
    borderRadius: 30,
  },
  look3txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    top: 40,
    left: -43,
  },
  
  look3png: {
    resizeMode: "center",
    left: 176,
    top: -15,
    width: 80,
    height: 80,
  },
  look4: {
    backgroundColor: "black",
    width: 320,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    left: 48,
    top: 180,
    height: 100,
    borderRadius: 30,
  },
  look4txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 25,
    left: -40,
  },
  
  look4png: {
    resizeMode: "center",
    left: 160,
    top: -15,
    width: 50,
    height: 50,
  },

 
  logout: {
    flex: 0,
    width: 45,
    height: 50,
    left: 175,
    bottom: 1000,
    borderWidth: 0,
  },
  logoutpng: {
    resizeMode: "center",
    right: 0,
    width: 40,
    height: 40,
    top: 4,
  },

 
  bgimage: {
    top: 50,
    width: 700,
    height: 450,
    resizeMode: "stretch",
    justifyContent: "center",
    opacity: 3,
  },
});
