import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['DSP', 'WT', 'CD','COA','IOR'];

  const unitLinks: Record<string, Record<string, string>> = {
    DSP: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    WT: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    CD: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    COA: {
      'Unit 1': '',
      'Unit 2': '',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': '',
      'Unit 6': '',
    },
    IOR: {
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
            <MaterialIcons name="menu-book" size={24} color="#f00d0dff" />
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
            {subject === 'DSP' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                                {`1 = PYTHON BASICS FOR DATA SCIENCE
2 = WORKONG WITH DATA IN PYTHON
3 = DATA PROCESSING
4 = DATA ANALYSIS
5 = DATA VISUALISATION
6 = MACHINE LEARNING USING USING PYTHON`}
                              </Text>
                            </View>
                          )}
              {subject === 'WT' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                                {`1 = INTRODUCTION TO WEB WORLD
2 = SERVER PROGRAMMING
3 = DATABASE CONNECTIVITY 
4 = FROUNT-END WEB UI FRAMEWORKS AND TOOLS
5 = BOOTSTRAP
6 = NODE JS`}
                              </Text>
                            </View>
                          )}
                {subject === 'CD' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                                {`1 = INTRODUCTION TO COMPILER
2 = SYNTAX ANALYSIS-I
3 = SYNTAX ANALYSIS-II
4 = SEMANTIC ANALYSIS
5 = INTERMEDIATE CODE GENERATION ANS OPTIMISATION
6 = CODE GENERATION`}
                              </Text>
                            </View>
                          )}
            {subject === 'COA' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                                {`1 = BASIC FUNCTION BLOCKS OF COMPUTER
2 = ALU
3 = CPU CONTROL UNIT DESIGN
4 = MEMORY SYSTEM DESIGN
5 = INPUT OUTPUT SUBSYSTEMS
6 = PARLLEL PROCESSING`}
                              </Text>
                            </View>
                          )}
            {subject === 'IOR' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                                {`1 = DECISION MAKING
2 = LINEAR PROGRAMMING PROBLEMS
3 = ARTIFICIAL VARIABLES
4 = TRANSPORTATION PROBLEM
5 = ELEMENTS OF QUEUING MODELS
6 = INTRODUCTION OF COSTS`}
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
