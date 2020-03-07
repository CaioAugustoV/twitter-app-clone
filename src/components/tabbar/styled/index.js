import styled from 'styled-components'
import { Platform } from 'react-native'

export const Container = styled.View(props => ({
  flexDirection: 'row',
  backgroundColor: '#000',
}))

export const ContainerIcon = styled.TouchableOpacity(props => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: Platform.OS === 'ios' ? 20 : 5
}))