import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HerderHome from "../../../components/Heders/HerderHome";
import { COLORS, SIZES } from "../../../theme";
import ListMessages from "./components/ListMessages";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HerderHome />
      <View
        style={{
          margin: 10,
          borderRadius: 8,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}  >
          <ListMessages navigation={navigation} />
        </ScrollView>

        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
