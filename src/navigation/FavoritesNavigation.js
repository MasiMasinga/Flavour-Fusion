import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Favorites from '../screens/favorites';

// Utils
import { Colors } from '../common/utils/constants';

const FavoritesStack = createStackNavigator();

const FavoritesNavigation = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerTitle: 'Favorites',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerLeft: null,
                }}
            />
        </FavoritesStack.Navigator>
    );
};

export default FavoritesNavigation;