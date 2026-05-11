import { useClerk, useSignIn } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { icons } from "../../constants/icons";

const SignIn = () => {
  const { setActive } = useClerk();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, isLoaded } = useSignIn();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isLoaded || !signIn) return;

    setIsSubmitting(true);

    try {
      const { error } = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (error) {
        Alert.alert("Error", error.message || "Login failed");
        return;
      }

      if (signIn.status === "complete" && signIn.createdSessionId) {
        await setActive({ session: signIn.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(signIn, null, 2));
        Alert.alert("Error", "Login failed. Please check your credentials.");
      }
    } catch (error: any) {
      Alert.alert("Error", error.errors?.[0]?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-full justify-center min-h-[85vh] px-4 my-6">
            <View className="items-center mb-10">
              <Image
                source={icons.logo}
                resizeMode="contain"
                className="w-[115px] h-[35px]"
                tintColor="#081126"
              />
              <Text className="text-2xl text-primary mt-10 font-ubuntu-bold">
                Log in to Voicee
              </Text>
            </View>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
              otherStyles="mt-7"
              placeholder="Enter your email"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              placeholder="Enter your password"
            />

            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-10"
              isLoading={isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-primary font-ubuntu">
                Don&apos;t have an account?
              </Text>
              <Link
                href="/(auth)/sign-up"
                className="text-lg font-ubuntu-bold text-accent"
              >
                Sign Up
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
