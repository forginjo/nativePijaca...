import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';
import {TouchableOpacity, Alert, Animated} from 'react-native';

const BoxAnimated = Animated.createAnimatedComponent(Box);

class LoginScreen extends Component {
    state = {
        opacity: new Animated.Value(0),
        position: new Animated.Value(0),

    }
    opacityAnim = () => {
        Animated.timing(this.state.opacity,{
            toValue: 1,
            duration:200,
            delay: 200
        }).start()
    }
    positionAnim = () => {
        Animated.timing(this.state.position,{
            toValue: 1,
            duration:300,
            useNativeDriver:true,
        }).start()
    }
    componentDidMount() {
        Animated.parallel([this.positionAnim(),this.opacityAnim()]).start();
      
    }
    onGooglePress = () => {
        Alert.alert('Google pressed')
    }
    onFacebookPress = () => {
       Alert.alert('Facebook pressed')
    }
    render() {
        const {opacity} = this.state;
        const logoTranslate = this.state.position.interpolate({
            inputRange: [0,1],
            outputRange: [150,0]
        });
        return (
            <Box f={1} center bg='white'>
            <Animated.View style={{flex:1, transform:[{
                translateY: logoTranslate,
            }]}}>
            <Box f={1} center>
          <OnboardingLogo />
          </Box>
          </Animated.View>
          <BoxAnimated f={0.9} w={'100%'} style={{opacity}}>
          <LoginButton onPress={this.onGooglePress} type='google'>Continue with Google</LoginButton>

          <LoginButton onPress={this.onFacebookPress} type='facebook'>Continue with Facebook</LoginButton>



          </BoxAnimated>
            </Box>

        );
    }
}

export default LoginScreen;