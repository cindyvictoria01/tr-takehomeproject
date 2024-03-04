import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import color from "../../constants/color";
import size from "../../constants/size";
import { CrossIcon } from "../../assets/svg";
import RatingBottomSheet from "../modules/rating-bottom-sheet";
import TextBubble from "../components/text-bubble";

export default function HomeScreen() {
  const transactionList = React.useMemo<
    {
      name: string;
      currency: string;
      amount: string;
      date: string;
      country: string;
    }[]
  >(
    () => [
      {
        name: "Sheilia Anastarum",
        currency: "EUR",
        amount: "5,000",
        date: "23 June",
        country: "switzerland",
      },
      {
        name: "Sheilia Anastarum",
        currency: "MYR",
        amount: "2,000",
        date: "23 June",
        country: "malaysia",
      },
    ],
    []
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.h1}>Banner</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h1}>Rate Your Latest Transaction</Text>
          <TouchableOpacity>
            <CrossIcon size={12} color={color.neutral1} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {transactionList.length > 0 &&
            transactionList.map((item, id) => (
              <RatingBottomSheet {...item} uniqueKey={id} key={id} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginVertical: 32,
  },
  h1: {
    fontSize: size.h1,
    fontWeight: "600",
    color: color.defaultText,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  profile: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
