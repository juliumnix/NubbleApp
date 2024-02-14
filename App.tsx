import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">asfgsafaasfas</Text>
        <Text preset="headingLarge">asfgsafaasfas</Text>
        <Button title="Teste" disabled />
        <Button title="Teste" preset="outline" disabled />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
