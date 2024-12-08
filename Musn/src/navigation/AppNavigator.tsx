import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingScreen';
import darkTheme from '../themes/darkTheme';

const Tab = createBottomTabNavigator();

function AppNavigator(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: darkTheme.tabBarBackgroundColor,
                    },
                    tabBarActiveTintColor: darkTheme.tabBarActiveColor,
                    tabBarInactiveTintColor: darkTheme.tabBarInactiveColor,
                    headerStyle: {
                        backgroundColor: darkTheme.backgroundColor, 
                    },
                    headerTintColor: darkTheme.textColor, 
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Icon name="map-outline" size={size} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Icon name="person-outline" size={size} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => <Icon name="settings-outline" size={size} color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
