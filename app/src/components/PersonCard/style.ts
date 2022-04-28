import styled, { css } from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 10%;
  max-height: 80px;
  min-height: 80px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoArea = styled.View`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const AdmissionDate = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #ccc;
`;