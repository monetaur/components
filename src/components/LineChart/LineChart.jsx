import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useResize } from '@monetaur/hooks';
import Line from './Line';

function LineChart({
  children,
  datasets,
  height,
  strokeWidth,
  width,
  withXAxis,
  withYAxis,
}) {
  const [calculatedHeight, setCalculatedHeight] = useState(typeof height === 'number' ? height : undefined);
  const [calculatedWidth, setCalculatedWidth] = useState(typeof width === 'number' ? width : undefined);
  const svgEl = useRef();

  const scale = useMemo(() => {
    const allPoints = datasets.reduce((points, dataset) => [...points, ...dataset.points], []);
    const xValues = allPoints.map(([x]) => x);
    const yValues = allPoints.map(([, y]) => y);

    return {
      minX: Math.min.apply(null, xValues),
      maxX: Math.max.apply(null, xValues),
      minY: Math.min.apply(null, yValues),
      maxY: Math.max.apply(null, yValues),
    };
  }, [datasets]);

  const updateDimensions = useCallback(() => {
    if (!svgEl.current) {
      setCalculatedHeight(0);
      setCalculatedWidth(0);
      return;
    }

    const element = svgEl.current;
    const computedStyle = getComputedStyle(element);
    let elementHeight = element.clientHeight; // height with padding
    let elementWidth = element.clientWidth; // width with padding

    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

    setCalculatedHeight(elementHeight);
    setCalculatedWidth(elementWidth);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, [updateDimensions]);

  useResize(svgEl, () => {
    updateDimensions();
  });

  return (
    <svg
      height={height}
      ref={svgEl}
      role="img"
      version="1.1"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {children}
      {withYAxis && (
        <Line
          color="rgba(0, 0, 0, 0.3)"
          height={calculatedHeight}
          points={[
            [0, 0],
            [0, 1],
          ]}
          strokeWidth={1}
          width={calculatedWidth}
        />
      )}
      {withXAxis && (
        <Line
          color="rgba(0, 0, 0, 0.3)"
          height={calculatedHeight}
          points={[
            [0, 0],
            [1, 0],
          ]}
          strokeWidth={1}
          width={calculatedWidth}
        />
      )}
      {datasets.map(({
        color,
        fill,
        name,
        points,
      }) => (
        <Line
          color={color}
          fill={fill}
          height={calculatedHeight}
          key={name}
          points={points}
          scale={scale}
          strokeWidth={strokeWidth}
          width={calculatedWidth}
        />
      ))}
    </svg>
  );
}

LineChart.propTypes = {
  children: PropTypes.node,
  datasets: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    fill: PropTypes.string,
    name: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  })),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  strokeWidth: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  withXAxis: PropTypes.bool,
  withYAxis: PropTypes.bool,
};

LineChart.defaultProps = {
  children: undefined,
  datasets: [],
  strokeWidth: 2,
  width: '100%',
  withXAxis: false,
  withYAxis: false,
};

export default LineChart;
