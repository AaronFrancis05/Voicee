import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'

const Detect = () => {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="px-4 mt-6">
                <Text className="text-2xl font-ubuntu-bold text-primary">Detection</Text>
                <Text className="text-base font-ubuntu text-muted-foreground mt-2">
                    Start detecting voices and managing your records.
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default Detect

