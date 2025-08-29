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
      'Unit 1': 'https://drive.google.com/file/d/1fbKuztDNrlrmsAllMShAgvPtcdP3reRx/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1u_qk_7VhSeqXFjn7pFE_x8IVBSZwuSaV/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1pG7M7PXL0dlao-u_cgBtG7JQgdF3KoK3/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1-ieervlptH75jSz9PJcmwCkWj7mnm9CF/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1ysZ4ct5LWgzg5AulqUAwwJkDCbGAG_w1/view?usp=drive_link',
      'Unit 6': 'https://docs.google.com/presentation/d/13sPJlN-PIw7c02WtQXwyBhh69LCQVFY4/edit?usp=drive_link&ouid=100312816534997635995&rtpof=true&sd=true',
    },
    WT: {
      'Unit 1': 'https://drive.google.com/file/d/1moJ6iyV319YEVGO4-Kwi6JEbZvGBDtRi/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1VVF-TBOGBILkyBmUYVoo24DsEtmimuOq/view?usp=drive_link',
      'Unit 3': '',
      'Unit 4': '',
      'Unit 5': 'https://drive.google.com/file/d/1fpnhUccGdlHQm48Oalzxrj6xwBDBOBzn/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1uSoE844ecYH64JOFRlbH-5cp1H1Scp08/view?usp=drive_link',
    },
    CD: {
      'Unit 1': 'https://drive.google.com/file/d/1FMHYYpeFqCVBuC3sYs9OHvmytJ4zPcdS/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1n8td-caTxHZzbNKmdHpRB3ClD1I6dIP7/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/17SrZ90OLUV5Wvi0eXrCkad0JSih0gKg3/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/16pKSUjEPClWqg8bzckzwKrhGbSWyBZAg/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1PZtDIVPEAoMI6pIussxAyN27U3bs5s_t/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1b3OyguSf6rHF490BElGQvHXOvCVlialQ/view?usp=drive_link',
    },
    COA: {
      'Unit 1': 'https://drive.google.com/file/d/1s2sqDQaZryHCuTCG3Hwk4Fc2KUuilNL-/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1s2sqDQaZryHCuTCG3Hwk4Fc2KUuilNL-/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1s2sqDQaZryHCuTCG3Hwk4Fc2KUuilNL-/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1s2sqDQaZryHCuTCG3Hwk4Fc2KUuilNL-/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/14xzd45c06ASRZodBxWD0HqAwvuLNiraH/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/14xzd45c06ASRZodBxWD0HqAwvuLNiraH/view?usp=drive_link',
    },
    IOR: {
     'Unit 1': 'https://drive.google.com/file/d/1gyKKhsZfnMLQcKApstltyGfMhoIoNUju/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1acOeE68ptT9XOf-hz5RFqeG8DIPQFTCS/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/10gAn9SU_mSGOrWbQmzltEgQht5oPcLIj/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1ZqPM15chXMVd7sNpIQgaxkxeC9_GfKvV/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1pYamhFU0zrzadWVnaZ55512h5y81QLtZ/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1UYNM10c1BWq85XErgpilpEKjncp5P1zI/view?usp=drive_link',
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
            <MaterialIcons name="menu-book" size={24} color="#120773ff" />
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
                              <Text style={styles.note}>UNIT'S LIST:-</Text>
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
                              <Text style={styles.note}>UNIT'S LIST:-</Text>
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
                              <Text style={styles.note}>UNIT'S LIST:-</Text>
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
                              <Text style={styles.note}>UNIT'S LIST:-</Text>
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
                              <Text style={styles.note}>UNIT'S LIST:-</Text>
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
