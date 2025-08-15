import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Sem1 = () => {
  const [visibleUnits, setVisibleUnits] = useState<string | null>(null);

  const toggleUnits = (subject: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setVisibleUnits(visibleUnits === subject ? null : subject);
  };

  const subjects = ['CLA', 'PSPC', 'BEEE'];

  const unitLinks: Record<string, Record<string, string>> = {
    CLA: {
      'Unit 1': 'https://drive.google.com/file/d/1LFzZ0b0iLrd1ajjq9cPW1MdiF5FmtCxF/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1OiMor6CzS_zR4QGF4sRCS1SxOcj0UpOJ/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1VFIBsGE3Jkfv0dI3b6BebX7qGE9VWZNj/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1fR1lOQD9KStMK7ouiqAjNqNK9wzTGbcv/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1-_QNpflmbP9LJSwkF03Yf5aRhFI53zSv/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1U8fvsoVX2TaDVkuN0PxwQCOHeARDbFcq/view?usp=drive_link',
    },
    PSPC: {
      'Unit 1': 'https://drive.google.com/file/d/1sGNYWaNon3COEt64fNpLzbu-KjTO8KXy/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/1QYDT0WZ9JURDJzp4M8P4H-yoYZbUUzWl/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/1YpJI32sB-ZP_fHip1clk4IeSZz1f_wEF/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1C6pWXpTzfr6ghu1rLcVu0cE1KtWKFqxJ/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1wx_MPVLQhfqDrEDQlMgB_BhfRnjqgyDE/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1kWQyJKrT6dfKaFmMn-fK1dxIucC_pAj3/view?usp=drive_link',
    },
    BEEE: {
      'Unit 1': 'https://drive.google.com/file/d/1ZJW4H16-QD3c6pv8lhnM33sbOtZC7sTX/view?usp=drive_link',
      'Unit 2': 'https://drive.google.com/file/d/17QMCQc6rtim3QoHiW0bWGCjVz-OOZICv/view?usp=drive_link',
      'Unit 3': 'https://drive.google.com/file/d/12h9KGWLmJnMv0jdUXAGS4hQyFcQvd7Am/view?usp=drive_link',
      'Unit 4': 'https://drive.google.com/file/d/1CP05aaE9MutxsTjNYjicwyQ7UIVOPQlx/view?usp=drive_link',
      'Unit 5': 'https://drive.google.com/file/d/1y8G2lL-wNNoTwF3i0gKty9yoZs35sBhP/view?usp=drive_link',
      'Unit 6': 'https://drive.google.com/file/d/1u2rsKasE1-YrDcWmZVIBvPQbLhox_m1j/view?usp=drive_link',
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
            {subject === 'CLA' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                              {`1 =DIFFRENTIAL EQUATIONS OF FIRST ORDER AND FIRST DEGREE
2 = FUNCTIONS OF SEVERAL VARIABLES
3 = APPLICATIONS OF SEVETAL VARIABLES
4 = LINEAR ALGEBRA
5 = UNIT-5_EIGEN VALUES AND EIGEN VECTORS
6 = NUMERICAL SOLUTION OF TRANSDENTIAL EQUATIONS,INTERPOLATION`}
                              </Text>
                            </View>
                          )}
            {subject === 'PSPC' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                              {`1 = INTRODUCTION TO COMPUTER PROGRAMMING
2 = CONDITIONAL STATEMENTS AND LOOPS
3 = ARRAYS
4 = FUNCTIONS
5 = POINTERS
6 = STRUCTURE AND UNION,FILES`}
                              </Text>
                            </View>
                          )}
            {subject === 'BEEE' && (
                            <View style={styles.noteContainer}>
                              <Text style={styles.note}>NOTE</Text>
                              <Text style={styles.noteText}>
                              {`1 = DC CIRCUTS
2 = AC CIRCUTS
3 = DC MACHINES
4 = AC MACHINES
5 = SEMICONDUCTOR DEVICES
6 = TRANSISTORS`}
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
