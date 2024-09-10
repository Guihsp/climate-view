import styled from 'styled-components';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    padding: 0 10px 0 0;
    border-radius: 24px;
    background-color: ${props => props.theme.colors.secondary};
    font-size: 1rem;
`;

export const Input = styled.input`
    position: relative;
    width: 100%;
    padding: .8rem 1rem;
    border: none;
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    background-color: transparent;

    &::placeholder {
        color: #fdfdfd7d;
    }

    &:focus {
        outline: none;
    }
`;

export const SearchIcon = styled(HiMiniMagnifyingGlass)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
`;