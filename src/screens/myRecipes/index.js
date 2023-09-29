import React, { useContext } from 'react'

// Styled Components
import styled from 'styled-components/native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Utils
import { Colors } from '../../common/utils/constants';

// Components
import RecipeList from './containers/RecipeList';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

const ButtonContainer = styled.View`
  padding: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.backgroundColor || '#2ecc71'}; 
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  font-weight: bold;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.grey};
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
                    <AntDesign name="plus" size={14} color={Colors.white} />
                </Button>
                <Divider />
            </ButtonContainer>
            <RecipeList />
        </Container>
    );
}

export default MyRecipes;
