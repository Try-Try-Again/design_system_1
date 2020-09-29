import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme, typeScale } from '../utils';

/*
 * these modifiers override standard button values
 * we'll add a 'normal' modifier so that we can use our
 * declared values in our style guide
 * TODO:
 *   move all desciptive values to modifier sections
 *   that way we can show button appearance without
 *   using buttons
 */
const BUTTON_MODIFIERS = {
  /*
   * we can pass props into these modifiers using theme-provider?
   * in fact, we'll probably do this for all values within
   */
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted}

    &:hover, &:focus {
    background-color: ${defaultTheme.status.warningColorHover};
    }

    &:active {
    background-color: ${defaultTheme.status.warningColorActive};
  `,
  warningSecondary: () => `
    background: none;
    border-color: ${defaultTheme.status.warningColor};
  `,
  secondaryButtonWarning: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor}
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  /*font-family: "Roboto Mono", monospace;*/
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.backgroundPrimary};
  }

  &:focus {
    /* this is that ugly focus outline change later */
    /*outline: 3px solid ${defaultTheme.primaryHoverColor};*/
    /*outline-offset: 2px;*/
  }

  &:active {
    background-color: ${(props) => props.theme.textPrimaryInverted};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${(props) => props.theme.backgroundPrimaryInverted};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.textSecondary};
  border: none;
  color: ${(props) => props.theme.backgroundSecondary};

  /* this is seprate from primary on her style. we might move it on ours */
  &:disabled {
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.textSecondary};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

// export default PrimaryButton;
