import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import StatusBarComponent from './src/components/StatusBar';
import Router from './src/navigation/root-switch';

export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <PaperProvider>
        <NavigationContainer >
          <StatusBarComponent/>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
