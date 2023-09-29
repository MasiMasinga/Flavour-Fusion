import {  Alert, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'

// Context
import { RecipeContext } from '../context/RecipeContext';

// Styled Components
import styled from 'styled-components/native';

// React Native Swipeable List View
import Swipelist from 'react-native-swipeable-list-view';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Components
import Text from '../../../common/components/Text';

// Utils
import { Colors } from '../../../common/utils/constants';

const RowContainer = styled.View`
  flex-direction: row;
  width: auto;
`;

const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
    height: 80px;
    margin-vertical: 10px;
    background-color: #ffffff;
    justify-content: flex-start;
    padding-left: 10px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
`;

const ActionButton = styled.TouchableOpacity`
    width: 100%;
    margin-vertical: 10px;
    align-items: center;
    flex: 1;
    justify-content: center;
    height: 80px;
    background-color: #ffffff;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
`;

const EditButton = styled(ActionButton)`
  background-color: ${Colors.grey};
`;

const DeleteButton = styled(ActionButton)`
  background-color: ${Colors.red};
`;

const RecipeImage = styled.Image`
  width: 50px; 
  height: 50px; 
  margin-right: 10px;
`;

const RecipeList = () => {
    const { loading, handleDeleteRecipe } = useContext(RecipeContext);

    const recipes = [
        { id: 1, title: 'Recipe 1' },
        { id: 2, title: 'Recipe 2' },
    ];

    return (
        <>
            {
                loading ?
                    <ActivityIndicator size="large" color={Colors.primary} />
                    :
                    <Swipelist
                        data={recipes}
                        renderRightItem={(data, index) => (
                            <CardContainer key={index}>
                                <RecipeImage source={require('../../../../assets/images/curry-chicken.jpg')} />
                                <Text>
                                    {data.title}
                                </Text>
                            </CardContainer>
                        )}
                        renderHiddenItem={(data, index) => (
                            <RowContainer key={index}>
                                <EditButton
                                    onPress={() => {
                                        Alert.alert(
                                            'Edit',
                                            [
                                                {
                                                    text: "Don't Leave",
                                                    style: 'cancel',
                                                    onPress: () => { },
                                                },
                                            ],
                                        );
                                    }}
                                >
                                    <AntDesign name="edit" size={24} color={Colors.black} />
                                </EditButton>
                                <DeleteButton
                                    onPress={() => {
                                        Alert.alert(
                                            'Delete',
                                            [
                                                {
                                                    text: "Don't Leave",
                                                    style: 'cancel',
                                                    onPress: handleDeleteRecipe(data.id),
                                                },
                                            ],
                                        );
                                    }}
                                >
                                    <AntDesign name="delete" size={24} color={Colors.black} />
                                </DeleteButton>
                            </RowContainer>
                        )}
                        rightOpenValue={200}
                    />
            }
        </>
    )
}

export default RecipeList