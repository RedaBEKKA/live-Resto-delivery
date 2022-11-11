import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, SIZES } from '../../theme';
import Bacimage from '../../Assets/img/bg_login.png';
import FormLogin from '../../pages/Pages1Auth/Login/components/Form';
const AuthLayout = () => {
const [error, seterror] = useState(false)
const [type, settype] = useState(false)


// const CustWILog = !Tablet.IsTab ? "90%" : width >= 1200 ? "30%" : "60%";

const CustWILog = true ? "90%" : SIZES.width >= 1200 ? "30%" : "60%";

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

    <ImageBackground
      source={Bacimage}
      resizeMode="cover"
      style={[styles.image, { height: SIZES.height }]}
    >
      {error && <ToastMessages type={type} error={error} />}
      <View
        style={[
          styles.containerABS,
          { width: CustWILog, position: "absolute", top: "15%" },
        ]}
      >
        <Text style={styles.headerTitle}>
          Je me connecte à mon espace Restaurateur
        </Text>
          <FormLogin />
      </View>
    </ImageBackground>
  </View>
  )
}

export default AuthLayout
