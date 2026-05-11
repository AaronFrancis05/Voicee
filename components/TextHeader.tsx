import {View, Text, Image, ImageSourcePropType} from 'react-native'
import React from 'react'

interface TextHeaderProps {
    title: string | React.ReactNode;
    image?: ImageSourcePropType;
    icon?: ImageSourcePropType;
    otherStyles?: string;
}

const TextHeader = ({ title, image, icon, otherStyles }: TextHeaderProps) => {
    return (
        <View className={`flex-row items-center justify-between mt-2 px-5 ${otherStyles}`}>
            <View className={'flex-row items-center gap-2'}>
                {image && (
                    <View className={'w-14 h-14 rounded-full  items-center justify-center'}>
                        <Image source={image} className={'w-14 h-14 rounded-full'} resizeMode="contain" />
                    </View>
                )}
                <Text className="text-xl font-bold text-foreground items-center justify-center">
                    {title}
                </Text>
            </View>
            {icon && (
                <View>
                    <Image
                        source={icon}
                        className={'w-8 h-8'}
                        resizeMode="contain"
                        tintColor={"#081126"}
                    />
                </View>
            )}
        </View>
    )
}
export default TextHeader
