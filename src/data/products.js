
const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    price: 19.99,
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
  },
  {
    id: 3,
    title: "Powder Canister",
    price: 14.99,
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
  },
  {
    id: 4,
    title: "Red Lipstick",
    price: 12.99,
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
  },
  {
    id: 5,
    title: "Red Nail Polish",
    price: 8.99,
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    price: 49.99,
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    price: 129.99,
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"
  },
  {
    id: 8,
    title: "Dior J'adore",
    price: 89.99,
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    price: 69.99,
    description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    price: 79.99,
    description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    image: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png"
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    price: 1899.99,
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png"
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    price: 2499.99,
    description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    price: 299.99,
    description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    image: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png"
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    image: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png"
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    price: 799.99,
    description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    image: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png"
  },
  {
    id: 16,
    title: "Apple",
    price: 1.99,
    description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
  },
  {
    id: 17,
    title: "Beef Steak",
    price: 12.99,
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
  },
  {
    id: 18,
    title: "Cat Food",
    price: 8.99,
    description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
  },
  {
    id: 19,
    title: "Chicken Meat",
    price: 9.99,
    description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png"
  },
  {
    id: 20,
    title: "Cooking Oil",
    price: 4.99,
    description: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
  },
  {
    id: 21,
    title: "Cucumber",
    price: 1.49,
    description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
  },
  {
    id: 22,
    title: "Dog Food",
    price: 10.99,
    description: "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
  },
  {
    id: 23,
    title: "Eggs",
    price: 2.99,
    description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
  },
  {
    id: 24,
    title: "Fish Steak",
    price: 14.99,
    description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
  },
  {
    id: 25,
    title: "Green Bell Pepper",
    price: 1.29,
    description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
  },
  {
    id: 26,
    title: "Green Chili Pepper",
    price: 0.99,
    description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
  },
  {
    id: 27,
    title: "Honey Jar",
    price: 6.99,
    description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
  },
  {
    id: 28,
    title: "Ice Cream",
    price: 5.49,
    description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png"
  },
  {
    id: 29,
    title: "Juice",
    price: 3.99,
    description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
  },
  {
    id: 30,
    title: "Kiwi",
    price: 2.49,
    description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    image: "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
  }
];
export default products;
