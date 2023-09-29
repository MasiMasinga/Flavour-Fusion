import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Profile from '../screens/profile';
import UpdateUserDetails from '../screens/profile/components/UpdateUserDetails';

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
            <ProfileStack.Screen
                name="UpdateUserDetails"
                component={UpdateUserDetails}
                options={{
                    headerTitle: 'Update User Details',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                }}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigation;