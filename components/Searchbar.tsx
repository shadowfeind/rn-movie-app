import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

type Props = {
  placeHolder: string;
  onPress: () => void;
};

const Searchbar = ({ placeHolder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        value=""
        onChangeText={(text) => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default Searchbar;
