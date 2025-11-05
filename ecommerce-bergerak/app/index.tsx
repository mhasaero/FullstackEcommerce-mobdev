import { View, Text, FlatList } from "react-native";
import products from "../assets/products.json";
import ProductItemList from "../components/ProductListItem";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItemList product={item} />}
      />
    </View>
  );
}
