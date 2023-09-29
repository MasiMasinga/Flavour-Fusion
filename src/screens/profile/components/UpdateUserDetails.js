import { View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

// React Navigation
import { useNavigation } from '@react-navigation/native';

// React Hook Form
import { useForm, Controller } from "react-hook-form"

// Styled Components
import styled from 'styled-components/native';

// Supabase
import { supabase } from '../../../../config/supabase'

// React Native Toastify
import Toast from 'react-native-toast-message';

// Components
import ScreenLayout from '../../../common/layout/ScreenLayout'
import AuthForm from '../../auth/components/FormContainer';
import Text from '../../../common/components/Text';
import Input from '../../../common/components/Input';
import Button from '../../../common/components/Button';

// Utils
import { Colors, ValidationMessages } from '../../../common/utils/constants';

const UpdateUserDetails = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data) => {
        setLoading(true);
        const { error } = await supabase.auth.updateUser({
            email: data.email,
            password: data.password,
        });
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
        } else {
            Toast.show({
                type: 'success',
                text1: 'User details updated successfully',
            });
            navigation.goBack();
        }
        setLoading(false);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert(
                'Discard Changes?',
                'Are you sure you want to leave without saving your changes?',
                [
                    {
                        text: "Don't Leave",
                        style: 'cancel',
                        onPress: () => { },
                    },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => {
                            navigation.dispatch(e.data.action);
                        },
                    },
                ],
            );
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <AuthForm>
            <Text color={Colors.black} size="25px" weight="700">
                Update User Details
            </Text>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: ValidationMessages.required,
                    validate: (value) =>
                        isValidEmail(value) ||
                        ValidationMessages.invalidEmail,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Email"
                        borderColor={errors.email}
                        onChangeText={(value) => onChange(value)}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
            />
            {errors.email && <Text size="10px" color={Colors.error}>Email is required.</Text>}
            <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder="Password"
                        borderColor={errors.password}
                        onChangeText={(value) => onChange(value)}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
            />
            {errors.password && <Text size="10px" color={Colors.error}>Password is required.</Text>}
            <Button
                title="Update User Details"
                onPress={handleSubmit(onSubmit)}
                isLoading={loading}
            />
        </AuthForm>
    )
}

export default UpdateUserDetails