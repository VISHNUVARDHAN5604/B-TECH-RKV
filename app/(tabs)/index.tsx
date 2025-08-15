import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#add8e6', '#ffb6c1']} // light blue & pink
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.mybox}>
          <Text style={styles.heading}>Choose Your CSE Year</Text>

          <TouchableOpacity
            style={styles.box}
            onPress={() => router.push('/(tabs)/E1cse/E1')}
          >
            <Text style={styles.boxText}>E1 CSE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => router.push('/(tabs)/E2cse/E2')}
          >
            <Text style={styles.boxText}>E2 CSE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => router.push('/(tabs)/E3cse/E3')}
          >
            <Text style={styles.boxText}>E3 CSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mybox: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#009',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(13, 148, 135, 0.4)',
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },

  box: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 69, 69, 0.4)',
  },

  boxText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
