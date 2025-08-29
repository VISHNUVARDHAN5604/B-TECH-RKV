import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#e0f2fe', '#3d718fff']}style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>RGUKT</Text>
        </View>
        <Text style={styles.title}>Computer Science & Engineering</Text>


        <View style={styles.selectionBox}>
          <Text style={styles.boxTitle}>choose your CSE year </Text>

          <TouchableOpacity
            style={styles.card}onPress={() => router.push('/(tabs)/E1cse/E1')}>
            <Text style={styles.cardText}>E1 CSE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}onPress={() => router.push('/(tabs)/E2cse/E2')}>
              <Text style={styles.cardText}>E2 CSE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(tabs)/E3cse/E3')}>
            <Text style={styles.cardText}>E3 CSE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => router.push('/Creator')}>
          <Text style={styles.linkText}>👉 APP DEVELOPERS 👈</Text>
        </TouchableOpacity>

        {/* Note Section */}
        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>NOTE</Text>
          <Text style={styles.noteText}>
          In some subjects, when you open another unit,the same previous unit PDF appears,which means that the unit PDF is also included in that PDF.
          </Text>
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
    paddingHorizontal: 20,
  },

  // Circle Logo
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1e3a8a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  circleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },

  // Title & Subtitle
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 6,
  },

  
  selectionBox: {
    backgroundColor: '#69b7e3ff',
    borderRadius: 14,
    padding: 16,
    width: '95%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
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
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    letterSpacing: 0.5,
  },

  // Developer Link
  linkText: {
    fontSize: 16,
    color: '#dec319ff',
    fontWeight: 'bold',
    marginVertical: 12,
    textDecorationLine: 'underline',
  },

  // Note Box
  noteBox: {
    backgroundColor: '#fff7ed',
    borderLeftWidth: 5,
    borderLeftColor: '#f59e0b',
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    width: '95%',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 6,
  },
  noteText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});
