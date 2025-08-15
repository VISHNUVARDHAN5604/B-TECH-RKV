import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  LayoutAnimation,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['DM', 'OOPS', 'EP', 'DS', 'MEFA'];

  const unitLinks: Record<string, Record<string, string>> = {
    DM: {
      'Unit 1': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/14_ffJPdL8aPDH0r4GMpUZLL7XEaAdjRG/view?usp=drive_link',
    },
    OOPS: {
      'Unit 1': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1uvP5xsle63EwVf5tN2jjAanKGGWaiEec/view?usp=drive_link',
    },
    EP: {
      'Unit 1': 'https://drive.google.com/file/d/13LD5ZkSmSAxUcSiLf1dLnreZFYGZfyoO/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/13MzLQIET2meaRSB1HDUPc4WPXHKZLStm/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/13P-A4KFmGZMAcReyv01XsOEYJgUSlHQV/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/13PpUI7amwVYRBem6196IuF5bXG7NLjpz/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/13KE75IqnFwh1eBp5Lng6NO-R0OVb7tc8/view?usp=drive_link',
      'Unit 6': '',
    },
    DS: {
      'Unit 1': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
      'Unit 2': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
      'Unit 3': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
      'Unit 4': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
      'Unit 5': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
      'Unit 6': 'https://drive.google.com/file/d/12jEOGONiUvRFUU3igwkwPyHZK8NNF3Uy/view?usp=drivesdk',
    },
    MEFA: {
      'Unit 1': '',
      'Unit 2': 'https://drive.google.com/file/d/13AoqoYs3Bt-9Cv3DqG65cDBcrtijPuiO/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/13Ax6sovrMV4eWCI5Ym9A3xWNjz-DDo_T/view?usp=drive_link',
      'Unit 4': '',
      'Unit 5': 'https://drive.google.com/file/d/13HnEu6HoehfCLtrUupFrafL0JSTI-YQR/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/13HvPIeFHj3zyOYrwnGkmXjU64XgV9_rJ/view?usp=drive_link',
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
          <TouchableOpacity
            style={styles.subjectHeader}
            onPress={() => toggleUnits(subject)}
          >
            <MaterialIcons name="menu-book" size={24} color="#0d2ff0" />
            <Text style={styles.subjectTitle}>{subject}</Text>
            <MaterialIcons
              name={
                visibleUnits === subject
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={24}
              color="#0d2ff0"
            />
          </TouchableOpacity>

          {visibleUnits === subject && (
            <>
              <View style={styles.unitList}>
                {[
                  'Unit 1', 'Unit 2','Unit 3', 'Unit 4','Unit 5','Unit 6',
                ].map((unit, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.unitButton}
                    onPress={() => handleUnitPress(subject, unit)}
                  >
                    <MaterialIcons name="description" size={20} color="#fff" />
                    <Text style={styles.unitText}>{unit}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {subject === 'EP' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    
                    {`1 = OSCILATION
2 = WAVE OPTICS
3 = POLARISATION AND LASERS
4 = HOLOGRAPHY AND OPTIC FIBERS
5 = QUANTUM MECHANICS
6 = SEMICONDUCTOR PHYSICS`}
                  </Text>
                </View>
              )}
              {subject === 'MEFA' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = INTRODUCTION TO MANAGERIAL ECONOMICS
2 = THEORY OF PRODUCTION
3 = MARKET STRUCTURE MONOPOLY
4 = INTRODUCTION TO CAPITAL
5 = INTRODUCTION TO FINANCIAL ACCOUNTING
6 =FINANCIAL STATEMENT `}
                  </Text>
                </View>
              )}
              {subject === 'OOPS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    
                    {`1 = INTRODUCTION
2 = STRINGS
3 = INHERITANCE AND INTERFACE
4 = FILE HANDLING
5 = PACKAGES
6 = EVENT HANDLING`}
                  </Text>
                </View>
              )}
              {subject === 'DM' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                  {`1 = PRAPORTIONAL LOGIC
2 = PROOF TECHNIQUES
3 = SETS,RELATIONS AND FUNCTIONS
4 = INTRODUCTION TO COUNTING
5 = INTRODUCTION TO GRAPH THEORY
6 = GRAPH THEORY`}
                  </Text>
                </View>
              )}
              {subject === 'DS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>IMP NOTE</Text>
                  <Text style={styles.noteText}>
                    :- In E1S2 Data Structures subject the whole content is
                    available in Unit-1
                  </Text>
                </View>
              )}
              {subject === 'DS' && (
                <View style={styles.noteContainer}>
                  <Text style={styles.note}>NOTE</Text>
                  <Text style={styles.noteText}>
                    {`1 = LINEAR AND NON-LINEAR DS
2 = STACK 
3 = SORTING,SEARCHING
4 = TREES
5 = BINARY SEARCH TREES
6 = GRAPH`}
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
