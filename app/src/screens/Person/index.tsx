import React, { useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { 
  ArrowBack,
  Container, 
  Header,
  IconArea,
  EditBtn,
  DeleteBtn,
  Content,
  Label
} from './style';

import { Form } from "../../components/Form";
import { usePeople } from "../../hooks/people";

export function Person() {
  const [isEdit, setIsEdit] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { person_id, is_create }: any = route.params;
  const { deletePerson } = usePeople();
  const backToHome = () => {
    navigation.navigate('Home');
  }

  const deleteUser = async () => {
    try {
      deletePerson(person_id);
      backToHome();
    } catch (error) {
      console.warn(error)
    }
  }

  const askUser = () => {
    Alert.alert(
      "Excluir usuário?",
      "Todos os dados desta pessoa serão excluídos permanentemente",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Confirmar", onPress: () => {
          deleteUser()
        }}
      ]
    )
  }

    return (
      <Container>
        <Content>
          <Header>
            <ArrowBack onPress={() => backToHome()}>
              <AntDesign name="arrowleft" color="#fff" size={40} />
            </ArrowBack>

            {
              !is_create && (
                <IconArea>
                  <EditBtn onPress={() => setIsEdit(!isEdit)}>
                    <AntDesign 
                      name="edit"
                      size={23}
                      color="#fff"
                    />
                  </EditBtn>

                  <DeleteBtn onPress={() => askUser()}>
                    <AntDesign 
                      name="delete"
                      size={23}
                      color="#fff"
                    />
                  </DeleteBtn>
                </IconArea>
              )
            }
          </Header>

          <Label>{is_create ? 'Cadastrar usuário' : 'Usuário'}</Label>

          <Form person_id={person_id} disabled={is_create ? false : isEdit} is_create={is_create} />
        </Content>
      </Container>
    );
};