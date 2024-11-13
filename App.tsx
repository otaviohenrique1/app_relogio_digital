import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { HomePage } from './src/HomePage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomePage />
    </PaperProvider>
  );
}
