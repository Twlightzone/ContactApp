import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfoForHelpScreen({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>

        <Text
          style={styles.getStartedText}
          light="rgba(255,255,255,0.8)">
            Armaan : {"\n"}
            Discord id :  Twlight_zone#7037, {"\n"}
            Mail :  twlightzonehelp@gmail.com, {"\n"}
            WhatsApp :  If u have been given this app u might already have my number {"\n"}
            <TouchableOpacity onPress={handleHelpPressForArmaan}>
            Github : https://github.com/Twlightzone {"\n"}
            </TouchableOpacity>
            {"\n"}
            {"\n"}
        </Text>
        <Text
         style={styles.getStartedText}
         light="rgba(255,255,255,0.8)">
            Arsh : {"\n"}
            Discord id :  Arsh_DEV#7525, {"\n"}
            Mail :  //add it arsh, {"\n"}
            WhatsApp :  //add this too, {"\n"}
            <TouchableOpacity onPress={handleHelpPressForArsh}>
            Github : https://github.com/Aradhya-Shaswat {"\n"}
            </TouchableOpacity> 
            {"\n"}
            {"\n"}
            Everyone who is added later plz add ur contact things here too :)
        </Text>
      </View>
    </View>
  );
}

function handleHelpPressForArsh() {
  WebBrowser.openBrowserAsync(
    'https://github.com/Aradhya-Shaswat'
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
