import React from 'react'

// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../utils/constants';

const TextInputContainer = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${Colors.greyLight};
    border-radius: 6px;
    justify-content: center;
    padding: 0 15px;
    margin-top: 8px;
    border-color: ${Colors.black};
    border-width: 1px;
    color: ${Colors.black};
    border-color: ${(props) => (props.borderColor ? 'red' : Colors.black)};
`;

const InputField = styled.TextInput`
    flex: 1;
    font-size: 14px;
`;

const Input = ({
    placeholder,
    onChangeText,
    value,
    onBlur,
    numberOfLines,
    placeholderTextColor,
    secureTextEntry,
    textAlign,
    borderColor = false,
    onSubmitEditing,
    multiline,
}) => {
    return (
        <TextInputContainer borderColor={borderColor}>
            <InputField
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                onBlur={onBlur}
                numberOfLines={numberOfLines}
                multiline={multiline}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                textAlign={textAlign}
                borderColor={borderColor}
                onSubmitEditing={onSubmitEditing}
            />
        </TextInputContainer>
    )
}

export default Input