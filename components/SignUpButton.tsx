import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpButton = () => {
  return (
      <LinearGradient colors={["#c35379", "#c04881", "#ba3f8a", "#b13895", "#a434a2", "#9b30ab", "#902fb4", "#812fbe", "#792bc6", "#6f29cd", "#6227d6", "#5126de"]} style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </LinearGradient>
  );

}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 30,
    paddingHorizontal: 40
  },
  linearGradient: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpButton;
