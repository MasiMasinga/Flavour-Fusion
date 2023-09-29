import React from 'react'

// React Native Navigation
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Context
import { RecipeProvider } from '../screens/myRecipes/context/RecipeContext';

// Components
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RecipeProvider>
                    <AuthNavigation />
                </RecipeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootNavigation