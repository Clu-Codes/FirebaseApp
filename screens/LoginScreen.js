import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={() => {}}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f3f4",
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 13,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 13,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  // onPress={() => {}}
});
