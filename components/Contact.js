import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Contact = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const contactsS = await AsyncStorage.getItem("CONTACTS");
    setContactList(JSON.parse(contactsS));
    console.log(contactsS)
  };

  const deleteContact = async (index) => {
    const tempData = contactList;
    const selectedData = tempData.filter((item, ind) => {
      return ind != index;
    });
    setContactList(selectedData);
    await AsyncStorage.setItem("CONTACTS", JSON.stringify(selectedData));
  };

  const logout = async () => {
    await AsyncStorage.setItem("EMAIL", "");
    await AsyncStorage.setItem("PASSWORD", "");
    navigation.navigate("Login");
    console.log("Logged out!")
  }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={contactList}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.list}>
                <Text>{index + 1}</Text>
                <Text> {item.name.toUpperCase()}</Text>
                <Text> {item.mobile}</Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={() => deleteContact(index)}>
                    <Text style={{ color: "white" }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Add Contact")}
        >
          <Text style={{ color: "white" }}>Add new Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { bottom: 20, left: 20, width: 100, backgroundColor: "darkred" },
          ]}
          onPress={() => logout()}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };


export default Contact;

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    elevation: 5,
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 20,
    backgroundColor: "lightblue",
  },
  btnContainer: {
    width: 70,
    height: 30,
    backgroundColor: "darkred",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
