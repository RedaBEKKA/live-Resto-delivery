import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderHome from "../../../components/Heders/HeaderHome";
import profile from "../../../Assets/img/Profile/profile.png";
import updatePhoto from "../../../Assets/img/Profile/updatePhoto.png";
import { Txt } from "../../../components/utils";
import Space from "../../../components/Space";
import { COLORS } from "../../../theme";

const ListdData = [
  {
    nom: "Prenon Nom",
    icon: require("../../../Assets/img/Profile/pain.png"),
  },
  {
    nom: "00 00 00 00 00",
    icon: require("../../../Assets/img/Profile/pain.png"),
  },
  {
    nom: "nom.prenom@mail.com",
    icon: require("../../../Assets/img/Profile/pain.png"),
  },
];
const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderHome navigation={navigation} />
      <View style={styles.Profile}>
        <Image source={profile} style={{}} />
      </View>
        <View style={styles.updatePhoto}>
        <TouchableOpacity>

          <Image source={updatePhoto} style={{top:-17}} />
        </TouchableOpacity>
        </View>
      <Space />
      <View style={styles.Box}>
        {ListdData.map((item) => {
          return (
            <View style={styles.item}>
              <Txt>{item.nom} </Txt>
              <Image source={item.icon} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  Profile: {
    flex: 1 / 1.1,
    backgroundColor: "#DEE",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    elevation: 2,
    overflow: "hidden",
    zIndex: -1,
  },
  Box: {
    paddingHorizontal: 30,
  },
  item: {
    height: 35,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.grayLight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  updatePhoto:{
    zIndex:100,
    alignItems:'flex-end',
    paddingRight:30
  }
});
