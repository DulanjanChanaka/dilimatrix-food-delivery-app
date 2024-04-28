import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screen/Home";
import Search from "@/screen/Search";
import Cart from "@/screen/Cart";
import Favorite from "@/screen/Favorite";
import Profile from "@/screen/Profile";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          bottom: 15,
          marginHorizontal: 10,
          borderRadius: 20,
          height: 60,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="home" size={24} color="#FFA500" />
            ) : (
              <Feather name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="search" size={24} color="#FFA500" />
            ) : (
              <Feather name="search" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="shopping-cart" size={24} color="#FFA500" />
            ) : (
              <Feather name="shopping-cart" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="heart" size={24} color="#FFA500" />
            ) : (
              <Feather name="heart" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="user" size={24} color="#FFA500" />
            ) : (
              <Feather name="user" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
