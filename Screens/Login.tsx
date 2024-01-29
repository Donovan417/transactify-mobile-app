import { View, Text, TextInput, Button,
  TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView,KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons'; 
import { Platform } from 'react-native';
import CreditCard from "../assets/CreditCard.svg"
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import LogInButton from '../components/LogInButton';



export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,
  "SignUp"
>;

const SignUp = () => {
const emailInputRef = useRef<TextInput>(null);
const passwordInputRef = useRef<TextInput>(null);
const navigation = useNavigation<NavigationProp>();
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular,
        Inter_500Medium
      });
    
      if (!fontsLoaded) {
        return null;
      }
      
  return (
<KeyboardAvoidingView style={{flex: 1, paddingBottom: 40}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  <ScrollView style={{ flex: 1, backgroundColor: 'black', height: screenHeight}} contentContainerStyle={{ paddingBottom: 40 }}>
  <SafeAreaView style={{ paddingTop: 40 }}>
     {/* Log In Text */}
     <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 200 }}
     className="mr-8">
       <CreditCard width={70} height={70}/>
      <Text style={{fontFamily: "Inter_600SemiBold"}} 
       className='text-white text-3xl'>Log In</Text>
       </View>
       {/* Log In Forms */}
    <View style={styles.container} className="mt-3">
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#565A60"
        returnKeyType="next"
        ref={emailInputRef}
        onSubmitEditing={() => {
          passwordInputRef.current?.focus();
        }}
        keyboardAppearance="dark"
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#565A60"
        secureTextEntry={true}
        ref={passwordInputRef}
        keyboardAppearance="dark"
      />
    </View>
    <View className="mt-2">
      <LogInButton/>
    </View>
    <View className=' mr-5 mt-5 flex flex-row space-x-1 justify-center'>
      <Text className="text-[#565A60]" style={{fontSize: 15}}>Don't have an account?</Text>
      <TouchableOpacity activeOpacity={0.5}
      onPress={() => navigation.navigate("SignUp")}>
        <Text className='text-[#A4439B] font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  </ScrollView>
</KeyboardAvoidingView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#1A2027",
    borderRadius: 13,
    padding: 20,
    marginTop: 18,
    marginVertical: 10,
    color: '#565A60',
    fontFamily: 'Inter_400Regular',
    fontSize: 17
  },
});

export default SignUp