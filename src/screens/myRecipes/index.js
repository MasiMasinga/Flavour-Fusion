import React from 'react'

// Styled Components
import styled from 'styled-components/native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Utils
import { Colors } from '../../common/utils/constants';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center; 
  align-items: center;
  padding: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.backgroundColor || '#2ecc71'}; 
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
  font-weight: bold;
`;

function MyRecipes() {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonContainer>
                <Button
                    backgroundColor={Colors.blue}
                    onPress={() => navigation.navigate('AddRecipe')}
                >
                    <ButtonText>
                        Add Recipe
                    </ButtonText>
                    <AntDesign name="plus" size={24} color={Colors.white} />
                </Button>
                <Button
                    backgroundColor={Colors.yellow}
                    onPress={() => navigation.navigate('EditRecipe')}
                >
                    <ButtonText>Edit Recipe</ButtonText>
                    <AntDesign name="edit" size={24} color={Colors.white} />
                </Button>
                <Button
                    backgroundColor={Colors.red}
                    onPress={() => navigation.navigate('DeleteRecipe')}
                >
                    <ButtonText>
                        Delete Recipe
                    </ButtonText>
                    <AntDesign name="delete" size={24} color={Colors.white} />
                </Button>
            </ButtonContainer>
        </Container>
    );
}

export default MyRecipes;
