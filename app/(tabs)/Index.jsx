import * as React from 'react';
import { View, Image, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';// Make sure to import your screen components
import { icons } from '../../constants'; // Ensure this path is correct and `icons` is an object with your icons
import Home from './home';
import Create from './create';
import Profile from './profile';
import Bookmark from './bookmark';

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
        {
          name
        }
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (

      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor:'#CDCDE0',
        tabBarStyle:{
          backgroundColor:'#161622',
          borderTopWidth:1,
          borderTopColor:'#232533',
          height:84,
        },
      }}>
        <Tab.Screen name="Home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color, focused}) => (
            <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}

            />
          ),
        }}

        component={Home} />
        <Tab.Screen name="Bookmark"
        options={{
          title:'Bookmark',
          headerShown:false,
          tabBarIcon:({color, focused}) => (
            <TabIcon
            icon={icons.upload}
            color={color}
            name="Bookmark"
            focused={focused}

            />
          ),
        }}

        component={Bookmark} />
        <Tab.Screen name="Create"
        options={{
          title:'Create',
          headerShown:false,
          tabBarIcon:({color, focused}) => (
            <TabIcon
            icon={icons.plus}
            color={color}
            name="Create"
            focused={focused}

            />
          ),
        }}

        component={Create} />
        <Tab.Screen name="Profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused}) => (
            <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}

            />
          ),
        }}

        component={Profile} />

      </Tab.Navigator>
  );
}

