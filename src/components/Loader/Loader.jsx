import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';
import SizePropType from '../../prop-types/size';

const Loader = styled.div`
  color: ${({ theme }) => theme.palette.gray};
  text-align: center;

  :before {
    animation: spin 1s linear infinite;
    border: 0.4em solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 0.4em solid ${({ theme }) => theme.palette.primary};
    content: '';
    display: block;
    height: 3em;
    line-height: 120px;
    margin: 0 auto 1em;
    width: 3em;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  ${({ size, theme }) => size && css`
    font-size: ${theme.text.sizes[size]};
  `}
`;

Loader.propTypes = {
  size: SizePropType,
};

Loader.defaultProps = {
  size: undefined,
  theme: defaultTheme,
};

export default Loader;
