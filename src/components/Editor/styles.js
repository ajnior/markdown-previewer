import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 50%;
  flex-basis: 50%;
  @media (max-width: 767px) {
    flex-basis: 100%;
    min-width: 100%;
    min-height: 45vh;
    max-height: 45vh;
    overflow: scroll;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(232, 232, 232);
  border-top: none;
  padding-top: 1rem;
  padding-left: 1rem;
`;
