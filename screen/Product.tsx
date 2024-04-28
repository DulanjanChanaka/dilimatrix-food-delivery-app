import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Foods from "@/components/foods";
const Product = ({
  route,
  navigation,
}: {
  route: {
    params: any;
  };
  navigation: { navigate: any };
}) => {
  const { image } = route.params;
  const [quantity, setQuantity] = useState(1);
  const price = parseFloat(route.params.price.replace(/\D/g, ""));
  const total = price * quantity;
  const [imageSet, setImageSet] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedExtra, setExpandedExtra] = useState(false);

  const addToCart = () => {

    console.log("Product added to cart!");
  };

  console.log(imageSet);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  console.log(total);

  return (
    <View style={{ flex: 1 }}>
       <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.main}>
        <View style={styles.navigationBar}>
          <View style={styles.leftNavigationBar}>
            <Ionicons
              name="chevron-back-circle-sharp"
              size={34}
              color="white"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
          <View style={styles.rightNavigationBar}>
            <Octicons name="feed-heart" size={34} color="white" />
            <MaterialCommunityIcons
              name="share-circle"
              size={34}
              color="white"
            />
          </View>
        </View>
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: image[imageSet] }}
            style={styles.image}
          />
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 60,
            }}
          >
            <View
              style={{
                width: "80%",
                height: 77,
                flexDirection: "row",

              }}
            >
              {image.map((img, index) => (
                <TouchableOpacity key={index} onPress={() => setImageSet(index)}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: img }}
                      style={styles.imageThumbnail}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{route.params.description}</Text>
        <Text style={styles.price}>{route.params.price}</Text>
        




      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.icons}>
          <View style={styles.iconset}>
            <AntDesign name="star" size={20} color="#F8D210" />
            <Text> {route.params.rating}</Text>
          </View>
          <View style={styles.iconset}>
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={20}
              color="#FFA500"
            />
            <Text> Free</Text>
          </View>
          <View style={styles.iconset}>
            <MaterialCommunityIcons
              name="clock-time-five-outline"
              size={20}
              color="#FFA500"
            />
            <Text> 30 min</Text>
          </View>
          <View style={styles.iconset}>
            <MaterialIcons name="reviews" size={20} color="#FFA500" />
            <Text> {route.params.review}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.descripExtended}>
            <Text style={styles.descripExtendedText}>
              {route.params.descriptionextend}
            </Text>
          </View>
          <View style={styles.sellerContainer}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-vector/food-shop-logo-design-template_145155-1248.jpg' }}
              style={styles.sellerLogo}
            />
            <Text style={styles.sellerText}>Tasty Foods</Text>
            <Text style={styles.sellerReview}>100% Positive Review</Text>
          </View>
          <View style={styles.ingredientsContainer}>
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setExpanded(!expanded)}
            >
              <Text style={styles.toggleButtonText}>
                Ingredients
              </Text>
              <Entypo
                name={expanded ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {expanded && (
              <View style={styles.ingredients}>
                <Text>Mozzarall Cheese</Text>
                <Text>mushrooms</Text>
                <Text>olives</Text>
              </View>
            )}
          </View>
          <View style={styles.ingredientsContainer}>
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setExpandedExtra(!expandedExtra)}
            >
              <Text style={styles.toggleButtonText}>
                Extra Added
              </Text>
              <Entypo
                name={expandedExtra ? "chevron-up" : "chevron-down"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {expandedExtra && (
              <View style={styles.ingredients}>
                <Text>Sause Packet x 1</Text>
                <Text>Mayonnaise Packet x 1</Text>

              </View>
            )}
          </View>
          <View>
            <View style={styles.ReviewTitle}>
              <Text style={styles.ReviewTitleText}>Reviews</Text>
              <TouchableOpacity>
                <Text>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.reviews}>
              <View style={styles.review}>
                <View style={styles.reviewName}>
                  <Text style={styles.reviewNameText}>Sampath</Text>
                  <Text style={styles.reviewNameText}>1 month ago</Text>
                </View>
                <View>
                  <Text>It's so savory and delicious!
