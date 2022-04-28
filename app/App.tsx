import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications'
import theme from './src/theme';

import { PeopleProvider } from './src/hooks/people';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ToastProvider>
          <StatusBar style='light' translucent backgroundColor='transparent' />
          <PeopleProvider>
            <Routes />
          </PeopleProvider>
        </ToastProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
