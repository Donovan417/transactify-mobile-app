import {createClient} from '@sanity/client'
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

const client = createClient({
  projectId: '6dfg3j3s',
  dataset: 'production',
  useCdn: true // set this to false if you want to bypass the Sanity CDN
})
interface UserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  const createUser = async (input: UserInput) => {
    try {
      const result = await client.create({
        _type: 'user',
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password
      })
      console.log('User created successfully:', result)
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }
  const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleCreateUser = () => {
      const userInput = { firstName, lastName, email, password };
      createUser(userInput);
    };
  
    return (
      <>
        <TextInput value={firstName} onChangeText={setFirstName} placeholder="First name" />
        <TextInput value={lastName} onChangeText={setLastName} placeholder="Last name" />
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
        <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        <Button title="Create user" onPress={handleCreateUser} />
      </>
    );
  };
  export default UserForm

