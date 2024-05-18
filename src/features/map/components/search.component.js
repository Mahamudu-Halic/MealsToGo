import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 999;
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const { location, isLoading, error, search, keyword } = locationContext;

  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyWord}
        icon={"map"}
        onChangeText={setSearchKeyWord}
        onSubmitEditing={() =>
          !searchKeyWord.trim() ? null : search(searchKeyWord)
        }
      />
    </SearchBarContainer>
  );
};
