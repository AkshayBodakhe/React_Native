import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Intro = () => {
    const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
        // navigation.navigate("Login");
        checkLogin();
    }, 2000);
  }, []);
  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    if(email != null && password != null){
        navigation.navigate("Contacts");
    }else{
        navigation.navigate('Login');
    }
    console.log(email,password)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyContact App</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    text : {
        color : 'red',
        fontSize : 20,
        fontWeight : 'bold'

    }
});
