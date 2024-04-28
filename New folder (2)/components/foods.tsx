import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Data from "@/data/Data";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Foods = ({ navigation }: { navigation: { navigate: any } }) => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.topCard}

  >
    <View style={styles.cardContainer}>
      {Data.products
        .filter((product) => product.category === "food") // Filter products with rating greater than 4.7
        .map((product) => (
          <View>

            <TouchableOpacity
              key={product.id}
              style={styles.card}
              onPress={() => {
                navigation.navigate("Product", {
                  itemId: product.id,
                  name: product.name,
                  image: product.image,
                  description: product.description,
                  price: product.price,
                  rating: product.rating,
                  review: product.reviews,
                  category: product.category,
                  descriptionextend:product.descriptionextend,
                });
              }}
            >
              <View style={styles.imagedev}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.cardImage}
                />
              </View>
              <View>
                
              </View>
              <Octicons name="feed-heart" size={24} color="#B9B7BD" style={styles.heartIcon} />


              <View style={styles.description}>
                <Text style={styles.cardName}>{product.description}</Text>
              </View>


              <View style={styles.reviewAndRatings}>
                <View style={styles.reviews}>
                    <Text>{product.reviews}</Text>
                <MaterialIcons name="reviews" size={18} color="#B9B7BD" />
                </View>
              
                <View style={styles.ratings}>
                <Text>{product.rating}</Text>
                <AntDesign name="star" size={18} color="#F8D210" />
                
                </View>
              </View>
              <View style={styles.priceAndFee}>
                <Text style={styles.price}>{product.price}</Text>
                <View style={styles.fees}>
                <MaterialCommunityIcons name="truck-fast-outline" size={24} color="black" />
                <Text style={styles.feeText}>Free</Text>

                </View>
                
              </View>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  </ScrollView>
  )
}

export default Foods

const styles = StyleSheet.create({
    description:{
        marginBottom:5

    },
    feeText:{
        backgroundColor:'#FFA500',
        paddingHorizontal:5,
        fontSize:13,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        height:20,
        

    },
    fees:{
        flexDirection:'row',
        gap:2,
        alignItems:'center'
    },
    priceAndFee:{
        flexDirection:'row',
        justifyContent:'space-between',
       paddingHorizontal:10,

    },
    price:{
        fontSize:15,
        fontWeight:'600',
        

    },
    reviews:{
        flexDirection:'row',
        gap:2

    },

    ratings:{
        flexDirection:'row',
        gap:2
    },
    reviewAndRatings:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginBottom:5
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
        height: 190,
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
        height: "50%",
        alignItems: "center",
        paddingTop: 5,
        marginBottom:5,
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
})