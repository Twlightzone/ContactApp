import * as React from 'react';
import { StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function HomeScreen({ path }: { path: string }) {
  return (
    <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <LinearGradient
      colors={['#fa8142','#ff4088']}
      >
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Contacts
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            :)
        </Text>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  droidSafeArea : {
    marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0 
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
