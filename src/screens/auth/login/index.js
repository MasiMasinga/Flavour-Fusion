import React from 'react'

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// React Hook Form
import { useForm, Controller } from "react-hook-form"

// Styled Components
import styled from 'styled-components/native';

// Hooks
import useAuth from '../../../common/hooks/useAuth';

// Components
import Button from '../../../common/components/Button';
import Text from '../../../common/components/Text';
import Input from '../../../common/components/Input';
import AuthForm from '../components/FormContainer';

// Utils
import { Colors, ValidationMessages } from '../../../common/utils/constants';
import { isValidEmail } from '../../../common/utils/validations';

const DividerContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: ${Colors.black};
  width: 45%;
`;

const Login = () => {
    const { loading, login, googleLogin } = useAuth();
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data) => {
        login(data);
    }

    return (
        <AuthForm>
            <Text color={Colors.primary} size="30px" weight="700">
                Login
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
            <Text size="14px" weight="700" mt="5px" onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
            </Text>
            <Button
                title="Login"
                onPress={handleSubmit(onSubmit)}
                isLoading={loading}
            />
            <Text weight="700" mt={'10px'}>
                Don't have an account?
                <Text
                    color={Colors.primary}
                    weight="700"
                    onPress={() => navigation.navigate('SignUp')}
                >
                    {""} Sign Up
                </Text>
            </Text>
            <DividerContainer>
                <Divider />
                <Text size="10px" weight='700'>OR</Text>
                <Divider />
            </DividerContainer>
            <Button
                variant={Colors.white}
                borderColor={Colors.black}
                text={Colors.black}
                iconFront={<AntDesign name="google" size={15} color="black" />}
                title="Continue with Google"
                onPress={() => googleLogin()}
            />
        </AuthForm>
    )
}

export default Login