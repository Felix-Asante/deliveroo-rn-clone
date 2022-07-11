import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./ui/RestaurantCard";

export default function FeaturedRow({ title, description, id }) {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00ccbb" />
			</View>
			<Text className="text-gray-500 text-xs mb-3">{description}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* restaurants cards */}
				<RestaurantCard
					id="1"
					imgUrl="https://links.papareact.com/gn7"
					title="Yo! Sushi"
					rating="4.5"
					genre="Fast food"
					address="Accra,Ghana"
					short_description="Authentic africa dishes"
					dishes={["Rice,Ampesi,Fufu"]}
					long="30.3444"
					lat="-32.440"
				/>
				<RestaurantCard
					id="1"
					imgUrl="https://links.papareact.com/gn7"
					title="Yo! Sushi"
					rating="4.5"
					genre="Fast food"
					address="Accra,Ghana"
					short_description="Authentic africa dishes"
					dishes={["Rice,Ampesi,Fufu"]}
					long="30.3444"
					lat="-32.440"
				/>
			</ScrollView>
		</View>
	);
}
