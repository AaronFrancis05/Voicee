import { Text, View } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-primary"
    >
      <Text className="text-red-500">Welcome to Voice</Text>
    </SafeAreaView>
  );
}
