import React, { Fragment, useEffect, useState } from "react";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { usePeople } from '../../hooks/people';

import { 
  SearchArea,
  SearchInput,
  IconArea,
} from './style';

export function Search() {
    const { getPeople } = usePeople();

    return (
      <SearchArea>
        <IconArea>
          <AntDesign 
            name="search1"
            color="#fff"
            size={30}
            />
        </IconArea>
        
        <SearchInput 
          placeholder="Pesquisar usuários"
          placeholderTextColor="#8f8f8f" 
          onChangeText={(text) => getPeople(text)}
        />
      </SearchArea>
    );
};