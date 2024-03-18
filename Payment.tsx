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
import { TouchableOpacity, Alert } from "react-native";
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
interface PaymentScreenProps
{
  navigation:any;
}
const Payment = (props:PaymentScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const done3=()=>Alert.alert("Payment Successful.")
  const back3=()=>props.navigation.navigate("MainMenu")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/bg12.jpg")}
      >
        <View style={styles.pymntmthd}>
          <Text style={styles.selectpymntmthd}>Select Payment Method</Text>
          <CheckBox
            style={styles.jazzcash}
            title="Jazzcash"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
            onPress={() => setchecked(!checked)}
          />
          <CheckBox
            style={styles.easypaisa}
            title="EasyPaisa"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked2}
            onPress={() => setchecked2(!checked2)}
          />
          <CheckBox
            style={styles.DebitCard}
            title="Debit Card"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked3}
            onPress={() => setchecked3(!checked3)}
          />
        </View>

        <View style={styles.pymntdetailheading}>
          <Text style={styles.hello2}>Payment Details</Text>

          <View style={styles.pymntdetails}>
            <Text style={styles.accntnametxt}> Account Name:</Text>

            <TextInput
              style={styles.acntnameinput}
              placeholder="   Enter name of account"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.accntNo}>
            <Text style={styles.accntNotxt}> Account No#:</Text>

            <TextInput
              style={styles.accntNoinput}
              placeholder="   Enter Account No#"
              placeholderTextColor="#808080"
            />
          </View>

          <View style={styles.amount}>
            <Text style={styles.amounttext}> Amount:</Text>

            <TextInput
              style={styles.amountInput}
              placeholder="   Enter Amount"
              placeholderTextColor="#808080"
            />
          </View>
        </View>

        <View style={styles.checkout}>
          <Text style={styles.chkout}>Check Out</Text>

          <Text style={styles.Checkouttxt}> Date:</Text>

          <TextInput
            style={styles.checkoutInput}
            placeholder="   DD/MM/YY"
            placeholderTextColor="#000000"
          />

          <Text style={styles.datetext}> Time:</Text>

          <TextInput
            style={styles.dateInput}
            placeholder="   Time of Check Out"
            placeholderTextColor="#000000"
          />
        </View>
        <TouchableOpacity style={styles.bookbtn}onPress={done3}>
          <Text style={styles.bookbtntxt}>Pay Now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelbtn} onPress={back3}>
          <Text style={styles.cancelbtntxt}>Cancel</Text>
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  pymntmthd: {
    bottom: 50,
    width: 400,
    borderWidth: 0,
    height: 220,
    left: 0,
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
  selectpymntmthd: {
    bottom: 20,
    fontStyle: "normal",
    fontSize: 30,
    left: 21,
    fontWeight: "bold",
  },
  hello2: {
    bottom: 0,
    fontSize: 30,
    left: 75,
    fontWeight: "bold",
  },
  pymntdetails: {
    bottom: 0,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  accntnametxt: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  acntnameinput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 160,
    borderRadius: 10,
  },
  accntNo: {
    bottom: 0,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  accntNotxt: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  accntNoinput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 160,
    borderRadius: 10,
  },

  amount: {
    bottom: 0,
    left: 0,
    borderWidth: 0,
    width: 350,
  },
  amounttext: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  amountInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 160,
    borderRadius: 10,
  },
  pymntdetailheading: {
    borderWidth: 0,
    width: 400,
    bottom: 0,
    height: 220,
  },
  jazzcash: {
    width: 100,
    left: 100,
  },
  easypaisa: {
    width: 100,
    left: 100,
  },
  DebitCard: {
    width: 100,
    left: 100,
  },

  checkout: {
    bottom: -40,
    left: 0,
    borderWidth: 0,
    width: 400,
    height: 170,
  },
  chkout: {
    fontSize: 30,
    left: 125,
    fontWeight: "bold",
  },
  Checkouttxt: {
    fontSize: 16,
    fontWeight: "bold",
    right: 0,
    bottom: -14,
  },
  checkoutInput: {
    borderWidth: 2,
    width: 220,
    bottom: 13,
    left: 120,
    borderRadius: 10,
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
    borderRadius: 10,
  },

  bookbtn: {
    backgroundColor: "#808080",
    width: 100,
    height: 40,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    bottom: -81,
    left: 140,
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
    bottom: -40,
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
