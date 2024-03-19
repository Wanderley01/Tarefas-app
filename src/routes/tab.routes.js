import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons';

import Create from '../screens/Create'; 
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(

        <Tab.Navigator screenOptions={{ headerShown: false}} >

            <Tab.Screen
             name="home" 
             component={Home} 
             options={{
               tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
               tabBarLabel: 'Tarefas'
            }}
            />
            
            <Tab.Screen 
            name="create" 
            component={Create} 
            options={{
                tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Novas Tarefas'
             }}
            />

        </Tab.Navigator>
    )
}