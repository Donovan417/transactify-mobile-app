import { View, Text, ScrollView, TouchableOpacity, Image, Animated, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import OnboardingComponent from '../components/onBoardingScreen';
import { Platform } from 'react-native';


export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,
  "Welcome"
>;

const WelcomeScreen = () => {

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular,
        Inter_500Medium
      });
    
      if (!fontsLoaded) {
        return null;
      }
      
  return (
    <SafeAreaView className='bg-[#000000] flex-1 items-center'>
      {/* Image Carousel */}
      <View>
        <OnboardingComponent />
      </View>
      
    </SafeAreaView>
  )
}

export default WelcomeScreen