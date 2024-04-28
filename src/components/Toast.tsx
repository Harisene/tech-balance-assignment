import useTheme from "@hooks/useTheme";
import { horizontalScale, moderateScale, verticalScale } from "@themes/metrics";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface Props {
  message: string;
  onClear: () => void;
}

export default function Toast({ message, onClear }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();
  const styles = getStyles();

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
      style={[styles.container, { transform: [{ scale }], opacity }]}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );

  function getStyles() {
    return StyleSheet.create({
      container: {
        position: "absolute",
        top: verticalScale(10),
        width: "100%",
        alignItems: "center",
        backgroundColor: "transparent",
      },
      innerContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(12),
        backgroundColor: "lightgrey",
        borderRadius: verticalScale(10),
        shadowColor: colors.shades.black,
        shadowOffset: { width: horizontalScale(2), height: verticalScale(4) },
        shadowOpacity: moderateScale(0.3),
      },
      text: {
        color: colors.shades.black,
      },
    });
  }
}
