import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

// Styled Components
import styled from 'styled-components/native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Supabase
import { supabase } from '../../../config/supabase'

// React Native Toastify
import Toast from 'react-native-toast-message';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Components
import ScreenLayout from '../../common/layout/ScreenLayout'
import Button from '../../common/components/Button'
import Text from '../../common/components/Text'

// Utils
import { Colors } from '../../common/utils/constants'

const AvatarContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${Colors.greyMed};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ActivityIndicatorContainer = styled.View`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const AvatarText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const UserDetailsContainer = styled.View`
  gap: 5px;
`;

const Profile = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            Toast.show({
                type: 'error',
                text1: 'An error fetching user occurred',
            });
            return;
        } else {
            setUser(user);
        }
        setLoading(false);
    }

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
        } else {
            navigation.navigate('Login');
            Toast.show({
                type: 'success',
                text1: 'Logged Out successfully',
            });
        }
    }

    return (
        <ScreenLayout>
            {
                loading ?
                    <ActivityIndicatorContainer>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </ActivityIndicatorContainer>
                    :
                    <>
                        <AvatarContainer>
                            <AvatarText>MM</AvatarText>
                        </AvatarContainer>
                        <UserDetailsContainer>
                            <Text size="14px">Masibonge Masinga</Text>
                            <Text size="14px" mb="10px">masingamasibonge@gmail.com</Text>
                        </UserDetailsContainer>
                    </>
            }
            <Button
                title="Update User Details"
                onPress={() => navigation.navigate('UpdateUserDetails')}
            />
            <Button
                title="Logout"
                iconFront={<Ionicons name="ios-log-out" size={24} color="white" />}
                onPress={handleLogout}
            />
        </ScreenLayout>
    )
}

export default Profile