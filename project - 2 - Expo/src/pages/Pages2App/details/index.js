import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
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

const Details = ({navigation}) => {
  return (
    <AppLayout navigation={navigation}>
      <View
        style={{
          borderRadius: 8,
          flex: 1,
          zIndex:-1
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReturnToHome onPress={()=>{
            navigation.goBack()
          }}  />
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
                <TextRenders
                  key={index.toString()}
                  title={item.title}
                  item={item.item}
                />
              );
            })}

            <Space space={20} />
            <Txt Bold={"700"}>Restaurant : La Lune de Béjaïa</Txt>
            <Space />
            <SelectButton icon={Select}>Contenu de la commande</SelectButton>

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
            <Space space={20}/>
            <PrimaryButton icon={Select}>Contenu de la commande</PrimaryButton>

            <Space space={40} />
          </View>
        </ScrollView>
      </View>
    </AppLayout>
  );
};

export default Details;

const TextRenders = ({ title, item }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Txt>{title} </Txt>
      <Txt Bold={"700"}>{item} </Txt>
    </View>
  );
};

// const Line = () =>{
//   return(
//     <View style={{
//       height:1,
//       backgroundColor:"#CCC" ,
//       width:"100%",
//       marginTop:10
//     }}>

//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textdescription: {
    width: "80%",
    lineHeight: 17,
  },
});
