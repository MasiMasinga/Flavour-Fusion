// Styled Components
import styled from 'styled-components/native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Utils
import { Colors } from '../utils/constants';

const SearchBar = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
`

const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #333;
`

const SearchIcon = styled.View`
    margin-right: 10px;
`

const Searchbar = ({ placeholder, onChangeText, value }) => {
    return (
        <SearchBar>
            <SearchIcon>
                <Icon name="search" size={20} color={Colors.black} />
            </SearchIcon>
            <SearchInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </SearchBar>
    );
}

export default Searchbar