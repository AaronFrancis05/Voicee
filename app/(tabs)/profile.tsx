import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth, useUser } from '@clerk/expo'
import { icons } from '@/constants/icons'

const Profile = () => {
    const { signOut } = useAuth();
    const { user } = useUser();

    return (
        <SafeAreaView className="flex-1 bg-background px-4">
            <View className="items-center mt-10">
                <View className="w-24 h-24 rounded-full border-2 border-accent p-1">
                    <Image
                        source={{ uri: user?.imageUrl }}
                        className="w-full h-full rounded-full"
                        resizeMode="cover"
                    />
                </View>
                <Text className="text-2xl font-ubuntu-bold text-primary mt-4">
                    {user?.fullName || user?.username || "User"}
                </Text>
                <Text className="text-base font-ubuntu text-muted-foreground">
                    {user?.primaryEmailAddress?.emailAddress}
                </Text>
            </View>

            <View className="mt-10">
                <TouchableOpacity
                    onPress={() => signOut()}
                    className="flex-row items-center p-4 bg-white rounded-2xl shadow-sm"
                >
                    <Image
                        source={icons.play} // Using play as a placeholder for logout icon
                        className="w-6 h-6 rotate-180"
                        tintColor="#dc2626"
                    />
                    <Text className="text-lg font-ubuntu-medium text-destructive ml-4">
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Profile
