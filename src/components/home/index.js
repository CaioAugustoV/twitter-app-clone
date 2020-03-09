import React from 'react';
import * as Style from './styled';
import Header from './header';
import * as Colors from '../common/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = () => {
  return (
    <Style.Container>
      <Style.SafeAreaView>
        <Header />
        <Style.Fleet>
          <Style.UserFleet>
            <Style.PhotoFleet source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}} />
            <Style.BallFleet />
            <Style.BallSmallFleet />
            <Style.AddFleet>
              <Style.IconFleet>
                <Style.TextAddFleet>+</Style.TextAddFleet>
              </Style.IconFleet>
            </Style.AddFleet>
          </Style.UserFleet>
          <Style.UserFleet>
            <Style.PhotoFleet source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}} />
            <Style.BallFleet />
            <Style.BallSmallFleet />
          </Style.UserFleet>
          <Style.UserFleet>
            <Style.PhotoFleet source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}} />
            <Style.BallFleet />
            <Style.BallSmallFleet />
          </Style.UserFleet>
        </Style.Fleet>
      </Style.SafeAreaView>
    </Style.Container>
  )
}

export default HomePage;