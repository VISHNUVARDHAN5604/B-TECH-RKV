
import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const creators = [
  {
    name: 'Yagggim Vishnu Vardhan',
    email: 'vishnuvardhankumar8106@gmail.com',
    bio: 'React Native App Developer\nCSE UG Student at RGUKT RK Valley',
  },
  {
    name: 'Puneeth',
    email: 'PUNEETH@gmail.com',
    bio: 'APP GUIDE\nCSE UG Student at RGUKT RK Valley',
  },
];

const AllCreators = () => {
  return (
    <LinearGradient
      colors={['#ffffff', '#08b9b6ff']} // gradient background
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {creators.map((creator, index) => (
          <View key={index} style={styles.container}>
            <Text style={styles.name}>{creator.name}</Text>
            <Text style={styles.bio}>{creator.bio}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(`mailto:${creator.email}`)}
            >
              <Text style={styles.buttonText}>📧 Email</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default AllCreators;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
  },
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(57, 127, 171, 0.85)', // semi-transparent card
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
});
