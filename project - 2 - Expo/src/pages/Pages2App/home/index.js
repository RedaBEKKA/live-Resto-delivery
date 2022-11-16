import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HerderHome from '../../../components/Heders/HerderHome'
import { COLORS } from '../../../theme'
import ListMessages from './components/ListMessages'


const Home = () => {
  return (
    <View style={{flex:1 , backgroundColor:COLORS.white,}}>
      <HerderHome/>
      <View style={{flex:1 ,   margin:10 , borderRadius:8 , padding:3}}>

      <ListMessages />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})