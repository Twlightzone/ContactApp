import * as React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({children}:any) => {
    return <LinearGradient colors={['#fa8142','#ff4088']} style={styles.linearGradient}><SafeAreaView>{children}</SafeAreaView></LinearGradient>
}

const styles = StyleSheet.create({linearGradient:{alignItems: 'center',justifyContent: 'center',borderRadius: 5,height: 200,width: 350,}})

export default Container;
