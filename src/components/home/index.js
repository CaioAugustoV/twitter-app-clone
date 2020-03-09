import React from 'react';
import * as Style from './styled';
import Header from './Header';
import Fleet from './Fleet'

const HomePage = () => {
  return (
    <Style.Container>
      <Style.SafeAreaView>
        <Header />
        <Fleet />
      </Style.SafeAreaView>
    </Style.Container>
  )
}

export default HomePage;