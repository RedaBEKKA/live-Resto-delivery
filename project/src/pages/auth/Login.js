import BackgroundLogin from '../../Assets/BackgroundLogin.svg'
import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';


const Login = () => {
  
  return (
    <SafeAreaView >

     <BackgroundLogin 
     width={Dimensions.get('window').width} height={Dimensions.get('window').height}>
     {/* <SignIn/> */}
     </BackgroundLogin>
   
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//     container: {
      
//         flex: 1,
//         // padding: 40,
//         // alignItems: "center",
//         // justifyContent: "center",
//     },
   
//   });
export default Login