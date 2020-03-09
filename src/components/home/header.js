import React from 'react';
import * as Style from './styled/header';
import * as Colors from '../common/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = () => {
  return (
    <Style.Header>
      <IconFeather name='menu' size={32} color={Colors.primary} />
      <IconAnt name='twitter' size={30} color={Colors.primary} />
      <IconMaterial name='star-four-points-outline' size={32} color={Colors.primary} />
    </Style.Header>
  )
}

export default HomePage;