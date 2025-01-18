import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome image */}
        <Image
          style={styles.welcomeImage}
          source={require("@/assets/logo.png")}
        />

        {/* title */}
        <View>
          <Text style={styles.punchLine}>NdeYipee all the way!</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("signup")}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("login")}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login{" "}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(50),
    alignSelf: "center",
  },
  punchLine: {
    fontSize: wp(5),
    textAlign: "center",
    paddingHorizontal: wp(10),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  buttonTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    color: theme.colors.text,
    fontSize: wp(4),
  },
});

export default Welcome;
