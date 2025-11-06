import { View, Text, FlatList } from "react-native";
import products from "../assets/products.json";
import ProductItemList from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  // return (
  //   <Button>
  //     <ButtonText>Click Me</ButtonText>
  //   </Button>
  // );
  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName="gap-1"
        columnWrapperClassName="gap-1"
        renderItem={({ item }) => <ProductItemList product={item} />}
      />
    </View>
  );
}
