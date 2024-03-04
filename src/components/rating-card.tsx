import React from "react";
import ShadowCard from "./shadow-card";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import color from "../../constants/color";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import size from "../../constants/size";

interface Props {
  date: string;
  country: string;
  name: string;
  currency: string;
  amount: string;
  rating: number;
  disabled: boolean;
  onChange: () => void;
}

export default function RatingCard(props: Props) {
  const { date, country, name, currency, amount, rating, disabled, onChange } =
    props;
  //   const [rating, setRating] = React.useState<number>(0);
  return (
    <ShadowCard style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.greenText}>Transaction Success</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.row}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={
              country === "switzerland"
                ? require("../../assets/png/switzerland.png")
                : require("../../assets/png/malaysia.png")
            }
            style={styles.image}
            resizeMode="cover"
          />
          <Text>{name}</Text>
        </View>
        <Text>
          {currency} {amount}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.h2}>How's your transaction experience?</Text>
        <TouchableOpacity onPress={onChange} disabled={disabled}>
          <StarRatingDisplay
            rating={rating}
            color={color.yellow}
            enableHalfStar={false}
            emptyColor={color.neutral1}
          />
        </TouchableOpacity>
      </View>
    </ShadowCard>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: size.h2,
    fontWeight: "600",
    color: color.defaultText,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    backgroundColor: "#fff",
    marginRight: 8,
    height: 32,
    width: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greenText: {
    color: color.primary1,
    fontWeight: "600",
  },
  container: {
    minWidth: 325,
  },
});
