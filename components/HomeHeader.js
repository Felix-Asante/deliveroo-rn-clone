import React from "react";
import {
	UserIcon,
	SearchIcon,
	AdjustmentsIcon,
	ChevronDownIcon,
} from "react-native-heroicons/outline";
import { View, Image, Text, TextInput } from "react-native";
export default function HomeHeader() {
	return (
		<View>
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="h-7 w-7 bg-gray-300 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Now
						<ChevronDownIcon size={20} color="#00ccbb" />
					</Text>
				</View>
				<UserIcon size={35} color="#00ccbb" />
			</View>
			{/* SEARCH BOX */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
				<View className="flex-row items-center flex-1 space-x-2  bg-gray-200 p-3">
					<SearchIcon color="gray" size={20} />
					<TextInput
						placeholder="Restaurants and cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsIcon color="#00ccbb" />
			</View>
		</View>
	);
}
