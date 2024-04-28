import { StyleSheet, Text, View } from "react-native";

const Profile = ({
  route,
  navigation,
}: {
  route: {
    params: any;
  };
  navigation: { navigate: any };
}) => {
  const param = route.params;

  console.log(param);

  return (
    <View>
      <Text>{param.name}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
