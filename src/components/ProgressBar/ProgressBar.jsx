import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../../themes/default';

const ProgressBar = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.textSizes.sm};
  overflow: hidden;
  padding: ${({ theme }) => `${theme.forms.paddingVertical} ${theme.forms.paddingHorizontal}`};
  position: relative;

  :before {
    background-color: ${({ theme }) => theme.palette.primary};
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: width 500ms;
    width: ${({ percent }) => percent}%;
    z-index: -1;
  }
`;

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
  theme: defaultTheme,
};

export default ProgressBar;