</Text>
                </View>

              </View>

              <View style={styles.review}>
                <View style={styles.reviewName}>
                  <Text style={styles.reviewNameText}>Darshana</Text>
                  <Text style={styles.reviewNameText}>1 month ago</Text>
                </View>
                <View>
                  <Text>I love how tasty and filling it is!</Text>
                </View>

              </View>

            </View>

          </View>

          <View >
            <View style={styles.sellerStoreTitle}>
              <View style={styles.sellerStoreIcon}>
                <Image
                  source={{ uri: 'https://img.freepik.com/premium-vector/food-shop-logo-design-template_145155-1248.jpg' }}
                  style={styles.sellerLogo}
                />
                <Text>Tasty Foods</Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.follwShopText}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sellerRatings}>
              <View style={styles.sellerPositiveRatings}>
                <Text style={{fontSize:20}}>100%</Text>
                <Text  style={{color:'#6a768a'}}>Positive Seller</Text>
                <Text  style={{color:'#6a768a'}}>Ratings</Text>
              </View>
              <View style={styles.sellerPositiveRatings}>
                <Text style={{fontSize:20}}>100%</Text>
                <Text  style={{color:'#6a768a'}}>Ship On Time</Text>
              </View>
            </View>
            <View style={styles.visitShop}>
              <TouchableOpacity>
                <Text style={styles.visitShopText}>Visit Shop</Text>
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.similerItemTitle}>
          <Text style={styles.similerItemTitleText}>Similer Items</Text>

          </View>
          
          <Foods navigation={navigation}/>


        </View>

      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Entypo name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartButtonText}>
            Add to Cart   ${total.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  similerItemTitleText:{
    fontSize:16,
    fontWeight:"bold"
  },
  similerItemTitle:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:30

  },
  follwShopText:{
    color:'red',
    borderWidth:1,
    paddingHorizontal:5,
    borderColor:'red'

  },
  visitShopText:{
    color:'white',
    paddingHorizontal:8,
    backgroundColor:'red',
    paddingVertical:3,
    fontWeight:'600',
    borderRadius:5,

  },
  visitShop:{
    flexDirection:"row",
    justifyContent:"center",
    paddingTop:20,
    
    
    
  },
  sellerPositiveRatings:{
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  sellerRatings:{
    flexDirection:'row',
    justifyContent:"space-around",
    paddingHorizontal:50,
    
  },
  sellerStoreIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  sellerStoreTitle: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewNameText: {
    color: '#6a768a'

  },
  review: {
    backgroundColor: '#eaecef',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },
  reviewName: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  reviews: {

    paddingHorizontal: 20,
    gap: 5
  },
  detailContainer: {
    backgroundColor: 'white',
   // marginBottom: 100,
    paddingBottom:100,

  },
  ReviewTitleText: {
    fontSize: 16,
    fontWeight: "bold",

  },
  ReviewTitle: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 5,
    marginTop: 15,
  },

  ingredientsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ingredients: {
    marginTop: 10,
  },
  sellerReview: {
    color: '#919a9e',
    paddingLeft: 8
  },
  sellerText: {
    fontSize: 15,
    fontWeight: "500",

  },
  sellerContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',



  },
  sellerLogo: {
    width: 50,
    height: 50,

    borderRadius: 100,


  },
  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: '#d9dcde',
    borderRadius: 15,
    alignItems: 'center',
    gap: 10,

  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityButton: {

    borderRadius: 20,
    padding: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#FFA500",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  descripExtendedText: {
    fontSize: 14,
    fontWeight: "400",
  },
  descripExtended: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  iconset: {
    flexDirection: "row",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fef5ef",
    paddingVertical: 3,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  price: {
    paddingLeft: 40,
    fontSize: 20,
    color: "#FFA500",
    fontWeight: "500",
    marginBottom: 10,
  },
  bodyContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -40,
    zIndex: 0,
    backgroundColor: "white",
    paddingBottom: 10,

  },
  navigationBar: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
    zIndex: 100,
    position: "absolute",
    width: "100%",
    justifyContent: "space-between",
  },
  rightNavigationBar: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    backgroundColor: "black",
    position: "relative",
  },
  leftNavigationBar: {

  },
  main: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 40,
    paddingTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    height: "100%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  imageThumbnail: {
    flex: 1,
    height: "100%",
    resizeMode: "cover",
    backgroundColor: 'white'
  },
});
