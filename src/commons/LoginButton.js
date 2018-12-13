import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { TouchableOpacity, Image} from 'react-native';
import { images } from '../constants/images';

const bgColor = type => {
    switch(type) {
        case 'google':
        return 'googleBlue';
        case 'facebook':
        return 'facebookBlue';
        default:
        return 'white';
    }
}

const LoginButton = ({children, type, onPress}) => (
<TouchableOpacity onPress={onPress}>
              <Box dir='row' align='center' border={1} shadow={1} bg={bgColor(type)} w='80%' self='center' p='xs' radius='sm' mb='sm'>
              <Box mr='sm'>
                <Box bg='white' h={32} w={32} radius='sm' center>
                    {type == 'google' && <Image source={images.googleColorIcon} />}
                    {type == 'facebook' && <Image source={images.facebookColorIcon} />}
                </Box>

              </Box>
        
            <Box>
                  <Text color='white' size='md'>{children}</Text>
            </Box>
              </Box>
          </TouchableOpacity>
)

export default LoginButton;
