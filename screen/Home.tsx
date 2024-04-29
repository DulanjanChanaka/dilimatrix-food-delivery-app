import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import Swiper from "@/components/swiper";
import PopulerItems from "@/components/populerItems";
import Foods from "@/components/foods";
import Drink from "@/components/drinks";
import { StatusBar } from "expo-status-bar";
import Today from "./Today";
import Offer from "./Offer";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width: dwidth } = Dimensions.get("window");


const Home = ({ navigation }: { navigation: { navigate: any } }) => {
  const [screen, setScreen] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.main}>
        <View style={styles.topcontainer}>
          <View style={styles.topbar}>
            <View>
              <Text style={styles.welcomeText}>Hi Suranga</Text>
            </View>
            <View style={styles.topIconsContainer}>
              <Feather

                name="bell"
                size={24}
                color="black"
              />
              <Feather name="settings" size={24} color="black" />
            </View>
          </View>
        </View>
        <Text style={styles.welcomeDescription}>Discover Delights</Text>

        <TextInput style={styles.searchBar} placeholder="Search..." />

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Swiper />

          <ScrollView>
            <View style={{ width: "100%", flex: 1, marginTop: 10, }}>
              <View style={{ width: "100%", flex: 0.2, backgroundColor: "black" }} />
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 7,
                  paddingHorizontal: 7,
                }}
              >
                <TouchableOpacity style={[
                  styles.tabStyles,
                  screen === 1 ? styles.activeTabIndicator : styles.notSelectTab,
                ]}
                  onPress={() => setScreen(1)}>
                  <Text style={styles.textmenu}>Today Special  <FontAwesome5 name="hotjar" size={14} color="orange" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                  styles.tabStyles,
                  screen === 2 ? styles.activeTabIndicator : styles.notSelectTab,
                ]}
                  onPress={() => setScreen(2)}>
                  <Text style={styles.textmenu}>Offers   <MaterialIcons name="local-offer" size={14} color="orange" /></Text>
                </TouchableOpacity>

              </View>
              {screen === 1 ? (
                <Today navigation={navigation} />
              ) : screen === 2 ? (
                <Offer />
              ) : null}
            </View>




          </ScrollView>



        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notSelectTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#d9dfe4',


  },

  textmenu: {
    fontSize: 15,
    fontWeight: '500'

  },

  container: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,

  },
  tabStyles: {
    width: Number(((dwidth) / 2).toFixed(0)),
    paddingVertical: 5,
    paddingHorizontal: 7,
    alignItems: 'center',


  },

  activeTabIndicator: {
    borderBottomWidth: 3,
    borderBottomColor: 'orange',

  },


  cardContainer: {
    flexDirection: "row",
    paddingBottom: 20
  },
  main: {
    marginHorizontal: 5,
    flex: 1,

  },
  topcontainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
  topbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFA500",
  },
  welcomeDescription: {
    fontWeight: "500",
    fontSize: 20,
    paddingHorizontal: 20,
    color: "#9a9a9a",
  },
  card: {
    backgroundColor: "white",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 170,
    height: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    margin: 10,
    backgroundColor: "#CFCECA",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  swiperImage: {
    height: 200,
    width: 200,
  },
  topCard: {
    shadowColor: 'gray',
    borderRadius: 20,
    overflow: "hidden",
  },
  scrollView: {
    paddingHorizontal: 10,
    marginBottom: 60
  },
  topCardContainer: {
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    marginRight: 15,
    overflow: "hidden",
  },
  topCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  topImageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  topTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  GradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
    marginTop: 15,
  },
  swiperButton: {
    backgroundColor: "#FD7F20",
    marginHorizontal: 70,
    borderRadius: 20,
    paddingVertical: 2,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 10,
    paddingRight: 5
  },
  cardImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  priceName: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imagedev: {
    height: "60%",
    alignItems: "center",
    paddingTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  heartIcon: {
    position: 'absolute',
    right: 5,
    top: 5
  }

});

export default Home;
