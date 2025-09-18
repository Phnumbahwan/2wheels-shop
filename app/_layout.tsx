import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>


      <Stack>
        <Stack.Screen name="brands" options={{ title: 'Brands', headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" style="dark" />

    </ThemeProvider>
  );
}
