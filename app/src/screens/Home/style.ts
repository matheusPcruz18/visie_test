import styled, { css } from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_BACKGROUND,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${ Platform.OS == 'android' ? StatusBar.currentHeight : 20 }px;
`;

export const Header = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const ViewLoading = styled.View`
  flex: 1;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const BtnCreate = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  border-radius: 100;
  elevation: 3;
  ${({ theme }) => css`
    backgroundColor: ${theme.COLORS.SECONDARY};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;