import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Alert,
} from "react-native";
import {
  ThemeProvider,
  ListItem,
  Button,
} from "react-native-elements";

//definição dos temas
const ligthTheme = {
  colors: {
    primary: '#007aff',
    background: '#f5f5f5',
    textPrimary: '#333',
  }
};

const darkTheme = {
  colors: {
    primary: '#007aff',
    background: '#333',
    textPrimary: '#f5f5f5',
  }
};

const App = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);


  const theme = darkMode ? darkTheme : ligthTheme;
  
  const resetarCor = () => {
    Alert.alert("puf!", 'Cor resetada!');
  }

  if (notifications) {
    resetarCor();
  } else {
    Alert.alert("Notificações desativadas", "Você não receberá mais notificações.");
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={[styles.container, {
        backgroundColor: theme.colors.background
      }]}>
        <Text style={[styles.text, {
          color: theme.colors.textPrimary
        }]}>
          Configurações
        </Text>
        <Button title='Clique Aqui' onPress={resetarCor} buttonStyle={{
          backgroundColor: theme.colors.primary
        }} />

        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Notificações</ListItem.Title>
          </ListItem.Content>
          <Switch value={notifications}
            onValueChange={setNotifications} />
        </ListItem>

        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Modo Escuro</ListItem.Title>
          </ListItem.Content>
          <Switch value={darkMode}
            onValueChange={setDarkMode} />
        </ListItem>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default App;