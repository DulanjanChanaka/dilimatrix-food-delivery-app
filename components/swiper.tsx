import { View, FlatList, Dimensions, Image, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const { width: dwidth } = Dimensions.get("window");

const Ddata = [0, 1, 2, 3, 4, 5];

const Swiper = () => {
  const sliderRef = useRef<FlatList<number>>(null);
  const dotRef = useRef<View[] | null[]>([]);
  const scroll = useRef<number>(0);

  useEffect(() => {
    const e = setInterval(() => {
      if (sliderRef) {
        sliderRef.current?.scrollToIndex({
          animated: true,
          index: scroll.current,
        });
      }

      if (scroll.current !== Ddata.length - 1) {
        scroll.current = scroll.current + 1;
      } else {
        scroll.current = 0;
      }
    }, 3000);

    return () => {
      clearInterval(e);
    };
  }, []);

  return (
    <View style={{ borderRadius: 20, overflow: "hidden" }}>
      <View style={{ borderRadius: 20 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Ddata}
          horizontal
          pagingEnabled
          onScroll={(e) => {
            const index: number = Number(
              (e.nativeEvent.contentOffset.x / dwidth).toFixed(0)
            );
            
            for (const n of Ddata) {
              if (n === index) {
                dotRef.current[n]?.setNativeProps({
                  style: { backgroundColor: "rgb(255,165,0)" }, 
                });
              } else {
                dotRef.current[n]?.setNativeProps({
                  style: { backgroundColor: "#797979" }, 
                });
              }
            }
          }}
          ref={sliderRef}
          renderItem={({ item }) => (
            <View
              style={{
                width: dwidth - 34,
                marginHorizontal: 3,
                height: 150,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={["rgba(255,165,0,0.8)", "rgba(255,165,0,0)"]}
                style={styles.GradientBackground}
              />
              <View style={styles.topCardContent}>
                <View style={styles.topImageContainer}>
                  <Image
                    source={require("../assets/topSwiper1.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.topTextContainer}>
                  <Text style={styles.text}>Get Special Discount</Text>
                  <Text style={styles.text}>UP TO 20%</Text>
                  <TouchableOpacity style={styles.swiperButton}>
                    <Text style={styles.text}>Explore Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          gap: 5,
          flexDirection: "row",
          bottom: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Ddata.map((_, index) => (
          <View
            key={index}
            ref={(ref) => (dotRef.current[index] = ref)}
            style={{
              width: 10,
              height: 10,
              borderRadius: 20,
              backgroundColor: "white",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Swiper;

const styles = StyleSheet.create({
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
    backgroundColor: "#e5e5e5",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 150,
    height: 160,
    flexDirection: "column"
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
    marginHorizontal: 50,
    borderRadius: 20,
    paddingVertical: 2,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "500",
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
});