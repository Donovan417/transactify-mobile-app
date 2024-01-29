import { View, Text, TextInput, Button,
  TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView,KeyboardAvoidingView, Dimensions, Alert } from 'react-native'
import React, { useRef, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons'; 
import { Platform } from 'react-native';
import CreditCard from "../assets/CreditCard.svg"
import SignUpButton from "../components/SignUpButton"
import { useState } from 'react';
import 'url-polyfill';
import { createClient } from '@sanity/client';
import { User } from '../typings';


export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,
  "SignUp"
>;

const SignUp = () => {
const navigation = useNavigation<NavigationProp>();

// Refs to use the next button on Keyboard
const phoneNumberInputRef = useRef<TextInput>(null);
const firstNameInputRef = useRef<TextInput>(null);
const lastNameInputRef = useRef<TextInput>(null);
const emailInputRef = useRef<TextInput>(null);
const passwordInputRef = useRef<TextInput>(null);
const confirmPasswordInputRef = useRef<TextInput>(null);

// Refs to text in inputs
const [passwordInput, setPasswordInput] = useState('');
const [phoneNumberInput, setPhoneNumberInput] = useState('');
const [firstNameInput, setfirstNameInput] = useState('');
const [lastNameInput, setlastNameInput] = useState('');
const [emailInput, setemailInput] = useState('');
const [confimPasswordInput, setConfimPasswordInput] = useState('');


const [isfirstNameEmpty, setIsFirstNameEmpty] = useState(false);
const [islastNameEmpty, setIsLastNameEmpty] = useState(false);
const [isphoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
const [isemailEmpty, setIsEmailEmpty] = useState(false);
const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
const [isConfirmPasswordEmpty, setisConfirmPasswordEmpty] = useState(false);

const handleFirstNameChange = (text: string) => {
  setfirstNameInput(text);
  setIsFirstNameEmpty(false);
};
const handleLastNameChange = (text: string) => {
  setlastNameInput(text);
  setIsLastNameEmpty(false);
};
const handlePhoneChange = (text: string) => {
  setPhoneNumberInput(text);
  setIsPhoneNumberEmpty(false)
}
const handleEmailChange = (text: string) => {
  setemailInput(text);
  setIsEmailEmpty(false)
}
const handlePasswordChange = (text: string) => {
  setPasswordInput(text);
  setIsPasswordEmpty(false)
}
const handleConfirmPasswordChange = (text: string) => {
  setConfimPasswordInput(text)
}

const handleLogin = async () =>{

  if(!firstNameInput || !phoneNumberInput || !emailInput || !passwordInput || !confimPasswordInput || !lastNameInput){
        if (!firstNameInput) {
          setIsFirstNameEmpty(true)
        }
        if (!lastNameInput) {
          setIsLastNameEmpty(true)
        }
        if (!phoneNumberInput) {
          setIsPhoneNumberEmpty(true)
        }
        if (!emailInput) {
          setIsEmailEmpty(true)
        }
        else{
          setIsEmailEmpty(false)
        }
        if (!passwordInput) {
          setIsPasswordEmpty(true)
        }
        if (!confimPasswordInput) {
          setisConfirmPasswordEmpty(true)
        }
  }
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(passwordInput) && passwordInput) {
      // Show an error message if the password is invalid
      Alert.alert('Password must be at least 8 characters long, contain at least one special character, at least one uppercase letter and at least on digit');
      return; 
    }
    const client = createClient({
      projectId: '8yfvwcjj',
      dataset: 'production',
      apiVersion: '2021-08-31',
      useCdn: false 
    })
      try{
        const userData: User = {
          firstName: firstNameInput,
          lastName: lastNameInput,
          phoneNumber: phoneNumberInput,
          email: emailInput,
          password: passwordInput,
        };
        const response = await client.create({
          ...userData,
          _type: 'user', 
        });
        console.log('User data sent to Sanity:', response);
      }
      catch(error){
        console.error('Error sending user data to Sanity:', error);
      }
    
}
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular,
        Inter_500Medium
      });
    
      if (!fontsLoaded) {
        return null;
      }

      
      
  return (

<KeyboardAvoidingView style={{flex: 1, backgroundColor: 'black'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  <ScrollView style={{ flex: 1, backgroundColor: '#000000'}} contentContainerStyle={{ paddingBottom: 40 }}>
  <SafeAreaView style={{ marginTop: 100 }}>
     {/* Sign Up Text */}
     <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}
     className="mr-4">
       <CreditCard width={70} height={70}/>
      <Text style={{fontFamily: "Inter_600SemiBold"}} 
       className='text-white text-3xl '>Create Account</Text>

       </View>
       {/* Sign up Forms */}
       
       <View style={{}} className='flex flex-row ml-10 space-x-3 '>
        <TextInput
        style={[styles.input, {width: '43%'}]}
        placeholder="First Name"
        placeholderTextColor="#565A60"
        returnKeyType="next"
        value={firstNameInput}
        onChangeText={handleFirstNameChange}
        ref={firstNameInputRef}
        onSubmitEditing={() => {
          lastNameInputRef.current?.focus();
        }}
        keyboardAppearance="dark"
      />
       <TextInput
        style={[styles.input, {width: '43%'}]}
        placeholder="Last Name"
        placeholderTextColor="#565A60"
        returnKeyType="next"
        ref={lastNameInputRef}
        value={lastNameInput}
        onChangeText={handleLastNameChange}
        onSubmitEditing={() => {
          phoneNumberInputRef.current?.focus();
        }}
        keyboardAppearance="dark"
      />
      </View>
      <View className='flex flex-row ml-10 '>
  <View style={{ width: 180 }}>
    <View className='flex flex-row space-x-1 items-center'>
      {isfirstNameEmpty && (
        <React.Fragment>
          <Ionicons name='alert-circle-outline' color="red" size={16}/>
          <Text className='text-red-500' style={{fontSize:14}}>First Name is required</Text>
        </React.Fragment>
      ) 
      }
    </View>
  </View>
  <View style={{ width: 200 }}>
    <View className='flex flex-row space-x-1 items-center'>
      {islastNameEmpty && (
        <React.Fragment>
          <Ionicons name='alert-circle-outline' color="red" size={16}/>
          <Text className='text-red-500' style={{fontSize:14}}>Last Name is required</Text>
        </React.Fragment>
      ) 
      }
    </View>
  </View>
</View>
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#565A60"
        returnKeyType="next"
        ref={phoneNumberInputRef}
        value={phoneNumberInput}
        onChangeText={handlePhoneChange}
        onSubmitEditing={() => {
          emailInputRef.current?.focus();
        }}
        keyboardType='phone-pad'
        keyboardAppearance="dark"
      />
      <View className='flex flex-row space-x-1 items-center'>
      {isphoneNumberEmpty && (
      <React.Fragment>
        <Ionicons name='alert-circle-outline' color="red" size={16}/>
        <Text className='text-red-500' style={{fontSize:14}}>Phone Number is required</Text>
      </React.Fragment>
         ) 
      }
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#565A60"
        returnKeyType="next"
        ref={emailInputRef}
        value={emailInput}
        onChangeText={handleEmailChange}
        onSubmitEditing={() => {
          passwordInputRef.current?.focus();
        }}
        keyboardAppearance="dark"
        keyboardType='email-address'
        />
      <View className='flex flex-row space-x-1 items-center'>
      {isemailEmpty && (
      <React.Fragment>
        <Ionicons name='alert-circle-outline' color="red" size={16}/>
        <Text className='text-red-500' style={{fontSize:14}}>Email is required</Text>
      </React.Fragment>
         ) 
      }
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#565A60"
        secureTextEntry={true}
        returnKeyType="next"
        ref={passwordInputRef}
        value={passwordInput}
        onChangeText={handlePasswordChange}
        onSubmitEditing={() => {
          confirmPasswordInputRef.current?.focus();
        }}
        keyboardAppearance="dark"
        passwordRules={null}
      />
      <View className='flex flex-row space-x-1 items-center'>
      {isPasswordEmpty && (
      <React.Fragment>
        <Ionicons name='alert-circle-outline' color="red" size={16}/>
        <Text className='text-red-500' style={{fontSize:14}}>Password is required</Text>
      </React.Fragment>
         ) 
      }
      </View>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#565A60"
        secureTextEntry={true}
        ref={confirmPasswordInputRef}
        value={confimPasswordInput}
        onChangeText={handleConfirmPasswordChange}
        keyboardAppearance="dark"
      />
    </View>
    <View className='flex flex-row space-x-1 items-center ml-10'>
      {isfirstNameEmpty && (
      <React.Fragment>
        <Ionicons name='alert-circle-outline' color="red" size={16}/>
        <Text className='text-red-500' style={{fontSize:14}}>Passwords do not match</Text>
      </React.Fragment>
         ) 
      }
      </View>
    <View>
      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleLogin}>
        <SignUpButton />
      </TouchableOpacity>
    </View>
    <View className=' mr-5 flex flex-row space-x-1 justify-center'>
      <Text className="text-[#565A60]" style={{fontSize: 15}}>Already have an account?</Text>
      <TouchableOpacity activeOpacity={0.5}
      onPress={() => navigation.navigate("Login")}>
        <Text className='text-[#A4439B] font-bold'>Log In</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  </ScrollView>
</KeyboardAvoidingView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40
  },
  button:{
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#1A2027",
    borderRadius: 13,
    padding: 20,
    marginTop: 20,
    marginVertical: 10,
    color: '#D3D3D3',
    fontFamily: 'Inter_400Regular',
    fontSize: 17,
  },
});

export default SignUp