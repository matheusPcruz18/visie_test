import { Home } from '../screens/Home';
import { Person } from '../screens/Person';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

export default AppRoutes = () => (
    <AppStack.Navigator
        screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Person" component={Person} />
    </AppStack.Navigator>
);