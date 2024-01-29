import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';

export type RootStackParamList={
    Welcome: undefined,
    MakePayment: undefined,
    AddPayment: undefined
    TransactionHistory: undefined,
    HomePage: undefined,
    BankDeposit: undefined,
    Login:undefined,
    SignUp: undefined
  
  }
  const Stack = createNativeStackNavigator<RootStackParamList>();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"> 
          {/* Welcome Screen */}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Welcome"
            component={WelcomeScreen}
          />
          {/* Make Payment Screen */}
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="MakePayment"
          component={WelcomeScreen}
          />
          {/* Add Payment Screen */}
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="AddPayment"
          component={WelcomeScreen}
          />
          {/* Transaction History */}
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="TransactionHistory"
          component={WelcomeScreen}
          />
  
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="HomePage"
          component={WelcomeScreen}
          />
  
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="BankDeposit"
          component={WelcomeScreen}
          />
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
          />
  
          <Stack.Screen 
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name="Login"
          component={Login}
          />
         
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  