export default {
	name: "dish",
	title: "Dish",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name of dish",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "short_description",
			title: "Short description",
			type: "string",
			validation: (Rule) => Rule.max(200),
		},
		{
			name: "price",
			type: "number",
			title: "price of the dish in GBP",
		},
		{
			name: "image",
			title: "Image of the Dish",
			type: "image",
		},
	],
};
