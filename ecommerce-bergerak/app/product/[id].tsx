import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import products from "../../assets/products.json";

import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Link } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Pressable } from "react-native";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Text>Product Not Found</Text>;
  }

  return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
      <Image
        source={{
          uri: product.image,
        }}
        className="mb-6 h-[260px] w-full rounded-md aspect-[263/240]"
        alt={product.name}
        resizeMode="contain"
      />

      <Text className="text-sm font-normal mb-2 text-typography-700">
        ${product.price}
      </Text>
      <Heading size="md" className="mb-4">
        {product.name}
      </Heading>
      <Text className="mb-4" size="md">
        {product.description}
      </Text>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText>Add to Cart</ButtonText>
        </Button>
        <Button variant="outline" className="px-4 py-2 sm:flex-1">
          <ButtonText>Wishlist</ButtonText>
        </Button>
      </Box>
    </Card>
  );
}
