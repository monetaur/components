import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useIntersection } from '@monetaur/hooks';

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;

  ${({ block }) => block && css`
    display: block;
  `}

  ${({ raised }) => raised && css`
    box-shadow: ${({ theme }) => theme.shadows.light};
  `}

  ${({ circular }) => circular && css`
    border-radius: 50%;
  `}
`;

function Image({
  alt,
  block,
  circular,
  height,
  lazy,
  onLoad,
  raised,
  src,
  width,
}) {
  const imageElement = useRef(null);
  const [hasIntersected, setHasIntersected] = useIntersection(imageElement);

  useEffect(() => {
    setHasIntersected(false);
  }, [setHasIntersected, src]);

  return (
    <StyledImage
      alt={alt}
      block={block}
      circular={circular}
      height={height}
      onLoad={onLoad}
      raised={raised}
      ref={imageElement}
      src={(!lazy || hasIntersected) ? src : undefined}
      width={width}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  block: PropTypes.bool,
  circular: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lazy: PropTypes.bool,
  onLoad: PropTypes.func,
  raised: PropTypes.bool,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Image.defaultProps = {
  block: false,
  circular: false,
  height: undefined,
  lazy: true,
  onLoad: () => {},
  raised: false,
  width: undefined,
};

export default Image;
