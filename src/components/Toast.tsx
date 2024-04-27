import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface Props {
  message: string;
  onClear: () => void;
}

export default function Toast({ message, onClear }: Props) {

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!message) return;

    startAnimation();

    const timer = setTimeout(() => {
      stopAnimation();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  const startAnimation = () => {
    if (!message) return;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const stopAnimation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClear();
    });
  };

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  if (!message) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale }], opacity },
      ]}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
  },
  text: {
    color: "black",
  },
});