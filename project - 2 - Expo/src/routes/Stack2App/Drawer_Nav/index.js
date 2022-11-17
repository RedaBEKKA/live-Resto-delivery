import React from "react";
import { DrawerContent } from "./CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

 import Home from "../../../pages/Pages2App/home"
import Details from "../../../pages/Pages2App/details";
import Profile from "../../../pages/Pages2App/Profile";
import Historique from "../../../pages/Pages2App/Historique";
import Caisse from "../../../pages/Pages2App/Caisse";

const Drawer = createDrawerNavigator();
const DrawerScreen = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerStyle={{
        width: "85%",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
    
      {/* <Drawer.Screen name="DiaspoBottomTab" component={BottomTabOrange} /> */}
      <Drawer.Screen name="Home" component={Home} {...props} />
      <Drawer.Screen name="Details" component={Details} {...props} />
      <Drawer.Screen name="Profile" component={Profile} {...props} />
      <Drawer.Screen name="Historique" component={Historique} {...props} />
      <Drawer.Screen name="Caisse" component={Caisse} {...props} />
      
      
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
