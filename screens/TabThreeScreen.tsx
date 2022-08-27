import * as React from 'react';
import HomeScreen from '../components/Report';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <View style={{flex: 1,alignItems: 'center',}}>
      <HomeScreen path="/screens/TabThreeScreen.tsx" />
    </View>
  );
}
