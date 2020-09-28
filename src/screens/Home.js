import {useIsFocused} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TVMenuControl,
} from 'react-native';

const data = {
  One: [1, 2, 3, 4, 5],
  Two: [1, 2, 3, 4, 5],
  Three: [1, 2, 3, 4, 5],
  Four: [1, 2, 3, 4, 5],
};

const Home = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const focus = useIsFocused();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text Input</Text>
      <TextInput
        // multiline
        value={inputText}
        // tvParallaxProperties={{enabled: false}}
        placeholderTextColor="#fff"
        tvParallaxMagnification={0}
        onChangeText={(txt) => setInputText(txt)}
        placeholder="Your text here"
        style={styles.inputStyle}
      />
      <FlatList
        t
        data={Object.keys(data)}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <FlatList
            style={{marginTop: 50}}
            data={data[item]}
            scrollEnabled={focus}
            horizontal
            keyExtractor={(newItem) => newItem.toString()}
            renderItem={({item: newItem}) => (
              <TouchableOpacity
                isTVSelectable={focus}
                accessible={focus}
                onPress={() => {
                  TVMenuControl.enableTVMenuKey();
                  navigation.navigate('Details', {
                    detail: item + newItem,
                  });
                }}
                style={{height: 200, width: 200, backgroundColor: '#000'}}
              />
            )}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
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
    color: 'red',
  },
});
