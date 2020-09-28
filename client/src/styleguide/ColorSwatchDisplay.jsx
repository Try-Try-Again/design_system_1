import React from 'react';
// import PropTypes from 'prop-types';
import {
  SwatchPanel,
  SwatchRow,
  Swatch,
  SwatchDetail,
} from './Containers';
import { monotones, accents } from '../utils/newColors';

/*
 * TODO:
 *   figure out how to programmatically select contrasting color
 */
const ColorSet = ({ colors }) => (
  <SwatchPanel>
    <SwatchRow>
      { Object.keys(colors).map((color) => (
        <Swatch bgColor={colors[color]} key={color}>
          <SwatchDetail>
            <div>{colors[color]}</div>
            <div>{color}</div>
          </SwatchDetail>
        </Swatch>
      )) }
    </SwatchRow>
  </SwatchPanel>
);

export const MonochromeSwatches = () => <ColorSet colors={monotones} />;

export const AccentSwatches = () => <ColorSet colors={accents} />;

const validColorValues = ({ colors }) => {
  // here we will check to make sure all values are hex numbers
  // and that all keys are strings
  const colorValues = Object.values(colors);
  const re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  for (let i = 0; i < colorValues.length; i += 1) {
    if (!re.test(colorValues[i])) {
      return new Error(`${colorValues[i]} is not a valid color value!`);
    }
  }
  return null;
};

validColorValues.isRequired = validColorValues.bind({ isRequired: true });

ColorSet.propTypes = {
  colors: validColorValues.isRequired,
};
