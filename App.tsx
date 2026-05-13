import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Switch,
} from "react-native";
import {
  ThemeProvider,
  ListItem,
  Button,
  Slider,
} from "react-native-elements";

//definição dos temas
const themes = {
  light: {
    colors: {
      primary: '#007aff',
      background: '#fff',
      textPrimary: '#333',
      buttonBg: '#007aff',
    },
  },

  dark: {
    colors: {
      primary: '#222',
      background: '#1c1c1c',
      textPrimary: '#ffffff',
      buttonBg: '#555',
    },
  }
};

const AppTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [isOn, setIsOn] = useState(false);

  const toggleDarkMode = (value) => {
    setDarkMode(value);
    setCurrentTheme(value ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              currentTheme.colors.background
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color:
                currentTheme.colors.textPrimary, fontSize
            },
          ]}>
          Configurações
        </Text>

        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: currentTheme.colors.background
          }}>
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: currentTheme.colors.textPrimary, fontSize
              }}
            >Notificações
            </ListItem.Title>
          </ListItem.Content>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </ListItem>

        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: currentTheme.colors.background
          }}>
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: currentTheme.colors.textPrimary, fontSize
              }}>
              Modo Escuro
            </ListItem.Title>
          </ListItem.Content>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </ListItem>

        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: currentTheme.colors.background
          }}>
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: currentTheme.colors.textPrimary, fontSize
              }}>
              Tamanho da Fonte ({Math.round(fontSize)})
            </ListItem.Title>
          </ListItem.Content>
          <Slider
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
            minimumValue={14}
            maximumValue={30}
            step={1}
            thumbStyle={{
              backgroundColor: currentTheme.colors.primary
            }}
            trackStyle={{
              height: 5,
            }}
            style={{ width: 150 }}
          />
        </ListItem>

        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: currentTheme.colors.background
          }}>
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: currentTheme.colors.textPrimary, fontSize
              }}>
              Modo ON/OFF
            </ListItem.Title>
          </ListItem.Content>
          <Switch value={isOn} onValueChange={(value) => setIsOn(value)} />
        </ListItem>

        <Text
        style={[
          styles.exampleText,
          {color: currentTheme.colors.textPrimary, fontSize}
        ]}>
          {isOn ? "O modo está ON" : "O modo está OFF"}
        </Text>

        <Button
          title="Salvar Configurações"
          onPress={() => alert('Configurações salvas!')}
          buttonStyle={[
            styles.button,
            { backgroundColor: currentTheme.colors.buttonBg }
          ]}
        />
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
  title: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  exampleText: {
    marginTop: 10,
    textAlign: "center",
  },
  button:{
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
  }
});

export default AppTheme;