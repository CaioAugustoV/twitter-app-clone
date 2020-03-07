import styled from 'styled-components'
import * as Colors from '../../common/colors';
import { StyleSheet } from 'react-native'

export const Container = styled.View(props => ({
  flexDirection: 'row',
  backgroundColor: Colors.background,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: Colors.gray
}))

export const ContainerIcon = styled.TouchableOpacity(props => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: Platform.OS === 'ios' ? 25 : 5,
}))