import React from 'react'
import { View, ActivityIndicator } from 'react-native';

// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../utils/constants';

const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: ${(props) => (props.variant ? props.variant : Colors.primary)};
    border-color: ${(props) => (props.borderColor ? props.borderColor : Colors.primary)};
    border-width: ${(props) => (props.borderWidth ? "0px" : "1px")};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.text ? props.text : Colors.white)};
    margin: 0 8px;
`;

const Button = ({ title, onPress, iconFront, iconBack, isLoading, ...props }) => {
    return (
        <ButtonContainer onPress={onPress} {...props}>
            <ButtonText text={props.text}>
                {iconFront && iconFront}
                {title}
                {iconBack && iconBack}
                {isLoading && <ActivityIndicator size="small" color={Colors.white} />}
            </ButtonText>
        </ButtonContainer>
    )
}

export default Button