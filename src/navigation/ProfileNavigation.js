import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Profile from '../screens/profile';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigation;