import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import MyRecipes from '../screens/myRecipes/index';
import AddRecipe from '../screens/myRecipes/containers/AddRecipe';

// Utils
import { Colors } from '../common/utils/constants';

const MyRecipesStack = createStackNavigator();

const MyRecipesNavigation = () => {

    return (
        <MyRecipesStack.Navigator>
            <MyRecipesStack.Screen
                name="MyRecipes"
                component={MyRecipes}
                options={{
                    headerTitle: 'My Recipes',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerLeft: null,
                }}
            />
            <MyRecipesStack.Screen
                name="AddRecipe"
                component={AddRecipe}
                options={{
                    headerTitle: 'Add Recipe',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                }}
            />
        </MyRecipesStack.Navigator>
    );
};

export default MyRecipesNavigation;