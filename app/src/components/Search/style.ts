import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const SearchArea = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.INPUT_BACKGROUND,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  width: 100%;
  height: 10%;
  max-height: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  elevation: 6;
`;

export const IconArea = styled.View`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: transparent;
`;

export const SearchInput = styled.TextInput`
  width: 85%;
  height: 60px;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  opacity: 0.9;
  background: transparent;
  color: #fff;
`;