import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import useIntersection from '../../hooks/useIntersection';

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;

  ${({ block }) => block && css`
    display: block;
  `}
`;

function Image({
  alt,
  block,
  height,
  lazy,
  onLoad,
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
      height={height}
      onLoad={onLoad}
      ref={imageElement}
      src={(!lazy || hasIntersected) ? src : undefined}
      width={width}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  block: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lazy: PropTypes.bool,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Image.defaultProps = {
  block: false,
  height: undefined,
  lazy: true,
  onLoad: () => {},
  width: undefined,
};

export default Image;
