import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: '#ccc',
  theme: { 
    colors: { 
      primary: '#fff', 
      accent: '#fff', 
      background: 'transparent', 
      text: '#fff', 
      placeholder: '#fff', 
      disabled: props => props.editable ? '#fff' : 'transparent', 
    } 
  }
}))`
  width: 100%;
  height: 60px;
  font-size: 16px;
  margin-bottom: 25px;
  color: #fff;
  padding: 0px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.editable ? '#fff' : 'transparent'};
`;

export const BottomArea = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 25%;
  height: 50px;
  border-radius: 5px;
  background: #fff;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const ViewLoading = styled.View`
  flex: 1;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;