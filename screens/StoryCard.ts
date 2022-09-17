import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Fonts from 'expo-font'

let CardComponent=({ path } : { path:string })=>{
   return (
    // <View></View>
    1+1
 )
}

const StoreThings = (props:any) => {
    let state = {
        fontsLoaded: false,
        light_theme: true,
        story_id : props.story.key,
        story_data : props.story.value,
        is_liked : false,
        likes : props.story.value.likes
      };

    return state
}

const styles = StyleSheet.create({

});
  
export default CardComponent;