import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { usePage } from "../../contexts/PageContext";

import { styles } from "./styles";

export function Login() {
  const { setPage, setUsername } = usePage();

  const [login, setLogin] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const resetInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCreateAccount = async () => {
    if (name === "") return Alert.alert("Erro", "Nome inválido!");

    if (!validateEmail(email))
      return Alert.alert("Erro", "Digite um e-mail válido.");

    if (password.length < 6)
      return Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");

    if (password !== confirmPassword)
      return Alert.alert("Erro", "Senha incompatível.");

    const response = await fetch(
      `http://API:PORT/createAccount?name=${name}&email=${email}&password=${password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resultText = await response.text();
    if (response.ok) {
      const data = JSON.parse(resultText);
      return Alert.alert(data.title, data.message, [
        {
          text: "Ok",
          onPress: () => {
            if (data.title === "Sucesso") {
              resetInput();
              setLogin(true);
            }
          },
        },
      ]);
    }
    return Alert.alert("Erro", "Tente novamente mais tarde.");
  };

  const handleLoginAccount = async () => {
    if (email === "" || password === "")
      return Alert.alert("Erro", "Senha ou email inválido.");

    const response = await fetch(
      `http://API:PORT/loginToAccount?email=${email}&password=${password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resultText = await response.text();
    if (response.ok) {
      const data = JSON.parse(resultText);
      return Alert.alert(data.title, data.message, [
        {
          text: "Ok",
          onPress: () => {
            if (data.title === "Sucesso") {
              resetInput();
              setPage("Events");
              setUsername(data.username);
            }
          },
        },
      ]);
    }
    return Alert.alert("Erro", "Tente novamente mais tarde.");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 250, height: 250 }}
        source={require("../../../assets/logo.png")}
      />
      <View style={styles.inputWrapper}>
        {!login && (
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            keyboardType="default"
            value={name}
            onChangeText={setName}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {!login && (
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
              }}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={login ? handleLoginAccount : handleCreateAccount}
        >
          <Text style={styles.buttonText}>
            {login ? "Entrar" : "Criar Conta"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setLogin(!login);
          resetInput();
        }}
      >
        <Text style={{ color: "cyan", fontFamily: "Urbanist_Regular" }}>
          {login ? "Você não possui uma conta?" : "Você já possui uma conta?"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
