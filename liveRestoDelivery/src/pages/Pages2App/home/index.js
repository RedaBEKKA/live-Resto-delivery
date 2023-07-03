import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import HeaderHome from "../../../components/Heders/HeaderHome";
import { COLORS } from "../../../theme";
import ListMessages from "./components/ListMessages";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { UseHome } from "./hooks/useHome";
import Loader from "../../../components/Loader";
import AppLayout from "../../../components/Layouts/AppLayout";

const Home = ({ navigation }) => {
  const { onGetRoutes } = UseHome();

  useEffect(() => {
    onGetRoutes();
  }, []);

  const { isLoading } = useSelector((state) => state.routes);

  return (
    <AppLayout navigation={navigation} loading={isLoading}>
      <ListMessages navigation={navigation} />
    </AppLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});

