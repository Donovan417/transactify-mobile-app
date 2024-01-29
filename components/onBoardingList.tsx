import ShopBag from "./assets/ShoppingBags.svg"
import { View, Text, ScrollView, TouchableOpacity, Image, Animated, FlatList, Dimensions } from 'react-native'
import CreditCard from "../assets/CreditCard_Flat.svg"
import ScanPayment from "../assets/ScanPaymentFlat.svg"
const screenWidth = Dimensions.get('window').width;
import MakePayment from '../assets/MakePayment.svg'
import TransactionHistory from '../assets/TransactionHistory2.svg'
import WelcomeImage from '../assets/WelcomeImage.svg'
import SignUpImage from "../assets/SignUp.svg"

// console.log(`Screen width: ${screenWidth}`);

let iconHeight, marginTop, marginLeft, horizontalpad;
if (screenWidth <= 375) {
  iconHeight = 300;
  marginTop = '7%';
  marginLeft='13%'
} else {
  iconHeight = 400;
  marginTop = '15%';
  marginLeft='14.5%'
  horizontalpad='2%'
}

export default[
    {
      id: 1,
      icon: (
      <View style={{marginTop: marginTop, marginLeft: '1%'}}>
        <WelcomeImage width={screenWidth} height={iconHeight}  />
      </View>
      ),
      title: "Welcome To Transactify",
      description: (
        <Text>All of your mobile payment needs at a glance.</Text>
      )
    },
    {
      id: 2,
      icon: (
      <View style={{marginTop: marginTop}}>
        <CreditCard width={screenWidth} height={iconHeight}  />
      </View>
      ),
      title: "Add Payment Methods",
      description: "Adding payment methods are both simple and secure."
      
    },
    {
      id: 3,
      icon: (
      <View style={{marginTop: marginTop}}>
        <MakePayment width={screenWidth} height={iconHeight}  />
      </View>
      ),
      title: "Make Payments",
      description: "Sending and recieving payments between you and your friends is fast, simple and secure."
      
    },
    {
      id: 4,
      icon: (
      <View style={{marginTop: marginTop}}>
        <TransactionHistory width={screenWidth} height={iconHeight}  />
      </View>
      ),
      title: "View Transactions",
      description: "Keep track of every transaction you make."
      
    },
    {
      id: 5,
      icon: (
      <View style={{marginTop: marginTop}}>
        <ScanPayment width={screenWidth} height={iconHeight}  />
      </View>
      ),
      title: "Pay Anywhere",
      description: "Use your digital wallet everywhere you go."
      
    },
]