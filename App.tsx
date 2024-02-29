import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Icon name="camera" color="carrotSecondary" size={50} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
