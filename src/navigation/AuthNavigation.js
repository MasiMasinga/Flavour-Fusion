import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Context
import { AuthContext } from '../common/context/AuthContext';

// Screens
import Onboarding from '../screens/onboarding';
import Login from '../screens/auth/login';
import MainTabNavigation from './MainTabNavigation';
import SignUp from '../screens/auth/signUp';
import ForgotPassword from '../screens/auth/forgotPassword';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
        </Stack.Navigator>

    )
}

export default AuthNavigation