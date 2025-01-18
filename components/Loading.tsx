import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

interface LoadingProps {
  size: string;
  color: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = "large",
  color = theme.colors.primary,
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
