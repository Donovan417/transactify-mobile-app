import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import onBoardingList from './onBoardingList';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
let marginBottom;
if(screenWidth<=375 ){
  marginBottom = 15
}
type Props = {
    scrollX: Animated.Value;
  };
  
  const RenderDots: React.FC<Props> = ({ scrollX }) => {
    const screenWidth = Dimensions.get('window').width;
    const dotPosition = Animated.divide(scrollX, screenWidth);
    return (
      <View style={styles.dotsContainer}>
        {onBoardingList.map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      marginHorizontal: 8,
      marginBottom: marginBottom
    },
  });
  
  export default RenderDots;
  