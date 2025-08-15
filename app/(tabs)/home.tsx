
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.background}>
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
          <View>
        <TouchableOpacity onPress={() => router.push('/Creator')}>
        <Text style={styles.linkText}>👉APP DEVELOPERS👈</Text>
      </TouchableOpacity>
      </View>
        </View>
        
      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'lightblue',
    opacity: 0.9,
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // opacity 0.6
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 69, 69, 0.4)',
  },
  
  boxText: {
    color: '#222', // dark color
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic', // italic text
  },
  linkText: {
    fontSize: 20,
    color: 'rgba(218, 17, 104, 0.84)',
    fontWeight: 'bold',
  },
  
});
