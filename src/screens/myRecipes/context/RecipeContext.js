import React, { createContext, useEffect, useState } from "react";

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Supabase
import { supabase } from "../../../../config/supabase";

// React Native Toastify
import Toast from 'react-native-toast-message';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     handleGetRecipes();
    // }, []);

    // useEffect(() => {
    //     handleGetRecipes();
    // }, [recipes]);

    const handleCreateRecipe = async (data) => {
        setLoading(true);
        const { error } = await supabase.from('recipes').insert([
            {
                title: data.title,
                description: data.description,
                category: data.category,
                user_id: supabase.auth.user().id,
            },
        ]);
        if (error) {
            Toast.error(`${error.message}`);
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            navigation.navigate('MyRecipes');
            Toast.show({
                type: 'success',
                text1: 'Recipe created successfully',
            });
            setLoading(false);
        }
    };

    const handleGetRecipes = async () => {
        const { data, error } = await supabase
            .from('recipes')
            .select('*')
            .order('id', { ascending: false });

        if (error) {
            console.error('Error getting recipes:', error);
        } else {
            setRecipes(data);
        }
    }

    const handleGetRecipe = async (id) => {
        const { data, error } = await supabase
            .from('recipes')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error getting recipe:', error);
        } else {
            return data;
        }
    };

    const handleUpdateRecipe = async (data) => {
        setLoading(true);
        const { error } = await supabase
            .from('recipes')
            .update({
                title: data.title,
                description: data.description,
                category: data.category,
            })
            .eq('id', data.id);

        if (error) {
            Toast.error(`${error.message}`);
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            navigation.navigate('MyRecipes');
            Toast.show({
                type: 'success',
                text1: 'Recipe updated successfully',
            });
            setLoading(false);
        }
    };

    const handleDeleteRecipe = async (id) => {
        setLoading(true);
        const { error } = await supabase
            .from('recipes')
            .delete()
            .eq('id', id);

        if (error) {
            Toast.error(`${error.message}`);
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
            });
            setLoading(false);
        } else {
            Toast.show({
                type: 'success',
                text1: 'Recipe deleted successfully',
            });
            setLoading(false);
        }
    };

    let value = {
        recipes,
        loading,
        handleCreateRecipe,
        handleGetRecipes,
        handleGetRecipe,
        handleUpdateRecipe,
        handleDeleteRecipe,
    }

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};
