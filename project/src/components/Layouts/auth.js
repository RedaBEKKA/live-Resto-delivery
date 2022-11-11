import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';

const AuthLayout = () => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

    <ImageBackground
      source={Bacimage}
      resizeMode="cover"
      style={[styles.image, { height: height }]}
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
