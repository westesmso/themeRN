import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  ThemeProvider,
  Button
} from "react-native-elements";

//definição dos temas
const themes = {
  blue: { colors: { primary: "#007aff", background: "#e3f2fd", textPrimary: '#333' } },
  orange: { colors: { primary: "#ff5722", background: "#fff3e0", textPrimary: '#444' } },
  green: { colors: { primary: "#4caf50", background: "#e8f5e9", textPrimary: '#222' } },
  red: { colors: { primary: "#f44336", background: "#fdedec", textPrimary: '#222' } },
  purple: { colors: { primary: "#9c27b0", background: "#f3e5f5", textPrimary: '#222' } },
  teal: { colors: { primary: "#009688", background: "#e0f2f1", textPrimary: '#222' } },
  yellow: { colors: { primary: "#ffeb3b", background: "#fffde7", textPrimary: '#222' } },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.blue);

  const resetarCor = () =>{
    setCurrentTheme(themes.blue);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <View style={[styles.container, {
        backgroundColor: currentTheme.colors.background
      }]}>
        <Text style={[styles.text, {
          color: currentTheme.colors.textPrimary
        }]}>
          Selecione um tema:
        </Text>
        <Button title='Clique Aqui' onPress={resetarCor} buttonStyle={{
          backgroundColor: currentTheme.colors.primary
        }} />

        <View style={styles.colorPicker}>
          {Object.keys(themes).map((themeKey) => (
            <TouchableOpacity
              key={themeKey}
              style={[styles.colorBox, {
                backgroundColor: themes[themeKey].colors.primary
              }]}
              onPress={() => setCurrentTheme(themes[themeKey])}
            />
          ))}
        </View>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  colorPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 8,
  },
});

export default App;