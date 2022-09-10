import * as React from 'react';
import { StyleSheet } from 'react-native';
import Container from '../screens/Container';
import { Text, View } from './Themed';

export default function ScreenTwo({ path }: { path: string }) {
  return (
    <Container>
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim mi sit amet nisl fringilla fringilla non a nulla.{"\n"} Fusce erat dolor, finibus eget mattis sed, scelerisque sit amet diam. Donec sagittis orci est, semper porttitor mi elementum id.
        </Text>
      </View>
    </View>
  </Container>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    textAlign: 'center',
  },
});
