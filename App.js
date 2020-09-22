import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text Input</Text>
      <TextInput
        multiline
        value={inputText}
        onChangeText={(txt) => setInputText(txt)}
        placeholder="Your text here"
        style={styles.inputStyle}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  heading: {
    fontSize: 30,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 20,
    minHeight: 80,
    marginTop: 30,
    fontSize: 25,
  },
});
