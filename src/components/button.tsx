import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../../constants/color";
import size from "../../constants/size";

interface Props {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

export default function Button(props: Props) {
  const { text, onPress, disabled } = props;

  return (
    <TouchableOpacity
      style={disabled ? styles.disabled : styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: color.primary2,
    borderRadius: 4,
    width: "100%",
    justifyContent: "flex-end",
  },
  title: {
    color: color.white,
    fontSize: size.h2,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 4,
  },
  disabled: {
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: color.neutral1,
    borderRadius: 4,
    width: "100%",
    justifyContent: "flex-end",
  },
});
