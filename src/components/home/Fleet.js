import React from 'react';
import * as Style from './styled/fleet';

const Fleet = () => {
  const fleets = [
    {
      id: 'a',
      uri: 'https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-114337435-1500x1000.jpg',
    },
    {
      id: 'b',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz0olWkG7Hyp0zOS89QnWcTL5KU6I6-w0uE4ziISq9BhieSmvH',
    },
    {
      id: 'c',
      uri: 'https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg',
    },
    {
      id: 'd',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv8jK9uwi5kud1Qofz0pRUytz5c2H13lYX2PQ5ZEMJTaA9FDT2',
    },
    {
      id: 'e',
      uri: 'https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-114337435-1500x1000.jpg',
    },
    {
      id: 'f',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz0olWkG7Hyp0zOS89QnWcTL5KU6I6-w0uE4ziISq9BhieSmvH',
    },
    {
      id: 'g',
      uri: 'https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg',
    },
    {
      id: 'h',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv8jK9uwi5kud1Qofz0pRUytz5c2H13lYX2PQ5ZEMJTaA9FDT2',
    },
  ]
  return (
    <Style.FleetScroll horizontal showsHorizontalScrollIndicator={false}>
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
        {
          fleets.map(({id, uri}) => (
            <Style.UserFleet key={id}>
              <Style.PhotoFleet source={{ uri }} />
              <Style.BallFleet />
              <Style.BallSmallFleet />
            </Style.UserFleet>
          ))
        }
      </Style.Fleet>
    </Style.FleetScroll>
  )
}

export default Fleet;