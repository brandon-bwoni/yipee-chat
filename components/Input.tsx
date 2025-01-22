import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { RefObject, ReactNode } from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

type InputProps = {
  containerStyles?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  inputRef?: RefObject<TextInput>;
} & TextInputProps;

const Input: React.FC<InputProps> = ({
  containerStyles,
  icon,
  inputRef,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {icon && icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    paddingHorizontal: 10,
    gap: 12,
  },
});

export default Input;
