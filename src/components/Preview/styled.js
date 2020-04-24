import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 50%;
  flex-basis: 50%;
  @media (max-width: 767px) {
    flex-basis: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  #preview {
    margin-top: 1rem;
    margin-left: 1rem;
    pre {
      overflow: scroll;
    }
  }
`;
