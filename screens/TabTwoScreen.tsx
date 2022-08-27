import * as React from 'react';
import ScreenTwo from '../components/CallLogs';

import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1,alignItems: 'center',}}>
      <ScreenTwo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}
