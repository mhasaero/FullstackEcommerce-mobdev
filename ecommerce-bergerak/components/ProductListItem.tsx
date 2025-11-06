import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Link } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Pressable } from "react-native";

export default function ProductItemList({ product }: any) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg m-2 flex-1">
          <Image
            source={{
              uri: product.image,
            }}
            className="mb-6 h-[160px] w-full rounded-md aspect-[263/240]"
            alt={product.name}
            resizeMode="contain"
          />

          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <Heading size="md" className="">
            ${product.price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
