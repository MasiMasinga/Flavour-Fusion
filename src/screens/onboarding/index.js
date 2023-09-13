import React from 'react'

// React Navigation 
import { useNavigation } from '@react-navigation/native';

// Styled Components
import styled from 'styled-components/native';

// Components
import Button from '../../common/components/Button';
import Text from '../../common/components/Text';

// Utils
import { Colors } from '../../common/utils/constants';

// Image
import CurryChicken from '../../../assets/images/curry-chicken.jpg';

const Container = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); 
`;

const Onboarding = () => {
    const navigation = useNavigation();

    return (
        <Container source={CurryChicken}>
            <Overlay />
            <Text weight='700' mb='10px' size="35px" color={Colors.white}>
                Flavour Fusion
            </Text>
            <Text weight='500' mb='30px' size="14px" color={Colors.white}>
                Flavour Fusion is a recipe app that allows you to search for recipes
                based on the ingredients you have in your kitchen.
            </Text>
            <Button
                title="Get Started"
                onPress={() => navigation.navigate('SignUp')}
            />
        </Container>
    )
}

export default Onboarding