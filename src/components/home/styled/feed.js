import styled from 'styled-components'
import * as Colors from '../../common/colors';
import { StyleSheet } from 'react-native'

export const Feed = styled.View(props => ({
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: Colors.gray,
}))