import React from 'react';
import { Box, Text} from 'react-native-design-utility';

import { images } from '../constants/images';
import { Image} from 'react-native';


const OnboardingLogo = () => (

    <Box center>
    <Box mb='sm'>
        <Image source = {images.logo} />
        </Box>

        <Text size='xl' color='greyLight'>mobi<Text size='xl' color='green'>Pijaca</Text></Text>
        <Text size='xs'>Naruči svoj ceger</Text>
    </Box>
)

export default OnboardingLogo;