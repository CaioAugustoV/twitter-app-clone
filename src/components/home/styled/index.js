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

export const Header = styled.View(props => ({
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: Colors.gray,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: '5%',
  paddingVertical: 10,
}))
