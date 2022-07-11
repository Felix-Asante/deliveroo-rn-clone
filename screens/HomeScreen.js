import { TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView className="bg-white pt-5">
				<HomeHeader />
				{/* BODY */}
				<ScrollView
					className="bg-gray-100 flex-1"
					contentContainerStyle={{
						padding: 20,
					}}
				>
					{/* Categories */}
					<Categories />
					{/* FEATURED CATEGORIES */}
					<FeaturedRow
						title="Featured"
						description="Paid placements from out partners"
						id="123"
					/>
					<FeaturedRow
						title="Tasty Discount"
						id="1234"
						description="Everyone has been enjoying these juicy discount"
					/>
					<FeaturedRow
						title="Offers near you"
						id="12345"
						description="Why not support your local restaurants tonight"
					/>
				</ScrollView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}
