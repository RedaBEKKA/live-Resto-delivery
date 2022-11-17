import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Txt } from "../../../components/utils";
import { COLORS } from "../../../theme";
import HeaderDetails from "../../../components/Heders/headerDetails";
import ReturnToHome from "./Components/Return";
import Space from "../../../components/Space";
import Iconer from "../../../components/Iconer";
import phone from "../../../Assets/img/phone.png";
import Select from "../../../Assets/img/Select.png";
import { PrimaryButton, SelectButton } from "../../../components/Buttons";
import Line from "../../../components/Line";

import calender from "../../../Assets/img/calendar.png";
import Form from "./Components/Form";
import HeaderHome from "../../../components/Heders/HeaderHome";
import AppLayout from "../../../components/Layouts/AppLayout";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Transition,
  Transitioning,
} from "react-native-reanimated";

const listTexts = [
  {
    title: "étage :",
    item: "4",
  },
  {
    title: "Appartement :",
    item: "B351",
  },
  {
    title: "Code batiment :",
    item: "A1756B x2",
  },
  {
    title: "Code ascenseur :",
    item: "4291",
  },
  {
    title: "Informations complémentaires :",
    item: null,
  },
];

const ItemList = [
  {
    nom: "Produits",
    Qt: "Qt",
    Pu: "P.U",
    isHeader: true,
  },
  {
    nom: "Produits",
    Qt: "1",
    Pu: "21€",
    isHeader: false,
  },
  {
    nom: "Produits",
    Qt: "2",
    Pu: "26€",
    isHeader: false,
  },

  {
    nom: null,
    frais: "Frais de livraison",
    Pu: "6,90€",
    Qt: null,
    isHeader: false,
  },
  {
    nom: null,
    Qt: "TOTAL",
    Pu: "78,99€",
    isHeader: true,
  },
];

const Details = ({ navigation }) => {
  const transition = (
    <Transition.Together>
      <Transition.In type="fade"></Transition.In>
      <Transition.Change />
      <Transition.Out type="fade"></Transition.Out>
    </Transition.Together>
  );

  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
  };
  const rStyle = useAnimatedStyle(() => ({
    opacity: isVisible ? withTiming(1) : withTiming(0),
  }));

  const ref = useRef();

  return (
    <AppLayout navigation={navigation}>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{
          borderRadius: 8,
          flex: 1,
          zIndex: -1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReturnToHome
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Space space={10} />
          <View style={styles.container}>
            <Txt fontSize={24}>#56226</Txt>
            <Space space={20} />
            <Txt fontSize={14} Bold="700">
              DE MELO Céline
            </Txt>
            <Space space={20} />
            <Iconer
              title={"00 00 00 00 00"}
              color={COLORS.green1}
              icon={phone}
            />
            <Space space={20} />
            <Txt fontSize={14} style={styles.textdescription}>
              21 rue du Lieutenant Jean-Baptiste Meschi 13005 - Marseille
            </Txt>
            <Space space={20} />

            {listTexts.map((item, index) => {
              return (
                <View   key={index.toString()}>

                <TextRenders
               
                  title={item.title}
                  item={item.item}
                />
                </View>
              );
            })}

            <Space space={20} />
            <Txt Bold={"700"}>Restaurant : La Lune de Béjaïa</Txt>
            <Space />
            <SelectButton
              icon={Select}
              onPress={() => {
                ref.current.animateNextTransition();
                setIsVisible(!isVisible);
              }}
            >
              Contenu de la commande
            </SelectButton>
            {isVisible && (
              <Animated.View style={[styles.container2, rStyle]}>
                <Elements navigation={navigation} close={close} />
              </Animated.View>
            )}

            <Line color={COLORS.grayLight} />
            <Space space={20} />
            <Iconer icon={calender} title={"Aujourd’hui à 10:20"} />
            <Space space={20} />
            <Txt Bold={"700"}>Total de la commande : 79,90 €</Txt>
            <Space space={20} />
            <Txt fontSize={24} color={COLORS.red}>
              A ENCAISSER : 79,90 €
            </Txt>

            <Form />
            <Space space={20} />
            <PrimaryButton icon={Select}>Contenu de la commande</PrimaryButton>

            <Space space={40} />
          </View>
        </ScrollView>
      </Transitioning.View>
    </AppLayout>
  );
};

export default Details;

const Elements = ({ navigation, close }) => {
  return (
    <View>
      {ItemList.map((item, index) => {
        return (
          <View
            key={index}
            style={styles.Items}
            onPress={() => {
              navigation.navigate(item.route);
              close();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
              }}
            >
              <View style={{width:item.frais ? '50%' : '20%'}}>
                <Txt Bold={item.isHeader ? "700" : "400"}>{item.frais ?item.frais : item.Qt}</Txt>
              </View>
              <View style={{}}>
                <Txt Bold={item.isHeader ? "700" : "400"}>{item.nom}</Txt>
              </View>
            </View>

            <View style={{}}>
              <Txt Bold={item.isHeader ? "700" : "400"}>{item.Pu}</Txt>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const TextRenders = ({ title, item }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Txt>{title} </Txt>
      <Txt Bold={"700"}>{item} </Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textdescription: {
    width: "80%",
    lineHeight: 17,
  },
  container2: {
    zIndex: 1000,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  Items: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent:'space-between'
  },
});
