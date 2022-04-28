import React, { Fragment, useEffect, useRef, useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import { usePeople } from '../../hooks/people';

import { useForm, Controller } from "react-hook-form";

import { 
  Container,
  Input,
  BottomArea,
  ActionButton,
  BtnText,
  ViewLoading,
  ErrorText
} from './style';

import { ActivityIndicator, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { convertDate } from "../../helpers/convertDate";

interface FormTypes {
  person_id: number;
  disabled: boolean;
  is_create: boolean;
}

export function Form({person_id, disabled, is_create}: FormTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const { getPerson, editPerson, createPerson } = usePeople();
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigation = useNavigation();

  interface formDataTypes {
    nome: '',
    rg: '',
    cpf: '',
    data_nasc: '',
    data_admissao: '',
  }

  const { control, handleSubmit, formState: { errors }, setValue } = useForm<formDataTypes>();

  const getPersonData = async () => {
    try {
      setIsLoading(true)
      const result = await getPerson(person_id);

      const birthConverted: string = convertDate(result.person.data_nascimento);
      const admissionConverted = convertDate(result.person.data_admissao);

      setValue("nome", result.person.nome);
      setValue("rg", result.person.rg);
      setValue("cpf", result.person.cpf);
      setValue("data_nasc", birthConverted);
      setValue("data_admissao", admissionConverted);
    } catch (error) {
      
    } finally{
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: formDataTypes) => {
    try {
      setSubmitLoading(true);
      if(!is_create){
        await editPerson(person_id, data);
      }else{
        await createPerson(data);
      }
      // console.warn(result);
    } catch (error) {
      console.error(error)
    } finally{
      setSubmitLoading(false);
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    if(person_id){
      getPersonData();
    }
  }, []);

  const rgInputRef = useRef<any>(null);
  const cpfInputRef = useRef<any>(null);
  const birthInputRef = useRef<any>(null);
  const admissionInputRef = useRef<any>(null);
  
    return (
      <Container>
        
        {
          isLoading && !is_create ? (
            <ViewLoading>
              <ActivityIndicator size="large" color="#fff" />
            </ViewLoading>
          ) : (
            <Fragment>
              <Controller
                name="nome"
                control={control}
                rules={{
                  required: true,
                  minLength: 4,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    label="Nome"
                    placeholder='Digite o nome do usuário'
                    value={value}
                    editable={!disabled}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.nome && <ErrorText>O campo de nome é obrigatório.</ErrorText>}

              <Controller
                name="rg"
                control={control}
                rules={{
                  required: true,
                  minLength: 12,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    label="RG"
                    placeholder='Insira o Registro Geral'
                    value={value}
                    keyboardType={"number-pad"}
                    editable={!disabled}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    render={props => 
                      <TextInputMask 
                        {...props} 
                        ref={rgInputRef} 
                        type="custom" 
                        options={{
                          mask:'99.999.999-4'
                        }} 
                      />
                    }
                  />
                )}
              />
              {errors.rg && <ErrorText>Insira um RG válido.</ErrorText>}

              <Controller
                name="cpf"
                control={control}
                rules={{
                  required: true,
                  minLength: 14,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    label="CPF"
                    placeholder='Insira o Cadastro de Pessoa Física'
                    value={value}
                    keyboardType={"number-pad"}
                    editable={!disabled}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    render={props => <TextInputMask {...props} ref={cpfInputRef} type="cpf" />}
                  />
                )}
              />
              {errors.cpf && <ErrorText>Insira um CPF válido.</ErrorText>}

              <Controller
                name="data_nasc"
                control={control}
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    label="Data de Nascimento"
                    placeholder='Digite a data do serviço'
                    value={value}
                    keyboardType={"number-pad"}
                    editable={!disabled}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    render={props => 
                      <TextInputMask 
                        {...props} 
                        ref={birthInputRef}
                        type={'datetime'}
                        options={{
                          format: 'DD/MM/YYYY'
                        }}
                      />
                    }
                  />
                )}
              />
              {errors.data_nasc && <ErrorText>Insira uma data de nascimento válida.</ErrorText>}

              <Controller
                name="data_admissao"
                control={control}
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input 
                    label="Data de Admissão"
                    placeholder='Insira a data de admissão do usuário'
                    value={value}
                    keyboardType={"number-pad"}
                    editable={!disabled}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    render={props => 
                      <TextInputMask 
                        {...props} 
                        ref={admissionInputRef}
                        type={'datetime'}
                        options={{
                          format: 'DD/MM/YYYY'
                        }}
                      />
                    }
                  />
                )}
              />
              {errors.data_admissao && <ErrorText>Insira uma data de admissão válida.</ErrorText>}

            </Fragment>
          )
        }

        {
          !disabled && (
            <BottomArea>
              <ActionButton onPress={handleSubmit(onSubmit)}>
                {
                  submitLoading ? (
                    <ActivityIndicator size="small" color="#000" />
                  ) : (
                    <BtnText>Salvar</BtnText>
                  )
                }
              </ActionButton>
            </BottomArea>
          )
        }
        
      </Container>
    );
};