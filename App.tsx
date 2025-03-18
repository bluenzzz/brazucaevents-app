import { StatusBar } from "react-native";

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";

import { Home } from "./src/screens/Home";
import { PageProvider } from "./src/contexts/PageContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_Regular: Urbanist_400Regular,
    Urbanist_Bold: Urbanist_700Bold,
    Urbanist_SemiBold: Urbanist_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <PageProvider>
        <Home />
      </PageProvider>
    </>
  );
}
