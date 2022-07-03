import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          // value={}
          // onChangeText={ text => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          // value={}
          // onChangeText={ text => {}}
        />
      </View>
      <View>
        <TouchableOpacity
          // onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={[styles.buttonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={[styles.buttonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {},
  button: {},
  buttonOutline: {},
  buttonText: {},
  // onPress={() => {}}
});
