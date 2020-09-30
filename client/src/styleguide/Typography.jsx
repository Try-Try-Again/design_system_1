import React from 'react';
import { typeScale } from '../utils/typography';

import {
  SwatchPanel,
} from './Containers';

export const Typography = () => (
  <SwatchPanel>
    <div style={{ fontSize: `${typeScale.header1}`, fontWeight: 'bold' }}>
      {' '}
      {`H1 - ${typeScale.header1}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.header2}`, fontWeight: 'bold' }}>
      {' '}
      {`H2 - ${typeScale.header2}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.header3}`, fontWeight: 'bold' }}>
      {' '}
      {`H3 - ${typeScale.header3}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.header4}`, fontWeight: 'bold' }}>
      {' '}
      {`H4 - ${typeScale.header4}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.header5}`, fontWeight: 'bold' }}>
      {' '}
      {`H5 - ${typeScale.header5}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.paragraph}` }}>
      {' '}
      {`Paragraph - ${typeScale.paragraph}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.helperText}` }}>
      {' '}
      {`Helper Text - ${typeScale.helperText}`}
      {' '}
    </div>
    <div style={{ fontSize: `${typeScale.copyrightText}` }}>
      {' '}
      {`Copyright Text - ${typeScale.copyrightText}`}
      {' '}
    </div>
  </SwatchPanel>
);
