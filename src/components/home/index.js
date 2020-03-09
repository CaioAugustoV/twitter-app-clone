import React from 'react';
import * as Style from './styled';
import Header from './Header';
import Fleet from './Fleet';
import Feed from './Feed';

const HomePage = () => {
  return (
    <Style.Container>
      <Style.SafeAreaView>
        <Header />
        <Fleet />
        <Feed />
      </Style.SafeAreaView>
    </Style.Container>
  )
}

export default HomePage;