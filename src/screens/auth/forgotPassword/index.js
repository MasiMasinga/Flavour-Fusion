import React from 'react'

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// React Hook Form
import { useForm, Controller } from "react-hook-form"

// Styled Components
import styled from 'styled-components/native';

// Components
import Button from '../../../common/components/Button';
import Text from '../../../common/components/Text';
import Input from '../../../common/components/Input';
import AuthForm from '../components/FormContainer';

// Utils
import { Colors, ValidationMessages } from '../../../common/utils/constants';
import { isValidEmail } from '../../../common/utils/validations';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data) => console.log(data)


    return (
        <AuthForm>
            <Text color={Colors.black} size="30px" weight="700">
                Forgot Password
            </Text>
            <Text color={Colors.greyDark} size="12px" weight="700" mt="10px">
                Please enter your account email below and an email will be sent with instructions
                on how to reset your password.
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
            <Button
                title="Send Reset Email"
                onPress={handleSubmit(onSubmit)}
            />
            <Text size="14px" weight="700" mt="5px" onPress={() => navigation.navigate('Login')}>
                Remember Password?
            </Text>
        </AuthForm>
    )
}

export default ForgotPassword