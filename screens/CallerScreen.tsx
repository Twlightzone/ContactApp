import * as React from 'react';
import CallPeople from '../components/CallPeople';

import { View } from '../components/Themed';

export default function CallerScreen() {
  return (
    <View style={{flex: 1,alignItems: 'center',}}>
      <CallPeople path="/screens/CallerScreen.tsx" />
    </View>
  );
}
