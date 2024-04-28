import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Swiper from "@/components/swiper";
import PopulerItems from "@/components/populerItems";
import Foods from "@/components/foods";
import Drink from "@/components/drinks";

const Home = ({ navigation }: { navigation: { navigate: any } }) => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" />
      <View style={styles.main}>
        <View style={styles.topcontainer}>
          <View style={styles.topbar}>
            <View>
              <Text style={styles.welcomeText}>Hi Suranga</Text>
            </View>
            <View style={styles.topIconsContainer}>
              <Feather
                onPress={() => {
                  navigation.navigate("Profile", {
                    itemId: 86,
                    otherParam: "anything you want here",
                    name: "amila",
                  });
                }}
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
 

          <Text style={styles.heading}>Populer Items</Text>

          <PopulerItems navigation={navigation} />



          <Text style={styles.heading}>Foods</Text>
          <Foods navigation={navigation}/>


          <Text style={styles.heading}>Drinks</Text>

      <Drink navigation={navigation}/>

          {/* <Text>Offer</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.topCard}
          >
            {cards.map((card) => (
              <View key={card.id} style={styles.card}>
                <Text>{card.title}</Text>
              </View>
            ))}
          </ScrollView>*/}
        </ScrollView> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

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
    //justifyContent:'center',

    flexDirection: "column",

    // marginLeft:20
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
    // width:150,
    // justifyContent:'center'
    marginHorizontal: 70,
    borderRadius: 20,
    paddingVertical: 2,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft:10,
    paddingRight:5
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
