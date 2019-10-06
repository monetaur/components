import { css } from 'styled-components';

const styleControlOuter = ({ block, size, theme }) => css`
  color: ${theme.palette.gray};
  display: inline-block;
  position: relative;
  vertical-align: middle;

  ${block && css`
    display: block;
    width: 100%;
  `}

  ${size && css`
    font-size: ${theme.sizes[size]};
  `}
`;

export default styleControlOuter;
