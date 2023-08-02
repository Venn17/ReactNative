import React, { useEffect } from "react";
import Login from "./components/login";
import Product from "./components/product";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View } from "react-native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from "./components/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({navigation} : any) => {

  const getData = async () => {
    try{
      const data = await AsyncStorage.getItem('login');
      console.log(data);
    }catch(e){

    }
  }
  useEffect(()=>{
    getData();
  })

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Page</Text>
        <Button title="Detail Page" onPress={()=>navigation.navigate('Detail')}/>
    </View>
  )
}

const DetailScreen = () => {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Page</Text>
        
    </View>
  )
}


const Stack = createNativeStackNavigator();
 
const Tab = createBottomTabNavigator();

const App = ()=> {
  return ( 
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName:any;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
     
                : 'home-outline';
            } else if (route.name === 'Product') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Product" component={Product}></Tab.Screen>
            <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
            <Tab.Screen name="Account" component={Login}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
   );
}
export default App;