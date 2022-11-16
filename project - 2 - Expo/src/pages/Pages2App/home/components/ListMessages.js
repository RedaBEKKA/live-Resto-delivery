import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RenderResMessage from "./renderResMessage";
import RenderSendMessage from "./renderSendessage";
import { COLORS, SIZES } from "../../../../theme";

const List = [
  {
    id: 1,
    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "recue",
  },
  {
    id: 2,

    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
  {
    id: 3,

    sender: false,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En livraison",
  },
  {
    id: 4,

    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
  {
    id: 5,

    sender: false,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
];

const ListMessages = () => {
  return (

        List.map((item) => {
          return <ItemsRender key={item.id} item={item} />;
        })
  );
};

export default ListMessages;

const ItemsRender = ({ item }) => {
  let sender = item.sender;

  if (sender) {
    return <RenderSendMessage item={item} />;
  }
  if (!sender) {
    return !sender && <RenderResMessage item={item} />;
  }

  return null;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ccc",
  },
});



    // <FlatList
    //   data={List}
    //   renderItem={({ item }) => {
    //     return <ItemsRender item={item} />;
    //   }}
    //   keyExtractor={(item) => item.id}
    //   contentContainerStyle={[styles.wrapper]}
    //   showsVerticalScrollIndicator={false}
    // />