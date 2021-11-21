import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import SignUp from "../screens/SignUp";

const screens = {
    SignUpPage:{
        screen: SignUp
    },
    HomePage:{
        screen: Home
    }
    
}
