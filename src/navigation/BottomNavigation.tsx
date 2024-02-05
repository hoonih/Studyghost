import * as React from 'react';

import { Main } from '../screens/Main';
import { Calendar } from '../screens/Calendar';
import { Setting } from '../screens/Setting';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomNavigation : React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Main'
                screenOptions={{
                    tabBarInactiveTintColor: '#BDBDBD',
                    tabBarStyle: {
                        height: 100, 
                        paddingTop: 8,
                        borderRadius: 20,
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 12,
                    },
                }
                }       
                >
                <Tab.Screen
                    name="Main"
                    component={ Main }
                    options={{
                        headerShown: false,
                        title: '홈',
                        tabBarIcon: ({color, size}) => (
                          <Icon name="school" color={color} size={30} />
                        ),
                      }}
                />
                <Tab.Screen
                    name="Calendar"
                    component={ Calendar }
                    options={{
                        headerShown: false,
                        title: '캘린더',
                        tabBarIcon: ({color, size}) => (
                          <Icon name="calendar-month" color={color} size={30} />
                        ),
                      }}
                />
                <Tab.Screen
                    name="Setting"
                    component={ Setting }
                    options={{
                        headerShown: false,
                        title: '설정',
                        tabBarIcon: ({color, size}) => (
                          <Icon name="settings" color={color} size={30} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNavigation;