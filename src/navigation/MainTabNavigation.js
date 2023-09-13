import React from 'react';

// Expo Icons
import { Feather, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

// React Native Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Navigation Components
import ProfileNavigation from './ProfileNavigation';

// Utils
import { Colors } from '../common/utils/constants';
import ExploreNavigation from './ExploreNavigation';
import MyRecipesNavigation from './MyRecipesNavigation';
import FavoritesNavigation from './FavoritesNavigation';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors.black,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Explore"
                component={ExploreNavigation}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: () => (
<Feather name="search" size={30} color={Colors.primary} />
),
                }}
            />
            <Tab.Screen
                name="My Recipes"
                component={MyRecipesNavigation}
                options={{
                    tabBarLabel: 'My Recipes',
                    tabBarIcon: () => (
                        <Ionicons name="ios-fast-food-outline" size={30} color={Colors.primary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigation}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: () => (
                        <MaterialIcons name="favorite-border" size={30} color={Colors.primary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigation}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <FontAwesome name="user-circle-o" color={Colors.primary} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigation