import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import back from "../../../../Assets/img/c2.png";
import checkMesg from "../../../../Assets/img/checkSend.png";
import check from "../../../../Assets/img/check.png";
import bike from "../../../../Assets/img/bike.png";
import { COLORS, SIZES } from "../../../../theme";
import { Txt } from "../../../../components/utils";
import Iconer from "../../../../components/Iconer";
import { ButtonRectangle195 } from "../../../../components/Buttons";

const RenderSendMessage = () => {
  return (
    <Cover>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            flex: 1,
            width: "95%",
            padding: 20,
          }}
        >
          <View>
            <Txt fontSize={14}>La Lune de Béjaïa - #56226</Txt>
            <Txt Bold="700">DE MELO Céline</Txt>

            <Txt>
              21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille
            </Txt>

            <Iconer title="En livraison" icon={bike} color={COLORS.green3} />

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

        <Image source={back} style={{ height: 204 }} resizeMode="contain" />
      </View>
    </Cover>
  );
};

export default RenderSendMessage;

const Cover = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        paddingVertical: 8,
        overflow: "hidden",
      }}
    >
      {children}
      <View>
        <Image source={checkMesg} style={{ marginLeft: 4 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});