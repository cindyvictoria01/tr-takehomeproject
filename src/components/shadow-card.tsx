import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import color from "../../constants/color";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function ShadowCard(props: Props) {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: color.white,
    width: "100%",
    borderRadius: 8,
    //shadow ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    //shadow android original 5
    elevation: 2,
  },
});
