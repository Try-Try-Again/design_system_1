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
      { Object.keys(colors).map((color, index) => (
        <Swatch bgColor={colors[color]} key={color}>
          <SwatchDetail color={index < 4 ? monotones.base3 : monotones.base03}>
            <div>{colors[color]}</div>
            <div>{color}</div>
          </SwatchDetail>
        </Swatch>
      ))}
    </SwatchRow>
  </SwatchPanel>
);

export const MonochromeSwatches = () => <ColorSet colors={monotones} />;

export const AccentSwatches = () => <ColorSet colors={accents} />;

const validColorValues = ({ colors }) => {
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
