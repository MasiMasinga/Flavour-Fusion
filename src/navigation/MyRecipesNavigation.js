import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import MyRecipes from '../screens/myRecipes';

const MyRecipesStack = createStackNavigator();

const MyRecipesNavigation = () => {
    return (
        <MyRecipesStack.Navigator>
            <MyRecipesStack.Screen
                name="MyRecipes"
                component={MyRecipes}
                options={{ headerShown: false }}
            />
        </MyRecipesStack.Navigator>
    );
};

export default MyRecipesNavigation;