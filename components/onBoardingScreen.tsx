import { View, Text, ScrollView, TouchableOpacity, Image, Animated, FlatList, Dimensions, StyleSheet } from 'react-native'
import onBoardingList from './onBoardingList'
import React, { useRef, useState, useEffect } from 'react'
import RenderDots from './RenderDots';
import { Ionicons } from '@expo/vector-icons'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';


const screenWidth = Dimensions.get('window').width;
let right: string, horizontalpad;
if(screenWidth<=375 )
{
  right='23%' 
  horizontalpad=64
} 
else{
  right='26%'
  horizontalpad=80
}

export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,
  "Welcome"
>;
const onboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const boardingList = useRef(null);
  const [showText, setShowText] = useState(false);

  const onViewRef = useRef(({changed}: {changed: any})=>{
    if (changed[0].isViewable){
      setCurrentIndex(changed[0].index)
    }
  })

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 0 }).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (showText) {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    }
  }, [showText]);

  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const moveAnimation = Animated.timing(arrowAnimation, {
    toValue: 1,
    duration: 3000,
    easing: Easing.ease, // Add easing function
    useNativeDriver: true,
  });
  
  useEffect(() => {
    if (showText && currentIndex === 0) {
      const loopAnimation = Animated.loop(moveAnimation, { iterations: -1 });
      loopAnimation.start();
      return () => {
        loopAnimation.stop();
      };
    } else {
      moveAnimation.stop();
      arrowAnimation.setValue(0);
    }
  }, [currentIndex, showText]);

  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{flex:1}}>
      <FlatList
        data={onBoardingList}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={boardingList}
        renderItem={({ item, index}) => (
          <View style={[{ width: screenWidth}]}>
            <View >{item.icon}</View>
              <Text style={style.title}>{item.title}</Text>
              <Text style={style.description}>{item.description}</Text>
              {index === onBoardingList.length -1 && (
                <TouchableOpacity
                  style={style.button}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("SignUp")}
                >
              <LinearGradient colors={["#c35379", "#c04881", "#ba3f8a", "#b13895", "#a434a2", "#9b30ab", "#902fb4", "#812fbe", "#792bc6", "#6f29cd", "#6227d6", "#5126de"]} style={style.button}>
                <Text style={style.buttonText}>Sign Up</Text>
              </LinearGradient>
                </TouchableOpacity>
              )}
          </View>
        )}
      />
      <RenderDots scrollX={scrollX} />
      {showText && currentIndex === 0 &&  (
          <Animated.View
            style={[
              style.fadeInContainer,
              {
                opacity: fadeIn,
                flexDirection: 'row',
                alignItems: 'center',
                right: right,
              },
            ]}
          >
            <Text style={style.fadeInText}>Swipe right to continue</Text>
            <Animated.View
          style={{
            transform: [
              {
                translateX: arrowAnimation.interpolate({
                  inputRange: [0,0.5, 1],
                  outputRange: [2, 10, 2],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <Ionicons name="arrow-forward" size={30} color="#D3D3D3" />
        </Animated.View>
          </Animated.View>
)}
    </View>
  );
};

const style = StyleSheet.create({
  title:{
    color: 'white',
    fontSize: 28,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:50
  },
  description:{
    color: '#D3D3D3',
    fontWeight: '300',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: horizontalpad,
  },
  fadeInContainer: {
    position: 'absolute',
    bottom: '13%',
    // right:'26%'
  },
  fadeInText: {
    color: '#D3D3D3',
    fontSize: 15,
    fontWeight: '700',
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default onboardingScreen;