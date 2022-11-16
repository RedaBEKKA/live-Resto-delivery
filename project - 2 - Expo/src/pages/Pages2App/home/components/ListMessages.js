import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RenderResMessage from "./renderResMessage";
import RenderSendMessage from "./renderSendessage";

const ListMessages = () => {
  return (
    <View style={{flex:1}}>
      <RenderSendMessage />
      <RenderResMessage />
    </View>
  );
};

export default ListMessages;

const styles = StyleSheet.create({});
