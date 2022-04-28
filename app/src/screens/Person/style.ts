import styled, { css } from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_BACKGROUND,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${ Platform.OS == 'android' ? StatusBar.currentHeight : 20 }px;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;


export const ArrowBack = styled.TouchableOpacity``;

export const IconArea = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EditBtn = styled.TouchableOpacity`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteBtn = styled(EditBtn)``;