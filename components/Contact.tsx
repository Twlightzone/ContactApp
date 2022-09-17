import React, {Component} from 'react';
import { StyleSheet, Platform, StatusBar, FlatList } from 'react-native';
import Container from '../screens/Container';

import { firebaseConfig } from '../config'
import firebase from 'firebase';

import { Text, View } from './Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ScreenTwo extends Component {

  constructor(props : any){
    super(props)
    this.state = {
      contactID : "",
      contactNumber : "",
      allContacts : [],
    }
  }

  getContactDetails = () => {

    firebaseConfig.collection("Contacts")
                  .limit(10)
                  .get()
                  .then(snapshot => {
                    snapshot.docs.map(doc => {
                      this.setState({
                        allContacts : [...this.state.allContacts,doc.data()]
                      })
                    })
                  })
  };

  render(){
  return (
//  <Container>
    <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.container}>
      <FlatList data={this.state.allContacts} />
      </View>
    </View>
//  </Container> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
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
