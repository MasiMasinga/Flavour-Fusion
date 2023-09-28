import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Profile from '../screens/profile';

// Utils
import { Colors } from '../common/utils/constants';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: 'Profile',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerLeft: null,
                }}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigation;