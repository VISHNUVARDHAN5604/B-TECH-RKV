import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';

const creators = [
  {
    name: 'Yagggim Vishnu Vardhan',
    email: 'vishnuvardhankumar8106@gmail.com',
    bio: 'React Native App Developer\nCSE UG Student at RGUKT RK Valley',
    linkedin: 'https://www.linkedin.com/in/vishnu-vardhan-9824b6324',
  },
  {
    name: 'PUNEETH',
    email: 'PUNEETH@gmail.com',
    bio: 'APP ADVICER\nCSE UG Student at RGUKT RK Valley',
    linkedin: 'https://www.linkedin.com/in/puneeth0121?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', // replace with real if available
  },
];

const AllCreators = () => {
  return (
    <ScrollView style={styles.back}>
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

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#0077B5' }]}
            onPress={() => Linking.openURL(creator.linkedin)}
          >
            <Text style={styles.buttonText}>🌐 LinkedIn</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default AllCreators;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'cyan',
    borderRadius: 16,
    margin: 20,
    elevation: 5,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
