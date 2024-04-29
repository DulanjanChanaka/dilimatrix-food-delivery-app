import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopulerItems from '@/components/populerItems'
import Foods from '@/components/foods'
import Drink from '@/components/drinks'

const Today = ({ navigation }: { navigation: { navigate: any } }) => {
  return (
    <View>
      <Text style={styles.heading}>Populer Items</Text>
          <PopulerItems navigation={navigation} />

          <Text style={styles.heading}>Foods</Text>
          <Foods navigation={navigation} />


          <Text style={styles.heading}>Drinks</Text>
          <Drink navigation={navigation} />
    </View>
  )
}

export default Today

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 15,
        marginTop: 15,
      },
})