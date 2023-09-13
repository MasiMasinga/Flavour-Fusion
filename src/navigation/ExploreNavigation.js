import React from 'react';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Explore from '../screens/explore';

const ExploreStack = createStackNavigator();

const ExploreNavigation = () => {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen
                name="Explore"
                component={Explore}
                options={{ headerShown: false }}
            />
        </ExploreStack.Navigator>
    );
};

export default ExploreNavigation;