import React from 'react';
import {
  SwatchPanel,
  SwatchRow,
  Swatch,
  SwatchDetail,
} from './Containers';
import { monotones, accents } from '../utils/newColors';

export const MonochromeSwatches = () => (
  <SwatchPanel>
    <SwatchRow>
      { Object.keys(monotones).map((color) => (
        <Swatch bgColor={monotones[color]}>
          <SwatchDetail>
            {color}
          </SwatchDetail>
        </Swatch>
      )) }
    </SwatchRow>
  </SwatchPanel>
);

export const AccentSwatches = () => (
  <SwatchPanel>
    <SwatchRow>
      { Object.keys(accents).map((color) => (
        <Swatch bgColor={accents[color]}>
          <SwatchDetail>
            {color}
          </SwatchDetail>
        </Swatch>
      )) }
    </SwatchRow>
  </SwatchPanel>
);
