import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartUp from "./StartUp";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import MainMenu from "./MainMenu";
import Hotels from "./Hotels";
import Payment from "./Payment";
import Order from "./Order";
import FilterPage from "./FilterPage";
import RoomBook from "./RoomBook";
import Location from "./Location";
import Transport from "./Transport";
import Notification from "./Notifiaction";
import Reminder from "./Reminder";

const { Navigator, Screen } = createNativeStackNavigator();
const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="StartUp"
    >
      <Screen name="StartUp" component={StartUp}></Screen>
      <Screen name="LogIn" component={LogIn}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
      <Screen name="MainMenu" component={MainMenu}></Screen>
      <Screen name="Hotels" component={Hotels}></Screen>
      <Screen name="Payment" component={Payment}></Screen>
      <Screen name="Order" component={Order}></Screen>
      <Screen name="FilterPage" component={FilterPage}></Screen>
      <Screen name="RoomBook" component={RoomBook}></Screen>
      <Screen name="Location" component={Location}></Screen>
      <Screen name="Transport" component={Transport}></Screen>
      <Screen name="Notification" component={Notification}></Screen>
      <Screen name="Reminder" component={Reminder}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
