import { ScrollView, Text } from "react-native";
import CategoryCard from "./ui/CategoryCard";
export default function Categories() {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
		</ScrollView>
	);
}
