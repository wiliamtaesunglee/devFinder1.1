import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/loginScreen.js';
import DevListScreen from './src/screens/devListScreen.js';

const Stack = createStackNavigator()

export default function App() {
    const ref = React.useRef();

    const { getInitialState } = useLinking(ref, {
        prefixes: ['http://localhost:8081', 'devfinder://'],
        config: {
            DevList: 'devlist',
        },
    });

    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState();

    React.useEffect(() => {
        Promise.race([
            getInitialState(),
            new Promise(resolve =>
                // Timeout in 150ms if `getInitialState` doesn't resolve
                // Workaround for https://github.com/facebook/react-native/issues/25675
                setTimeout(resolve, 150)
            ),
        ])
            .catch(e => {
                console.error(e);
            })
            .then(state => {
                if (state !== undefined) {
                    setInitialState(state);
                }

                setIsReady(true);
            });
    }, [getInitialState]);

    if (!isReady) {
        return null;
    }

  return (
    <NavigationContainer initialState={initialState} ref={ref}>
      <Stack.Navigator>
        <Stack.Screen
          name='DevFinder'
          component={LoginScreen}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name='DevList'
          component={DevListScreen}
          options={{ title: 'List Of Developers' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
