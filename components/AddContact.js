import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

let contacts = [];

const AddContact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigation = useNavigation();

  const saveContact = async () => {
    let tempContact = [];
    contacts = [];  
    tempContact = JSON.parse(await AsyncStorage.getItem('CONTACTS'))
    
    tempContact.map(item => {
        contacts.push(item);
    })
    contacts.push({name : name , mobile : mobile})
    console.log(contacts)

    await AsyncStorage.setItem('CONTACTS',JSON.stringify(contacts));
    navigation.goBack();

  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.text}>AddContact</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter Mobile"
        style={styles.input}
        value={mobile}
        keyboardType="number-pad"
        onChangeText={(text) => setMobile(text)}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={() => { saveContact() }}>
        <Text style={{ color: "#fff" }}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 100,
    fontWeight: "600",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 0.2,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 10,
    paddingLeft: 20,
  },
  loginBtn: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
