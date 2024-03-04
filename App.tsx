import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import HomeScreen from "./src/screens/home-screen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <HomeScreen />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
