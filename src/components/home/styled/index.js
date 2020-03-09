import styled from 'styled-components'
import * as Colors from '../../common/colors';
import { StyleSheet } from 'react-native'

export const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: Colors.background
}))

export const SafeAreaView = styled.SafeAreaView(props => ({
  alignItems: 'center'
}))

export const Fleet = styled.View(props => ({
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: Colors.gray,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  paddingHorizontal: '2.5%',
  paddingVertical: 10,
}))

export const UserFleet = styled.TouchableOpacity(props => ({
  backgroundColor: Colors.primary,
  width: 50,
  height: 50,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 8,
  position: 'relative'
}))

export const PhotoFleet = styled.Image(props => ({
  width: 44,
  height: 44,
  borderRadius: 44,
  borderColor: Colors.background,
  borderWidth: 2,
  backgroundColor: Colors.white,
  zIndex: 2
}))

export const BallFleet = styled.View(props => ({
  width: 10,
  height: 10,
  borderRadius: 10,
  backgroundColor: Colors.primary,
  position: 'absolute',
  bottom: 4,
  left: 2.5,
}))

export const BallSmallFleet = styled.View(props => ({
  width: 5,
  height: 5,
  borderRadius: 5,
  backgroundColor: Colors.primary,
  position: 'absolute',
  bottom: 1,
  left: -2,
}))

export const AddFleet = styled.View(props => ({
  width: 20,
  height: 20,
  borderRadius: 20,
  backgroundColor: Colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
  right: -5,
  zIndex: 3
}))

export const IconFleet = styled.View(props => ({
  width: 16,
  height: 16,
  borderRadius: 16,
  backgroundColor: Colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
}))

export const TextAddFleet = styled.Text(props => ({
  fontSize: 14,
  color: Colors.white,
  lineHeight: 14,
  textAlign: 'center'
}))