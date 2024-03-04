import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../../constants/color";
import size from "../../constants/size";

interface Props {
  text: string;
  onPress: () => void;
  isActive: boolean;
  disabled: boolean;
}

export default function TextBubble(props: Props) {
  const { text, onPress, isActive, disabled } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={isActive ? styles.active : styles.inactive}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {
    marginRight: 12,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    borderColor: color.primary3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inactive: {
    marginRight: 12,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    borderColor: color.neutral3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_active: {
    color: color.defaultText,
    fontSize: size.h2,
    justifyContent: "center",
  },
  text_inactive: {
    color: color.defaultText,
    fontSize: size.h2,
    justifyContent: "center",
  },
});
