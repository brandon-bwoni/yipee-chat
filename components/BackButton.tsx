import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "@/assets/icons";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

const BackButton = ({ size = 26, router }) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2.5} color={theme.colors.text} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
    marginTop: hp(3),
  },
});

export default BackButton;
