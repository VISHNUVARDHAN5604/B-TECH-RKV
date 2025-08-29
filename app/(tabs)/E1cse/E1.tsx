import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const LayoutScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#ffffffff', '#04a7f9ff']} // same gradient style
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.selectionBox}>
          <Text style={styles.heading}>Choose E1 Semester</Text>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(tabs)/E1cse/subjects/sem_1')}
          >
            <Text style={styles.cardText}>SEM - 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(tabs)/E1cse/subjects/sem_2')}
          >
            <Text style={styles.cardText}>SEM - 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Outer Box
  selectionBox: {
    backgroundColor: '#69b7e3',
    borderRadius: 16,
    padding: 18,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 14,
    textAlign: 'center',
  },

  // Cards inside box
  card: {
    backgroundColor: '#f0f9ff',
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#93c5fd',
    width: '90%',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    letterSpacing: 0.5,
  },
});

export default LayoutScreen;
