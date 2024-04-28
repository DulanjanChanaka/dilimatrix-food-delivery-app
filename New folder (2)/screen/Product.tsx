import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

const Product = ({
    route,
    navigation,
}: {
    route: {
        params: any;
    };
    navigation: { navigate: any };
}) => {
    const { image } = route.params; // Destructure the image from route.params
    const [quantity, setQuantity] = useState(1);
    const price = parseFloat(route.params.price.replace(/\D/g, ''));
    const total = price * quantity;

    const addToCart = () => {
        // Add logic to add the product to the cart
        console.log("Product added to cart!");
    };

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
            <StatusBar backgroundColor="black" />
            <View style={styles.main}>
                <View style={styles.navigationBar}>
                    <View style={styles.leftNavigationBar}>
                        <Ionicons name="chevron-back-circle-sharp" size={34} color="white"
                            onPress={() => {
                                navigation.navigate("Home")
                            }}
                        />
                    </View>
                    <View style={styles.rightNavigationBar}>
                        <Octicons name="feed-heart" size={34} color="white" />
                        <MaterialCommunityIcons name="share-circle" size={34} color="white" />
                    </View>
                </View>
                <View>
                    <Image
                        source={{ uri: image }} // Use image from route.params
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{route.params.description}</Text>
                <Text style={styles.price}>{route.params.price}</Text>
                <View style={styles.icons}>
                    <View style={styles.iconset}>
                        <AntDesign name="star" size={20} color="#F8D210" />
                        <Text>{route.params.rating}</Text>
                    </View>
                    <View style={styles.iconset}>
                        <MaterialCommunityIcons name="truck-fast-outline" size={20} color="#FFA500" />
                        <Text>Free</Text>
                    </View>
                    <View style={styles.iconset}>
                        <MaterialCommunityIcons name="clock-time-five-outline" size={20} color="#FFA500" />
                        <Text>30 min</Text>
                    </View>
                    <View style={styles.iconset}>
                        <MaterialIcons name="reviews" size={20} color="#FFA500" />
                        <Text>{route.params.review}</Text>
                    </View>
                </View>
                <View style={styles.descripExtended}>
                    <Text style={styles.descripExtendedText}>{route.params.descriptionextend}</Text>
                </View>
            </View>
            <View style={styles.bottomBar}>
                
                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                    <Text style={styles.addToCartButtonText}>Add to Cart ${total.toFixed(2)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityButton: {
        backgroundColor: '#FFA500',
        borderRadius: 20,
        padding: 10,
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: '#FFA500',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    descripExtendedText:{
        fontSize:14,
        fontWeight:'400'
    },
    descripExtended:{
        paddingHorizontal:20,
        paddingTop:10,
    },
    iconset: {
        flexDirection: "row",
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#fef5ef',
        paddingVertical: 3,
        marginHorizontal: 15,
        borderRadius: 20
    },
    price: {
        paddingLeft: 40,
        fontSize: 20,
        color: '#FFA500',
        fontWeight: '500',
        marginBottom:10,
    },
    bodyContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -40,
        zIndex: 0,
        backgroundColor: 'white',
        paddingBottom: 70, // Adjusted to accommodate bottom bar
    },
    navigationBar: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 10,
        zIndex: 100,
        position: "absolute",
        width: '100%',
        justifyContent: 'space-between', // Aligns the items along the main axis (horizontally)
    },
    rightNavigationBar: {
        flexDirection: "row",
        gap: 10,
        justifyContent: 'flex-start'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        backgroundColor: 'black',
        position: "relative",
    },
    leftNavigationBar: {
        // No need for styling as it is positioned with "left" property
    },
    main: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 40,
        paddingTop: 10,
        marginBottom:10,
    }
});
