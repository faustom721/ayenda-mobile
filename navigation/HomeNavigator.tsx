import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

import Today from '../screens/Today';
import Week from '../screens/Week';

const HomeTopTabStack = createMaterialTopTabNavigator();

const HomeTopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="Hoy" />
    <Tab title="Semana" />
  </TabBar>
);

const HomeStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeTopTabStack.Navigator
        tabBar={(props) => <HomeTopTabBar {...props} />}
      >
        <HomeTopTabStack.Screen name="Today" component={Today} />
        <HomeTopTabStack.Screen name="Week" component={Week} />
      </HomeTopTabStack.Navigator>
    </SafeAreaView>
  );
};

const Navigator = () => <HomeStack />;

export default Navigator;
