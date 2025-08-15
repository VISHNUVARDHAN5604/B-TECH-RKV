import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['CN', 'OS', 'SE'];

  const unitLinks: Record<string, Record<string, string>> = {
    CN: {
      'Unit 1': 'https://drive.google.com/file/d/1vMWGIgUNd5Vh-m0R-X08mBF899K5s4kJ/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1ojb6xQV7dRwyqUQz74Tr38oww81D4SiH/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1GzCfFND6_zAZEfgKcwMC5n8AdhELPSBS/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1HtuJcpemiXNljwOVTzFyAQo6P8s78zRT/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1YYlZ5EIaNt1i0HX830Z8jOEdMQwsqI1R/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1cvSoNlqeM-eP4dES9JqsTNMVwwiiZvZV/view?usp=drive_link',
    },
    OS: {
      'Unit 1': 'https://drive.google.com/file/d/164V5wkYbrwFm9WKYdfTcZzRfVm_sxgAk/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1hRka2gwt1XHO08II5cFZaZgNjC_Vsdzz/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1gz9JsfycoYxYQJ0DFNRbwBtuGyr2EJfu/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1EaTFEC8cF2Lhl8HMlbjlcFjdsuJc_mRE/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1fobam5PU0KCakgzBNStxX-pNMcenuVtE/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1u1ureH1Rm42dr7H-1yUMYIu8fvXjzrsS/view?usp=drive_link',
    },
    SE: {
      'Unit 1': 'https://drive.google.com/file/d/1gn9scOq8m0IeVPy4CXyEMWmrkxQZfM27/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1-btok0HpL_Ch2Fd8AL3WV6923CtWFBBE/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1AgWJ-Tm0VkIRjqw0lxOhz7OBHXcOg1Bd/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1fYkqWYBrksOOjaK3JRAksI1Qs6zXvg-w/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1c3yvTzGSqI5NnBONy25ZsV4CJiXNZOvs/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/16DYFvk5YhuB8Gu2ZXBv5scupf2iyxy4F/view?usp=drive_link',
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
            <View>
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

              {subject === 'CN' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION
2 = THE DATA LINK LAYER
3 = THE NETWORK LAYER
4 = THE TRANSPORT LAYER
5 = THE APPLICATION LAYER
6 = NETWORK SECURITY`}
                  </Text>
                </View>
              )}

              {subject === 'OS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`:-1 = INTRODUCTION
2 = PROCESS MANAGEMENT
3 = PROCESS SYNCHRONIZATION
4 = INTRODUCTION TO DEADLOCKS
5 = MEMORY MANAGEMENT
6 = FILE SYSTEM AND SECONDARY STORAGE MANAGEMENT`}
                  </Text>
                </View>
              )}

              {subject === 'SE' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION
2 = SOFTWARE PROJECT MANAGEMENT
3 = SOFTWARE DESIGN
4 = CODING
5 = TESTING
6 = SOFTWARE RELIABILITY AND QUALITY MANAGEMENT`}
                  </Text>
                </View>
              )}
            </View>
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
    borderRightColor: '#31d871ff',
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
