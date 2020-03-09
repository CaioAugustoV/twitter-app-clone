import styled from 'styled-components'
import * as Colors from '../../common/colors';

export const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: Colors.background
}))

export const SafeAreaView = styled.SafeAreaView(props => ({
  alignItems: 'center'
}))