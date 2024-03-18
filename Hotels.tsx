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
import { TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold, Home } from "react-feather";
import { CheckBox, Icon } from "react-native-elements";
import { useState } from "react";
interface HotelsScreenProps
{
  navigation:any;
}
const Hotels = (props:HotelsScreenProps) => {
  const fiterhotels=()=>props.navigation.navigate("FilterPage")
  const touchhotels1=()=>props.navigation.navigate("Hotel1")
  const touchhotels2=()=>props.navigation.navigate("Hotel2")
  const touchhotels3=()=>props.navigation.navigate("Hotel3")
  const goback=()=>props.navigation.navigate("MainMenu")
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimage}
        source={require("./assets/albert-vincent-wu-AkqnZZR1oL4-unsplash.jpg")}
      >
        <View style={styles.HotelsContainer}>
          <Text style={styles.Hotelstxt}>Hotels</Text>
          <View style={styles.filter}>
            <TouchableOpacity onPress={fiterhotels}>
              <Feather
                style={styles.fliterfont}
                name="filter"
                color="#808080"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Searchbar}>
            <TextInput
              style={styles.searchInput}
              placeholder="      Search"
              placeholderTextColor="#808080"
            />
            <Feather
              style={styles.searchfont}
              name="search"
              color="#808080"
              size={20}
            />
          </View>
          
            <TouchableOpacity  style={styles.H1touch} onPress={touchhotels1}>
            <View style={styles.H1View}>
              <Image source={require('./assets/28494514.jpg')} style={styles.H1image}/>
              <Text style={styles.H1txt}>
                Serena Hotel FaisalAbad
              </Text>
              <Image source={require('./assets/rating.png')} style={styles.H1rating}/>
              <Text style={styles.H1ratingtxt}>
                (7.5 rating)
              </Text>
              <Image source={require('./assets/holocation.png')} style={styles.H1location}/>
              <Text style={styles.H1locationtxt}>
                D-Ground
              </Text>
              <Text style={styles.H1pricetxt}>
                $ 230.0
              </Text>
            </View>


            </TouchableOpacity>
            <TouchableOpacity  style={styles.H2touch} onPress={touchhotels2}>
            <View style={styles.H2View}>
              <Image source={require('./assets/travel-holiday-vacation-327_89074.jpg')} style={styles.H2image}/>
              <Text style={styles.H2txt}>
              Pearl Continental(P-C)
              </Text>
              <Image source={require('./assets/rating.png')} style={styles.H2rating}/>
              <Text style={styles.H2ratingtxt}>
                (8.8 rating)
              </Text>
              <Image source={require('./assets/holocation.png')} style={styles.H2location}/>
              <Text style={styles.H2locationtxt}>
                Burban
              </Text>
              <Text style={styles.H2pricetxt}>
                $ 300.0
              </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.H3touch} onPress={touchhotels3}>
            <View style={styles.H3View}>
              <Image source={require('./assets/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_4341927.png')} style={styles.H3image}/>
              <Text style={styles.H3txt}>
              Emirates Palace
              </Text>
              <Image source={require('./assets/rating.png')} style={styles.H3rating}/>
              <Text style={styles.H3ratingtxt}>
                (10.0 rating)
              </Text>
              <Image source={require('./assets/holocation.png')} style={styles.H3location}/>
              <Text style={styles.H3locationtxt}>
                Abu-Dhabi
              </Text>
              <Text style={styles.H3pricetxt}>
                $ 640.0
              </Text>
            </View>
            </TouchableOpacity>
            
          
          <View style={styles.back}>
            <TouchableOpacity onPress={goback}>
              <Image
                source={require("./assets/back-button.png")}
                style={styles.backpng}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  HotelsContainer: {
    top: 0,
    left: 0,
    borderWidth: 0,
    width: 400,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 870,
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
  Hotelstxt: {
    bottom: 100,
    fontSize: 30,
    left: 162,
    fontWeight: "bold",
  },

  H1View: {
    borderWidth: 3,
    height: 150,
    bottom: 0,
    backgroundColor:"white",
    borderRadius:30
  },
  H1rating:
  {
    width:60,
    height:60,
    bottom:140,
    left:140,

  },
  H1ratingtxt:
  {
    bottom:160,
    left:138,
    fontWeight:'bold'
  },
  H1location:
  { width:30,
    height:30,
    bottom:160,
    left:130,
  },

  H1locationtxt:
  {
    bottom:183,
    left:160,
    fontWeight:'bold'
  },
  H1pricetxt:
  {
    bottom:180,
    left:320,
    fontWeight:'bold',
    fontSize:17,
    color:'#8b0000'
  },
  H1touch:
  {
    borderWidth:0,
    bottom:50
  },
  H1txt: {
    left:135,
    fontSize:21,
    fontWeight:"bold",
    bottom:120
  },
  H1image:
  {
    width:150,
    height:130,
    borderRadius:50
  },
  H2View: {
    borderWidth: 3,
    height: 150,
    bottom: 0,
    backgroundColor:"white",
    borderRadius:30
  },
  H2rating:
  {
    width:60,
    height:60,
    bottom:140,
    left:140,

  },
  H2ratingtxt:
  {
    bottom:160,
    left:138,
    fontWeight:'bold'
  },
  H2location:
  { width:30,
    height:30,
    bottom:160,
    left:130,
  },

  H2locationtxt:
  {
    bottom:184,
    left:158,
    fontWeight:'bold'
  },
  H2pricetxt:
  {
    bottom:180,
    left:320,
    fontWeight:'bold',
    fontSize:17,
    color:'#8b0000'
  },
  H2touch:
  {
    borderWidth:0,
    bottom:0
  },
  H2txt: {
    left:135,
    fontSize:21,
    fontWeight:"bold",
    bottom:120
  },
  H2image:
  {
    width:130,
    height:130,
    borderRadius:0,
    top:10,
    left:2
  },
  //---
  H3View: {
    borderWidth: 3,
    height: 150,
    bottom: 0,
    backgroundColor:"white",
    borderRadius:30
  },
  H3rating:
  {
    width:60,
    height:60,
    bottom:140,
    left:140,

  },
  H3ratingtxt:
  {
    bottom:160,
    left:138,
    fontWeight:'bold'
  },
  H3location:
  { width:30,
    height:30,
    bottom:160,
    left:130,
  },

  H3locationtxt:
  {
    bottom:184,
    left:158,
    fontWeight:'bold'
  },
  H3pricetxt:
  {
    bottom:180,
    left:320,
    fontWeight:'bold',
    fontSize:17,
    color:'#8b0000'
  },
  H3touch:
  {
    borderWidth:0,
    bottom:-50
  },
  H3txt: {
    left:135,
    fontSize:21,
    fontWeight:"bold",
    bottom:120
  },
  H3image:
  {
    width:150,
    height:130,
    borderRadius:60,
    top:10,
    left:2
  },
  Searchbar: {
    borderWidth: 0,
    bottom:310,
    height: 40,
  },
  searchInput: {
    width: 288,
    left: 60,
    top: 215,
    borderWidth: 2,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
  },
  searchfont: {
    left: 30,
    top: 180,
    fontSize: 25,
    color: "black",
    borderWidth: 0,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    borderRightWidth: 0,
   borderRadius:10
  },
  filter: {
    borderWidth: 0,
    left: 350,
    top: -57,
    width: 30,
  },
  fliterfont: {
    fontSize: 28,
    color: "black",
    bottom:0
  },
  back: {
    flex: 0,
    width: 50,
    height: 50,
    left: 10,
    bottom: -120,
    borderWidth: 0,
  },
  backpng: {
    resizeMode: "center",
    width: 40,
    height: 40,
  },
});
