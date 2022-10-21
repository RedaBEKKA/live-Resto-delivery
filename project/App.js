import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Login from './src/pages/auth/Login';
import SignIn from './src/pages/auth/SignIn';

const App = () => {


  return (
    <ScrollView>
      <View>
        {/* <Login/> */}
        <SignIn/>
      </View>
    </ScrollView>
    );
};



export default App;
