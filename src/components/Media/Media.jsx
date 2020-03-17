import styled from 'styled-components';

const Media = styled.div`
  display: flex;
`;

Media.Image = styled.div`
  flex-shrink: 0;

  &:first-child {
    margin-right: 1em;
  }

  &:last-child {
    margin-left: 1em;
  }
`;

Media.Body = styled.div`
  flex-grow: 1;
`;

export default Media;
