import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import back from "../../../../Assets/img/c1.png";
import checkMesg from "../../../../Assets/img/checkMesg.png";
import { Txt } from "../../../../components/utils";
import { COLORS } from "../../../../theme";
import Iconer from "../../../../components/Iconer";
import calendar from "../../../../Assets/img/calendar.png";
import check from "../../../../Assets/img/check.png";
import info from "../../../../Assets/img/info.png";
import Subtract from "../../../../Assets/img/Subtract.png";
import Timer from "../../../../Assets/img/Timer.png";

import { ButtonRectangle195 } from "../../../../components/Buttons";
import Space from "../../../../components/Space";

const RenderResMessage = () => {
  return (
    <Cover>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            flex: 1,
            marginLeft: 10,
            padding: 20,
            width: "95%",
          }}
        >
          <View style={{ flex:1}} >
            <View style={{flexDirection:"row"  ,flex:1,   justifyContent:"space-between"}}>
              <Iconer
                title="Aujourd’hui à 10:20"
                icon={calendar}
                color={COLORS.green1}
              />
              <View style={{flexDirection:"row" ,}}>
                <Image source={info} style={{marginRight:5}} />
                <Image source={Subtract} />
              </View>
            </View>
            <Space />
            <Txt fontSize={14}>La Lune de Béjaïa - #56226</Txt>
            <Txt Bold="700">DE MELO Céline</Txt>

            <Txt>
              21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille
            </Txt>

            <Iconer title="En attente de réception" icon={Timer} color={COLORS.red} />

            <View
              style={{
                width: "100%",
                height: 40,
                zIndex: 100,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <ButtonRectangle195
                textColor={COLORS.bleu}
                icon={check}
                width={"45%"}
                fontSize={12}
              >
                Finaliser
              </ButtonRectangle195>
            </View>
          </View>
        </View>

        <Image source={back} />
      </View>
    </Cover>
  );
};

export default RenderResMessage;

const Cover = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        paddingVertical: 8,
      }}
    >
      <Image source={checkMesg} style={{ marginRight: 4 }} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
