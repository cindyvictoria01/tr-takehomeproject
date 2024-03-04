import React from "react";
import BottomSheet from "../components/bottom-sheet";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import RatingCard from "../components/rating-card";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { CrossIcon } from "../../assets/svg";
import color from "../../constants/color";
import TextBubble from "../components/text-bubble";
import Button from "../components/button";
import size from "../../constants/size";

interface State {
  [key: string]: boolean; // Allows dynamic keys of type boolean
}

export default function RatingBottomSheet(props: {
  name: string;
  currency: string;
  amount: string;
  date: string;
  country: string;
  uniqueKey: number;
}) {
  const { name, currency, amount, date, country, uniqueKey } = props;

  const [rating, setRating] = React.useState<number>(0);
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const initialState: State = {
    textBubble1: false,
    textBubble2: false,
    textBubble3: false,
    textBubble4: false,
    textBubble5: false,
  };
  const [state, setState] = React.useState<State>(initialState);

  const textBubbleData = [
    "xxx xxx xxx",
    "xxx xxx xxxxxxx xx",
    "xxx xxx xx",
    "xxx xxx xxxx xxxxxxxx",
    "xxx xxx xxxxx xxxxx xxxx",
  ];

  return (
    <BottomSheet
      uniqueKey={"rate-card-" + uniqueKey}
      snapPoints={[400, "85%"]}
      trigger={(triggerRef) => (
        <TouchableOpacity
          onPress={() => triggerRef.current && triggerRef.current.present()}
          style={{ marginRight: 16 }}
        >
          <RatingCard
            date={date}
            rating={rating}
            country={country}
            name={name}
            currency={currency}
            amount={amount}
            onChange={() => triggerRef.current && triggerRef.current.present()}
            disabled={disabled}
          />
        </TouchableOpacity>
      )}
    >
      {(childrenRef) => (
        <BottomSheetView
          style={{ marginHorizontal: 24, marginVertical: 32, flex: 1 }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row-reverse" }}
            onPress={() => {
              !disabled && setRating(0);
              !disabled && setState(initialState);
              childrenRef.current && childrenRef.current.close();
            }}
          >
            <CrossIcon size={12} color={color.neutral1} />
          </TouchableOpacity>
          <Text style={[styles.greenText, { marginBottom: 16 }]}>
            Transaction Success
          </Text>
          <BottomSheetView style={styles.row}>
            <BottomSheetView
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={
                  country == "switzerland"
                    ? require("../../assets/png/switzerland.png")
                    : require("../../assets/png/malaysia.png")
                }
                style={styles.image}
                resizeMode="cover"
              />
              <View>
                <Text>{name}</Text>
                <Text style={styles.greyText}>
                  {currency} {amount}
                </Text>
              </View>
            </BottomSheetView>
            <Text>{date}</Text>
          </BottomSheetView>
          <BottomSheetView style={{ alignItems: "center", marginVertical: 32 }}>
            <Text style={styles.h2}>How's your transaction experience?</Text>
            {rating !== 0 && (
              <Image
                source={
                  rating > 3
                    ? require("../../assets/png/rate-one.png")
                    : require("../../assets/png/rate-two.png")
                }
                style={styles.emoji}
                resizeMode="cover"
              />
            )}
            <TouchableOpacity style={{ marginBottom: 4 }}>
              {disabled ? (
                <StarRatingDisplay
                  rating={rating}
                  color={color.yellow}
                  enableHalfStar={false}
                  emptyColor={color.neutral1}
                />
              ) : (
                <StarRating
                  rating={rating}
                  onChange={(value) => {
                    setRating(value);
                    childrenRef.current && childrenRef.current.snapToIndex(1);
                  }}
                  color={color.yellow}
                  enableHalfStar={false}
                  emptyColor={color.neutral1}
                />
              )}
            </TouchableOpacity>
          </BottomSheetView>
          {rating !== 0 && (
            <>
              <Text style={styles.h1}>Tell us what makes you satisfied</Text>
              <Text style={styles.redText}>*Required</Text>
              <BottomSheetView
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  marginBottom: 16,
                }}
              >
                {textBubbleData.map((text, index) => (
                  <TextBubble
                    key={index}
                    text={text}
                    onPress={() => {
                      setState((prevState) => ({
                        ...prevState,
                        [`textBubble${index + 1}`]:
                          !state[`textBubble${index + 1}`],
                      }));
                    }}
                    isActive={state[`textBubble${index + 1}`]}
                    disabled={disabled}
                  />
                ))}
              </BottomSheetView>
            </>
          )}
          <Button
            text={"Submit"}
            onPress={() => {
              childrenRef.current && childrenRef.current.close();
              setRating(rating);
              setDisabled(true);
            }}
            disabled={
              rating === 0 ||
              !(
                state.textBubble1 ||
                state.textBubble2 ||
                state.textBubble3 ||
                state.textBubble4 ||
                state.textBubble5
              ) ||
              disabled
            }
          />
        </BottomSheetView>
      )}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: size.h1,
    fontWeight: "600",
    color: color.defaultText,
  },
  h2: {
    fontSize: size.h2,
    fontWeight: "700",
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
  emoji: {
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greenText: {
    fontSize: size.h2,
    color: color.primary1,
    fontWeight: "700",
  },
  redText: {
    color: color.error,
    fontWeight: "400",
    marginVertical: 16,
  },
  greyText: {
    color: color.neutral2,
  },
});
