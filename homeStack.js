import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Test from './screens/test';
const Stack =createNativeStackNavigator();
const HomeStack=()=>{

    return(
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{headerShown:true}}>
                <Stack.Group> 
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Test' component={Test}/>
                    
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );


}
export  default HomeStack;