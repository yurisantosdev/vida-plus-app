import { useRef } from "react";
import { Animated, Easing } from "react-native";

export function ApplyAnimated(index: number) {
  const translateY = useRef(new Animated.Value(-30)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  Animated.parallel([
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      delay: index * 100,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }),
  ]).start();

  return { translateY, opacity }
}