import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main screen — index.tsx is the default landing page */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen
          name="home"
          options={{
            headerShown: true,
            title: 'Home',
            headerStyle: { backgroundColor: '#597d7dff' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          }}
        />

        <Stack.Screen
          name="Creator"
          options={{
            headerShown: true,
            title: 'Developers',
            headerStyle: { backgroundColor: '#75a0a0ff' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          }}
        />

        <Stack.Screen name="E1cse" options={{ headerShown: false }} />
        <Stack.Screen name="E2cse" options={{ headerShown: false }} />
        <Stack.Screen name="E3cse" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
