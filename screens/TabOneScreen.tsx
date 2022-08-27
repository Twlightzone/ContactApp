import * as React from 'react';
import HomeScreen from '../components/Contact';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{flex : 1, alignItems :'center'}}>
      <HomeScreen path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
