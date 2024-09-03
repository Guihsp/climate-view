import PropTypes from 'prop-types';
import { InputContainer, Input, SearchIcon } from './CitySearchInput.styles';

function CitySearchInput({ city, setCity, onSearch }) {
    const handleKeyPress = e => {
        if (e.key === 'Enter') onSearch();
    };

    return (
        <InputContainer>
            <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite o nome da cidade"
                onKeyPress={handleKeyPress}
            />
            <SearchIcon onClick={onSearch} />
        </InputContainer>
    );
};

CitySearchInput.propTypes = {
    city: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired, 
};

export default CitySearchInput;
