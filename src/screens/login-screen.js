import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    if (!username || !password) {
      Alert.alert("Preencha todos os dados.");
      return;
    }

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then(() => {
        navigation.navigate("Produtos");
      })
      .catch(() => {
        Alert.alert("Usuário ou senha estão errados!");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fake Store App</Text>
      <TextInput
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E1E5E9",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#2D3748",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  container: {
    gap: 20,
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F7FAFC",
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#4299E1",
    shadowColor: "#4299E1",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2D3748",
    textAlign: "center",
    marginBottom: 40,
    letterSpacing: -0.5,
    textShadowColor: "#E2E8F0",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },
});
