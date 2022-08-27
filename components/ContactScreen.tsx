import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ContactScreen({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}>
            Armaan : {"\n"}
            Discord id :  Twlight_zone#7037, {"\n"}
            Mail :  twlightzonehelp@gmail.com, {"\n"}
            WhatsApp :  If u have been given this app u might already have my number {"\n"}
            <TouchableOpacity onPress={handleHelpPressForArmaan}><MonoText>
            Github : https://github.com/Twlightzone {"\n"}
            </MonoText></TouchableOpacity>
            {"\n"}
            {"\n"}
        </Text>
      </View>
    </View>
  );
}

function handleHelpPressForArmaan() {
    WebBrowser.openBrowserAsync(
      'https://github.com/Twlightzone'
    );
  }

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
