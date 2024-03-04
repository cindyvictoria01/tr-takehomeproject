import {
  BottomSheetModal as RawBottomSheetModal,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import color from "../../constants/color";
import size from "../../constants/size";

interface Props {
  trigger: (
    sheetRef: React.RefObject<BottomSheetModalMethods>
  ) => React.ReactNode;
  children: (
    sheetRef: React.RefObject<BottomSheetModalMethods>
  ) => React.ReactNode;
  uniqueKey?: string;
  snapPoints?: (string | number)[];
  title?: string;
}

export default function BottomSheet(props: Props) {
  const {
    trigger,
    children,
    snapPoints = ["30%", "70%"],
    uniqueKey = "bottom-sheet",
    title,
    ...rest
  } = props;
  const bottomSheetModalRef = React.useRef<RawBottomSheetModal>(null);
  return (
    <>
      {trigger(bottomSheetModalRef)}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        key={uniqueKey}
        handleComponent={() => null}
        {...rest}
      >
        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
        {children(bottomSheetModalRef)}
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 16,
    height: 32,
    justifyContent: "center",
  },
  titleText: {
    fontSize: size.h3,
    color: color.neutral3,
  },
});
