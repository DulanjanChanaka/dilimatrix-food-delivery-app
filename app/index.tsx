import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from '@/navigation/StackNavigator'


const App = () => {
  return (
    <View style={{flex:1}}>
      <StackNavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})