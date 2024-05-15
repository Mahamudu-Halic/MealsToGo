import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const SearchBar = () => {
  const locationContext = useContext(LocationContext);
  const { location, isLoading, error, search, keyword } = locationContext;

  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyWord}
        onChangeText={setSearchKeyWord}
        onSubmitEditing={() =>
          !searchKeyWord.trim() ? null : search(searchKeyWord)
        }
      />
    </SearchBarContainer>
  );
};
