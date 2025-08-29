import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['CNS', 'CDC', 'ST'];

  const unitLinks: Record<string, Record<string, string>> = {
    CNS: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    CDC: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    ST: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
  };

  const handleUnitPress = (subject: string, unit: string) => {
    const link = unitLinks[subject]?.[unit];
    if (link) {
      Linking.openURL(link);
    } else {
      Alert.alert('Notice', `${unit} link for ${subject} is not available`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {subjects.map((subject, idx) => (
        <View key={idx} style={styles.subjectCard}>
          <TouchableOpacity style={styles.subjectHeader} onPress={() => toggleUnits(subject)}>
            <MaterialIcons name="menu-book" size={24} color="#0d2ff0" />
            <Text style={styles.subjectTitle}>{subject}</Text>
            <MaterialIcons
              name={visibleUnits === subject ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={24}
              color="#0d2ff0"
            />
          </TouchableOpacity>

          {visibleUnits === subject && (
            <>
              <View style={styles.unitList}>
                {['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'].map((unit, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.unitButton}
                    onPress={() => handleUnitPress(subject, unit)}
                  >
                    <MaterialIcons name="description" size={18} color="#fff" />
                    <Text style={styles.unitText}>{unit}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {subject === 'CNS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>UNIT'S LIST:-</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION TO SECURITY ATTACKS
2 = CONFIENDNTALITY USING ENCRIPTION
3 = PRINCIPLES OF PUBLIC KEY CRYPTOSYSTEMS
4 = MD5 MESSAGE DIGEST ALGORITHM
5 = IP SECURITY
6 = WEB SECURITY`}
                  </Text>
                </View>
              )}

              {subject === 'CDC' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>UNIT'S LIST:-</Text>
                  <Text style={styles.noteText}>
                    {`1 = NUMBER SYSTEM
2 = ARITHMETIC,ALGEBRA
3 = GEOMETRY
4 = LOGICAL& ANALYLYTICAL REASONING
5 = DATA INTERPRATION
6 = VERBAL ABILITY`}
                  </Text>
                </View>
              )}

              {subject === 'ST' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>UNIT'S LIST:-</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION TO SOFTWARE TESTING
2 = INTRODUCTION TO SOFTWARE DEFECTS
3 =TESTCASE DESIGN
4 = LEVELS OF TESTING
5 = TEST MANAGEMENT
6 = TEST AUTOMATION`}
                  </Text>
                </View>
              )}
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  subjectCard: {
    backgroundColor: '#7dbcf0ff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  subjectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#d0e1ff',
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d2ff0',
  },
  unitList: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  unitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0024f0ff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
  },
  unitText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  noteContainer: {
    backgroundColor: '#FFF8E7',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#FFA500',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  note: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 4,
  },
  noteText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 20,
  },
});

export default Sem1;
