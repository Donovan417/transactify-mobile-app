import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import Carousel from 'react-native-reanimated-carousel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const AddPayment = () => {
  return (
    <SafeAreaView>
      <Text>AddPayment</Text>
    </SafeAreaView>
  )
}

export default AddPayment