import { StyleSheet, Text, View } from "react-native";
import React  from "react";
import HeaderHome from "../../components/Heders/HeaderHome";
import { COLORS, SIZES } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";

const AppLayout = ({navigation,children}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderHome navigation={navigation} />
      <View
        style={{
          borderRadius: 8,
          flex: 1,
          zIndex:-1
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}  >
          {children}
        </ScrollView>

        
      </View>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
