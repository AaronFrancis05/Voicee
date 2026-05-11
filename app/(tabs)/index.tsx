import { Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import TextHeader from "@/components/TextHeader";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import { useUser } from "@clerk/expo";

export default function Index() {
  const { user } = useUser();

  return (
    <SafeAreaView
      className="flex-1 bg-background"
    >
      <TextHeader
          title={<Text>Welcome Back, {"\n"}<Text className="text-accent font-ubuntu-bold">{user?.username || user?.firstName || "User"}</Text></Text>}
          image={images.bg}
          icon={icons.setting}
      />


    </SafeAreaView>
  );
}
