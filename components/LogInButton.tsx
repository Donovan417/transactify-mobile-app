import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LogInButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer}>
      <LinearGradient colors={["#c35379", "#c04881", "#ba3f8a", "#b13895", "#a434a2", "#9b30ab", "#902fb4", "#812fbe", "#792bc6", "#6f29cd", "#6227d6", "#5126de"]} style={styles.linearGradient}>
        <Text style={styles.buttonText}>Log In</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
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

export default LogInButton;