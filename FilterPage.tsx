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

interface FilterScreenProps
{
  navigation:any;
}
const FilterPage = (props:FilterScreenProps) => {
  const [checked, setchecked] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);
  const [checked6, setchecked6] = useState(false);
  const [checked7, setchecked7] = useState(false);
  const [checked8, setchecked8] = useState(false);
  const [checked9, setchecked9] = useState(false);
  const [checked10, setchecked10] = useState(false);
  const [checked11, setchecked11] = useState(false);
  const done2=()=>Alert.alert("Filter Applied!")
  const back2=()=>props.navigation.navigate("Hotels")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/albert-vincent-wu-AkqnZZR1oL4-unsplash.jpg")}
      >
        <View style={styles.categories}>
          <Text style={styles.hello2}>Categories</Text>

          <CheckBox
            style={styles.check1}
            title="Hotels with swimming pool"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
            onPress={() => setchecked(!checked)}
          />
          <CheckBox
            style={styles.check2}
            title="Hotels with Bar"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked2}
            onPress={() => setchecked2(!checked2)}
          />
          <CheckBox
            style={styles.check3}
            title="Hotels with Lawn"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked3}
            onPress={() => setchecked3(!checked3)}
          />
          <CheckBox
            style={styles.check3}
  
            title=" Hotels allow Pets"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked4}
            onPress={() => setchecked4(!checked4)}
          />
          <CheckBox
            style={styles.check3}
            title="Hotels with Meal Packages"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked5}
            onPress={() => setchecked5(!checked5)}
          />
        </View>

        <View style={styles.sort}>
          <Text style={styles.hello}>Sort Your Search</Text>

          <CheckBox
            style={styles.check1}
            title="Price (high to low)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked6}
            onPress={() => setchecked6(!checked6)}
          />
          <CheckBox
            style={styles.check2}
            title="Price (low to high)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked7}
            onPress={() => setchecked7(!checked7)}
          />
          <CheckBox
            style={styles.check3}
            title="Rating(low to high)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked8}
            onPress={() => setchecked8(!checked8)}
          />
          <CheckBox
            style={styles.check3}
            title=" Rating(high to low)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked9}
            onPress={() => setchecked9(!checked9)}
          />
          <CheckBox
            style={styles.check3}
            title="Popularity(high to low)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked10}
            onPress={() => setchecked10(!checked10)}
          />
          <CheckBox
            style={styles.check3}
            title="Popularity(low to high)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked11}
            onPress={() => setchecked11(!checked11)}
          />
        </View>

        <TouchableOpacity style={styles.availbtn} onPress={done2}>
          <Text style={styles.availbtntxt}>Done!</Text>
        </TouchableOpacity>
        <View style={styles.back}>
          <TouchableOpacity onPress={back2}>
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

export default FilterPage;

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
  hello: {
    bottom: 20,
    fontSize: 30,
    left: 25,
    fontWeight: "bold",
  },

  hello2: {
    bottom: 20,
    fontSize: 30,
    left: 75,
    fontWeight: "bold",
  },

  categories: {
    borderWidth: 0,
    width: 300,
    bottom: 120,
    height: 220,
  },
  sort: {
    borderWidth: 0,
    width: 300,
    bottom: -20,
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
    left: 140,
    top: 200,
    borderRadius: 10,
  },
  availbtntxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  back: {
    flex: 0,
    width: 50,
    height: 50,
    left: -168,
    bottom: -160,
    borderWidth: 0,
  },
  backpng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },
});
