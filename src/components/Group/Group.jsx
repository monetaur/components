import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const GroupItem = styled.div`
  flex-grow: ${({ grow }) => (grow ? '1' : '0')};
`;

GroupItem.propTypes = {
  grow: PropTypes.bool,
};

GroupItem.defaultProps = {
  grow: true,
};

const Group = styled.div`
  display: flex;

  ${({ bordered, theme }) => bordered && css`
    border: 1px solid ${theme.forms.borderColor};

    > ${GroupItem} {
      border-right: 1px solid ${theme.forms.borderColor};
    }

    > ${GroupItem}:last-child {
      border-right: 0;
    }
  `}

  ${({ padded, theme }) => padded && css`
    margin-left: -${theme.gridGutter};
    margin-right: -${theme.gridGutter};

    > ${GroupItem} {
      padding: ${theme.gridGutter} ${theme.gridGutter};
    }
  `}
`;

Group.propTypes = {
  bordered: PropTypes.bool,
  padded: PropTypes.bool,
};

Group.defaultProps = {
  bordered: false,
  padded: false,
  theme: defaultTheme,
};

Group.Item = GroupItem;

export default Group;
