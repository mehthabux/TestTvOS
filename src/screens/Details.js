import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TVTextScrollView,
} from 'react-native';

export default function Details({route}) {
  const {detail} = route.params;
  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Details</Text>
      <Text style={styles.heading}>{detail}</Text>
      <TouchableOpacity
        hasTVPreferredFocus={true}
        style={{height: 200, width: 200, backgroundColor: '#000'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginTop: 50,
  },
});
