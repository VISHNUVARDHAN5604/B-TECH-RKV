import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['PS', 'DBMS', 'FLAT', 'DLD', 'DAA'];

  const unitLinks: Record<string, Record<string, string>> = {
    PS: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    DBMS: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    FLAT: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    DLD: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    DAA: {
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

              {subject === 'DAA' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = ALGORITHM
2 = DEVIDE AND CONCURE
3 = GREEDY METHOD
4 = DYNAMIC METHOD
5 = BACKTRACKING,BRANCH AND BOUND
6 = STRING MATCHING`}
                  </Text>
                </View>
              )}

              {subject === 'PS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = PROBABLITY AND THEOREMS IN PROBOBLITY
2 = PROBABLITY DISTRIBUTIONS
3 = MOVEMENT GENERATING FUNCTIONS
4 = ORDER STATISTICS AND CENTRAL LIMIT THEOREM
5 = SAMPLING THEORY
6 = LARGE SAMPLE TESTS`}
                  </Text>
                </View>
              )}

              {subject === 'DBMS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION TO DBMS
2 = BASICS OF RELATIONAL METHOD
3 = BASIC STRUCTURE OF SQL QUERIES
4 = FEATURES OF GOOD RELATIONAL DESIGN
5 = STORING DATA IN DISK AND FILES
6 = TRANSACTION CONCEPT`}
                  </Text>
                </View>
              )}

              {subject === 'FLAT' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION TO AUTOMATA
2 = FINATE AUTOMATA
3 = REGULAR LANGUAGES
4 = GRAMMARS
5 = PUSHDOWN AUTOMATA
6 = TURING MACHINE AND COMPUTABLLITY THEORY`}
                  </Text>
                </View>
              )}

              {subject === 'DLD' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = NUMBER SYSTEMS
2 = COMBINATIONAL CIRCUIT
3 = DECODERS,ENCODERS
4 = BISTABLE ELEMENTS
5 = FREQUNECY DIVISION AND COUNTING
6 = DISPLAY OF MOBILE NUMBERS`}
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
    borderRightColor: '#45e081ff',
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
