import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderHome from "../../components/Heders/HeaderHome";
import { COLORS, SIZES } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import Loader from "../utils/Loader";
import Space from "../Space";

const AppLayout = ({ navigation, children, loading, noScroll }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderHome navigation={navigation} />
      <View
        style={{
          borderRadius: 8,
          flex: 1,
          zIndex: -1,
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <View
            style={{
              marginHorizontal: noScroll?0:20,
              borderRadius: 8,
              flex: 1,
              zIndex: -1,
            }}
          >
            {noScroll ? (
              <View style={{flex:1 }}>
                {children}
              </View>
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Space space={20} />
                {children}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
