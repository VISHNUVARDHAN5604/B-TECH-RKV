import { Stack } from 'expo-router';

export default function E1cseLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="E1" 
        options={{ 
          headerShown: true,
          title: 'Choose Semester',
          headerStyle: {
            backgroundColor: '#597d7dff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }} 
      />
      <Stack.Screen 
        name="subjects/sem_1" 
        options={{ 
          headerShown: true,
          title: 'Subjects',
          headerStyle: {
            backgroundColor: '#597d7dff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <Stack.Screen 
        name="subjects/sem_2" 
        options={{ 
          headerShown: true,
          title: 'Subjects',
          headerStyle: {
            backgroundColor: '#597d7dff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
    </Stack>
  );
}
