import React, { useEffect } from "react";
import { FlatList, ActivityIndicator } from 'react-native';
import { PersonCard } from "../../components/PersonCard";
import { Search } from "../../components/Search";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { usePeople } from '../../hooks/people';

import { 
  Container,
  Header,
  Modal,
  BtnCreate,
  ViewLoading
} from './style';

export function Home() {
  const { getPeople, peopleData, initialLoading } = usePeople();
  const navigation = useNavigation();

  useEffect(() => {
    getPeople('');
  }, [])

  const goToPersonItem = (person_id) => {
    navigation.navigate('Person', { person_id: person_id, is_create: false });
  }

  const goToCreatePerson = () => {
    navigation.navigate('Person', { person_id: '', is_create: true });
  }

    return (
      <Container>
        <Search />

        <Header>Base de usuários</Header>

        {
          initialLoading ? (
            <ViewLoading>
              <ActivityIndicator size="large" color="#fff" />
            </ViewLoading>
          ) : (
            <FlatList 
              data={peopleData?.pessoas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <PersonCard 
                    name={item.nome}
                    admission_date={item.data_admissao} 
                    onPress={ () => goToPersonItem(item.id_pessoa)}
                    keyExtractor={(item, index) => index.toString()}
                  />
                )
              }}
            />
          )
        }

      <BtnCreate onPress={() => goToCreatePerson()}>
        <AntDesign 
          name="plus"
          color="#fff"
          size={34}
        />
      </BtnCreate>

      </Container>
    );
};