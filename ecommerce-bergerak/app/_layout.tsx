import "@/global.css";
import { Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
}
