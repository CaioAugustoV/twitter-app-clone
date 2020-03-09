import React from 'react';
import * as Style from './styled/fleet';

const Fleet = () => {
  return (
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
  )
}

export default Fleet;