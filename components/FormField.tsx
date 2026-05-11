import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants/icons";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-primary font-ubuntu-medium">{title}</Text>

      <View className="w-full h-16 px-4 bg-muted rounded-2xl border-2 border-muted focus:border-accent flex-row items-center">
        <TextInput
          className="flex-1 text-primary font-ubuntu-medium text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.play : icons.play} // Replace with eye icons if available
              className="w-6 h-6"
              resizeMode="contain"
              tintColor="#081126"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
