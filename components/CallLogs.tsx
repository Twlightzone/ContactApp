import * as React from 'react';
import { StyleSheet } from 'react-native';
import Container from '../screens/Container';
import { Text, View } from './Themed';

export default function ScreenTwo({ path }: { path: string }) {
  return (
    <Container>
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Call logs
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            :|
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
    lineHeight: 24,
    textAlign: 'center',
  },
});
