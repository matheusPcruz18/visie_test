import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useToast } from "react-native-toast-notifications";

interface PeopleContextData {
  getPeople(): void;
  getPerson(): any;
  peopleData: Array<[]>;
  editPerson(): Promise;
  deletePerson(): Promise;
  createPerson(): Promise;
  initialLoading: boolean;
}

const PeopleContext = createContext<PeopleContextData>({} as PeopleContextData);

const PeopleProvider: React.FC = ({ children }) => {
  const [peopleData, setPeopleData] = useState([]);
  const toast = useToast();
  const [isGetPeopleLoading, setIsGetPeopleLoading] = useState();

  const showToast = (type, message) => {
    toast.show(message, {
      type: type ? 'success' : 'danger',
      placement: "bottom",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
  }

  const getPeople = useCallback(async (inputSearch: string): Promise<any> => {
    try {
      setIsGetPeopleLoading(true)
      const result = await api.get(`/people/${inputSearch}`);
      setPeopleData(result.data);
    } catch (error) {
      showToast(false, error.message);
    } finally {
      setIsGetPeopleLoading(false)
    }
  }, []);

  const getPerson = useCallback(async (person_id: number): Promise<any> => {
    try {
      const result = await api.get(`/person/${person_id}`);
      return result.data;
    } catch (error: any) {
      showToast(false, error.message);
    }
  }, []);

  const editPerson = useCallback(async (person_id: number, data: object): Promise<any> => {
    try {
      const result = await api.put(`/person/${person_id}`, { data });
      showToast(true, result.data.message);
      getPeople('');
      return result;
    } catch (error) {
      // console.warn(error)
      showToast(false, error.data.message);
      console.warn(error)
      // throw new Error(e);
    }
  }, []);

  const deletePerson = useCallback(async (person_id: number): Promise<any> => {
    try {
      const result = await api.delete(`/person/${person_id}`);
      showToast(true, result.data.message);
      getPeople('');
      return result;
    } catch (error: any) {
      showToast(false, error.message);
    }
  }, []);

  const createPerson = useCallback(async (data: object): Promise<any> => {
    try {
      const result = await api.post(`/person`, { data });
      // console.warn(result.data.message);
      showToast(true, result.data.message);
      getPeople('');
      return result;
    } catch (error: any) {
      showToast(false, error.message);
      // throw new Error(e);
    }
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        getPeople,
        getPerson,
        peopleData,
        editPerson,
        deletePerson,
        createPerson,
        initialLoading: isGetPeopleLoading,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

const usePeople = (): PeopleContextData => {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error('Ops, algo deu errado!');
  }

  return context;
};

export { usePeople, PeopleProvider };
