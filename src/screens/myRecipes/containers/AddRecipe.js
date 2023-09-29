import React, { useState, useEffect, } from 'react';
import { Image, ScrollView, Alert } from 'react-native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// React Native Picker
import { Picker } from '@react-native-picker/picker';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styled Components
import styled from 'styled-components/native';

// React Native Image Picker
import * as ImagePicker from 'expo-image-picker';

// Supabase
import { supabase } from '../../../../config/supabase';

// Components
import Button from '../../../common/components/Button';

// Utils
import { Colors } from '../../../common/utils/constants';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const InputContainer = styled.View`
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonLabelText = styled.Text`
  font-size: 12px;
`;

const TextInputStyled = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AddButton = styled.TouchableOpacity`
  background-color: ${Colors.blue};
  padding: 5px 10px;
  border-radius: 8px;
  margin-top: 10px;
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  border-radius: 8px;
`;

const DescriptionInput = styled.TextInput`
  height: 120px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;

const CategoryPicker = styled.View`
  border: 1px solid #ccc;
  border-width: 1px;
  border-color: ${Colors.black};
  border-radius: 8px;
  width: 100%;
`;

const AddImageContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const AddRecipe = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const [category, setCategory] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [image, setImage] = useState(null);


    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert(
                'Discard Changes?',
                'Are you sure you want to leave without saving your changes?',
                [
                    {
                        text: "Don't Leave",
                        style: 'cancel',
                        onPress: () => { },
                    },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => {
                            navigation.dispatch(e.data.action);
                        },
                    },
                ],
            );
        });
        return unsubscribe;
    }, [navigation]);

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const deleteIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    };

    const handleIngredientChange = (text, index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = text;
        setIngredients(updatedIngredients);
    };

    const handleSubmit = async () => {
        try {
            const { data: imageUploadResponse, error: imageUploadError } = await supabase.storage
                .from('recipes')
                .upload(`recipe_images/${title}.jpg`, imageUri, {
                    contentType: 'image/jpeg',
                });

            if (imageUploadError) {
                console.error('Error uploading image:', imageUploadError);
                return;
            }
            const { data, error } = await supabase
                .from('recipes')
                .insert([
                    {
                        title,
                        description,
                        ingredients: JSON.parse(ingredients),
                        instructions,
                        cooking_time: cookingTime,
                        user_id: supabase.auth.user().id,
                        image_url: imageUploadResponse.Key,
                    },
                ])
                .single();

            if (error) {
                console.error('Error adding recipe:', error);
            } else {
                console.log('Recipe added successfully:', data);
                setTitle('');
                setDescription('');
                setIngredients('');
                setInstructions('');
                setCookingTime('');
                setImageUri(null);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <ScrollView>
            <Container>
                <InputContainer>
                    <Label>Upload Image</Label>
                    <AddImageContainer>
                        {image ? (
                            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                        ) : null}
                        <Button
                            title="Upload Recipe Image"
                            onPress={handlePickImage}
                            iconFront={<AntDesign name="upload" size={15} color={Colors.white} />}
                        />
                    </AddImageContainer>
                </InputContainer>
                <InputContainer>
                    <Label>Title</Label>
                    <TextInputStyled
                        placeholder="Recipe Title"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Category</Label>
                    <CategoryPicker>
                        <Picker
                            selectedValue={category}
                            onValueChange={(itemValue) => setCategory(itemValue)}
                            dropdownIconColor={'black'}
                            style={{ width: '100%' }}
                        >
                            <Picker.Item label="Select a Category" value="" />
                            <Picker.Item label="Breakfast" value="breakfast" />
                            <Picker.Item label="Lunch" value="lunch" />
                            <Picker.Item label="Dinner" value="dinner" />
                        </Picker>
                    </CategoryPicker>
                </InputContainer>
                <Row>
                    <InputContainer style={{ flex: 1, marginRight: 5 }}>
                        <Label>Preparation Time</Label>
                        <TextInputStyled
                            placeholder="Prep Time"
                            value={prepTime}
                            onChangeText={(text) => setPrepTime(text)}
                        />
                    </InputContainer>
                    <InputContainer style={{ flex: 1, marginLeft: 5 }}>
                        <Label>Cooking Time</Label>
                        <TextInputStyled
                            placeholder="Cook Time"
                            value={cookTime}
                            onChangeText={(text) => setCookTime(text)}
                        />
                    </InputContainer>
                </Row>
                <InputContainer>
                    <Label>Ingredients</Label>
                    <ScrollView>
                        {ingredients.map((ingredient, index) => (
                            <Row key={index}>
                                <TextInputStyled
                                    placeholder={`Ingredient ${index + 1}`}
                                    value={ingredient}
                                    onChangeText={(text) => handleIngredientChange(text, index)}
                                />
                                <DeleteButton onPress={() => deleteIngredient(index)}>
                                    {/* <ButtonLabelText>Delete</ButtonLabelText> */}
                                    <AntDesign name="delete" size={24} color={Colors.black} />
                                </DeleteButton>
                            </Row>
                        ))}
                    </ScrollView>
                    <AddButton onPress={addIngredient}>
                        <ButtonLabelText>Add Ingredient</ButtonLabelText>
                    </AddButton>
                </InputContainer>
                <InputContainer>
                    <Label>Description</Label>
                    <DescriptionInput
                        placeholder="Recipe Description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        multiline={true}
                        numberOfLines={4}
                    />
                </InputContainer>
                <Button title="Add Recipe" onPress={handleSubmit} />
            </Container>
        </ScrollView>
    );
};

export default AddRecipe;
