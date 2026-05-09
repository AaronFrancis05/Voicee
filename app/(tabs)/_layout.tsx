import {Tabs} from "expo-router";
import {Image, View,Text} from "react-native";
import {icons} from "@/constants/icons";

interface TabBarIconProps{
    focused:boolean;
    icon:any;
    otherStyles:string;
}

export default function Tabslayout(){
    const TabIcon=({focused,icon,otherStyles}:TabBarIconProps)=>(
        <View className={'flex items-center justify-center flex-1'}>
            <Image
                source={icon}
                className="w-6 h-6"
                resizeMode={"contain"}
                tintColor={focused ? "#ea7a53" : "fff8e7"}

            />

        </View>
    )


    return <Tabs
        screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"

        },
        tabBarStyle:{
            backgroundColor:"#0f0D23",
            position:"absolute",
            borderTopWidth:1,
            borderTopColor:"#081126",
            marginHorizontal:20,
            borderRadius:40,
            height:50,
            marginBottom:40

        }

    }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title:"Home",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <TabIcon  icon={icons.home1} focused={focused} otherStyles="" />
                )
            }}

        />
        <Tabs.Screen
            name="detect"
            options={{
                title:"Detect",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <TabIcon  icon={icons.activity} focused={focused} otherStyles="" />
                )
            }}

        />
        <Tabs.Screen
            name="profile"
            options={{
                title:"Profile",
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <TabIcon  icon={icons.person} focused={focused} otherStyles="" />
                )
            }}

        />
    </Tabs>
}
