


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from 'react-feather';
import StartUp from '../StartUp';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import MainMenu from '../MainMenu';
import Hotels from '../Hotels';
import Payment from '../Payment';
import Order from '../Order';
import FilterPage from '../FilterPage';
import RoomBook from '../RoomBook';
import Location from '../Location';
import Transport from '../Transport';
import Notification from '../Notifiaction';
import Reminder from '../Reminder';
import Hotel1 from '../Hotel1';
import Hotel2 from '../Hotel2';
import Hotel3 from '../Hotel3';
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator headerMode="none" initialRouteName="StartUp">
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
       <Screen name="Hotel1" component={Hotel1}></Screen>
       <Screen name="Hotel2" component={Hotel2}></Screen>
       <Screen name="Hotel3" component={Hotel3}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;