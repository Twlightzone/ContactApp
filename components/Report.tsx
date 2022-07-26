import * as React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import Container from '../screens/Container';

import { Text, View } from './Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenTwo({ path }: { path: string }) {
  return (
// <Container> 
    <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
        
        </Text>
      </View>
    </View>
// </Container>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  droidSafeArea : {
    marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  getStartedText: {
    fontSize: 17,
    textAlign: 'center',
  },
});
