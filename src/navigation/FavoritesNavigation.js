import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Favorites from '../screens/favorites';

const FavoritesStack = createStackNavigator();

const FavoritesNavigation = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen
                name="Favorites"
                component={Favorites}
                options={{ headerShown: false }}
            />
        </FavoritesStack.Navigator>
    );
};

export default FavoritesNavigation;