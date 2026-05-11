import { useSignUp } from "@clerk/expo";
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

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");

  const onSignUpPress = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isLoaded) return;

    setIsSubmitting(true);

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
        username: form.username,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerifying(true);
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    setIsSubmitting(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
        Alert.alert("Error", "Verification failed");
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].message || "An error occurred");
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
                {verifying ? "Verify your email" : "Sign up for Voicee"}
              </Text>
            </View>

            {!verifying ? (
              <>
                <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  otherStyles="mt-10"
                  placeholder="Choose a username"
                />

                <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
                  placeholder="Enter your email"
                />

                <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
                  placeholder="Choose a password"
                />

                <CustomButton
                  title="Sign Up"
                  handlePress={onSignUpPress}
                  containerStyles="mt-10"
                  isLoading={isSubmitting}
                />
              </>
            ) : (
              <>
                <FormField
                  title="Verification Code"
                  value={code}
                  handleChangeText={(e) => setCode(e)}
                  otherStyles="mt-10"
                  keyboardType="numeric"
                  placeholder="Enter the code sent to your email"
                />

                <CustomButton
                  title="Verify Email"
                  handlePress={onPressVerify}
                  containerStyles="mt-10"
                  isLoading={isSubmitting}
                />
              </>
            )}

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-primary font-ubuntu">
                Have an account already?
              </Text>
              <Link
                href="/(auth)/sign-in"
                className="text-lg font-ubuntu-bold text-accent"
              >
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
