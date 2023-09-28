import { useState, useContext } from 'react';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Supabase
import { supabase } from '../../../config/supabase';

// React Native Toastify
import Toast from 'react-native-toast-message';

const useAuth = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const signUp = async (data) => {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });
        if (error) {
            Toast.error(`${error.message}`);
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            navigation.navigate('Login');
            Toast.show({
                type: 'success',
                text1: 'Account created successfully',
            });
            setLoading(false);
        }
    };

    const login = async (data) => {
        setLoading(true);
        const { error } = supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (error) {
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            navigation.navigate('MainTabNavigation');
            Toast.show({
                type: 'success',
                text1: 'Logged In successfully',
            });
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        const { error } = supabase.auth.signOut();
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            navigation.navigate('Login');
            Toast.show({
                type: 'success',
                text1: 'Logged Out successfully',
            });
            setLoading(false);
        }
    };

    const forgotPassword = async (data) => {
        setLoading(true);
        const { error } = supabase.auth.resetPasswordForEmail(data.email);
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            Toast.show({
                type: 'success',
                text1: 'Password reset email sent successfully'
            });
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        navigation.navigate('MainTabNavigation');
        // const { data, error } = await supabase.auth.signInWithOAuth({
        //     provider: 'google',
        //     options: {
        //         queryParams: {
        //             access_type: 'offline',
        //             prompt: 'consent',
        //         },
        //     },
        // });

        // if (data) {
        //     navigation.navigate('MainTabNavigation');
        //     Toast.show({
        //         type: 'success',
        //         text1: 'Logged In successfully',
        //     });
        //     setLoading(false);
        // } else if (error) {
        //     Toast.show({
        //         type: 'error',
        //         text1: 'An error occurred',
        //     });
        //     setLoading(false);
        // }
    }

    return {
        loading,
        signUp,
        login,
        logout,
        forgotPassword,
        handleGoogleLogin,
    }
}

export default useAuth;