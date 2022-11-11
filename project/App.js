import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "Reanimated 2",
  "EventEmitter.removeListener",
]);
import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Root from "./src/routes/root";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Provider } from "react-redux";
import store from "./src/Redux/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import "./src/i18n";

function App({ navigation }) {
  let persistor = persistStore(store);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BottomSheetModalProvider>
                <Root navigation={navigation} />
              </BottomSheetModalProvider>
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
export default App;
