import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

function svgMove([x, y]) {
  return `M ${x},${y}`;
}

function svgLine([x, y]) {
  return `L ${x} ${y}`;
}

function svgReturn() {
  return 'Z';
}

function Line({
  color,
  fill,
  height,
  points,
  scale,
  strokeWidth,
  width,
}) {
  const hasFill = fill && fill !== 'none';

  const lineScale = useMemo(() => {
    if (scale) {
      return scale;
    }

    const xValues = points.map(([x]) => x);
    const yValues = points.map(([, y]) => y);

    return {
      minX: Math.min.apply(null, xValues),
      maxX: Math.max.apply(null, xValues),
      minY: Math.min.apply(null, yValues),
      maxY: Math.max.apply(null, yValues),
    };
  }, [points, scale]);

  const {
    minX,
    maxX,
    minY,
    maxY,
  } = lineScale;
  const xRange = maxX - minX;
  const yRange = maxY - minY;

  const normalizeX = useCallback((x) => {
    const xDistance = x - minX;
    return xDistance ? (xDistance / xRange) * width : 0;
  }, [minX, width, xRange]);

  const normalizeY = useCallback((y) => {
    const yDistance = y - minY;
    const normalizedY = yDistance ? (yDistance / yRange) * height : 0;
    return Math.abs(height - normalizedY); // Invert Y Axis
  }, [minY, height, yRange]);

  const coordinates = useMemo(() => {
    if (!height || !width) {
      return undefined;
    }

    return points.map(([x, y]) => [normalizeX(x), normalizeY(y)]);
  }, [height, normalizeX, normalizeY, points, width]);

  const route = useMemo(() => {
    if (!height || !width) {
      return undefined;
    }

    return coordinates.reduce((acc, point, index) => {
      const isFirst = index === 0;
      return isFirst ? svgMove(point) : `${acc} ${svgLine(point, index)}`;
    }, '');
  }, [coordinates, height, width]);

  const fillPath = useMemo(() => {
    if (!hasFill || !coordinates || !coordinates.length) {
      return undefined;
    }

    const lastCoord = coordinates[coordinates.length - 1];
    const anchors = [
      [lastCoord[0], normalizeY(minY)],
      [normalizeX(minX), normalizeY(minY)],
    ];
    const extendedRoute = anchors.reduce((acc, point, index) => `${acc} ${svgLine(point, index)}`, route);

    return `${extendedRoute} ${svgReturn()}`;
  }, [coordinates, hasFill, minX, minY, normalizeX, normalizeY, route]);

  return (
    <React.Fragment>
      <path d={route} fill="none" stroke={color} strokeWidth={strokeWidth} />
      {hasFill && (
        <path d={fillPath} fill={fill} stroke="none" />
      )}
    </React.Fragment>
  );
}

Line.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  scale: PropTypes.shape({
    minX: PropTypes.number,
    maxX: PropTypes.number,
    minY: PropTypes.number,
    maxY: PropTypes.number,
  }),
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
};

Line.defaultProps = {
  color: 'rgba(0, 0, 0, 0.3)',
  fill: 'none',
  height: undefined,
  points: [],
  scale: undefined,
  strokeWidth: 2,
  width: undefined,
};

export default Line;
