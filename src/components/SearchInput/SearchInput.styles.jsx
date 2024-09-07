import styled from 'styled-components';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap: 5px;
    padding: 0 10px 0 0;
    border-radius: 24px;
    background-color:var(--tertiary-color);
    font-size: 16px;
`;

export const Input = styled.input`
    position: relative;
    width: 100%;
    padding: .8rem 1rem;
    border: none;
    color: var(--white-color);
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
    color: #fff;
    cursor: pointer;
`;