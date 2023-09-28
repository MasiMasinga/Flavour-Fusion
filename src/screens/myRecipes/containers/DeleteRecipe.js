import { View, Text } from 'react-native'
import React from 'react'


// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../../../common/utils/constants';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

const DeleteRecipe = () => {
    return (
        <Container>
            <Text>DeleteRecipe</Text>
        </Container>
    )
}

export default DeleteRecipe