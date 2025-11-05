import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Icon, ArrowRightIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "./ui/button";
import { Box } from "./ui/box";

export default function ProductItemList({ product }: any) {
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
