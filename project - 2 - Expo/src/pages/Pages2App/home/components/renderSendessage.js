import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import back from "../../../../Assets/img/c1.png";
import checkMesg from "../../../../Assets/img/checkMesg.png";
import { Txt } from "../../../../components/utils";
import { COLORS } from "../../../../theme";
import Iconer from "../../../../components/Iconer";
import calendar from "../../../../Assets/img/calendar.png";
import bike2 from "../../../../Assets/img/bike2.png";
import info from "../../../../Assets/img/info.png";
import Subtract from "../../../../Assets/img/Subtract.png";
import Timer from "../../../../Assets/img/Timer.png";
import Timer2 from "../../../../Assets/img/Timer2.png";
import eys2 from "../../../../Assets/img/eys2.png";

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
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Iconer
                title="Aujourd’hui à 10:20"
                icon={calendar}
                color={COLORS.green1}
              />
              <View style={{ flexDirection: "row" }}>
                <Image source={info} style={{ marginRight: 5 }} />
                <Image source={Subtract} />
              </View>
            </View>
            <Space />
            <Txt fontSize={14}>La Lune de Béjaïa - #56226</Txt>
            <Txt Bold="700">DE MELO Céline</Txt>
            <Txt>
              21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille
            </Txt>
            <Space space={15} />
            {/* <Iconer
              title="En attente de réception"
              icon={Timer}
              color={COLORS.red}
            /> */}

            <Iconer
              title="Reçue et vue"
              icon={eys2}
              color={COLORS.yellow}
            />
            <Space space={10} />

            <View
              style={{
                width: "100%",
                zIndex: 100,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {/* <ButtonRectangle195
                textColor={COLORS.green1}
                icon={eys}
                fontSize={12}
              >
                Indiqué comme vue
              </ButtonRectangle195> */}
              <ButtonRectangle195
                textColor={COLORS.green1}
                icon={Timer2}
                fontSize={12}
                textTransform={"none"}
              >
                En attente
              </ButtonRectangle195>

              <ButtonRectangle195
                textColor={COLORS.green1}
                icon={bike2}
                fontSize={12}
                textTransform={"none"}
              >
                Retirée / En livraison
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
        height:260
      }}
    >
      <Image source={checkMesg} style={{ marginRight: 4 }} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
