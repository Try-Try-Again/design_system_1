import React from 'react';
import ReactDOM from 'react-dom';
import { MasterGridContainer } from './components/Containers';
// import PrimaryButton, {
//  SecondaryButton,
//  TertiaryButton,
// } from './components/Buttons';
import { GlobalStyle } from './utils';

// const App = () => (
//   <div>
//     <PrimaryButton modifiers={['small', 'warning']}> Hey Boys! </PrimaryButton>
//     <SecondaryButton modifiers={['large', 'secondaryButtonWarning']}>
//       Hey, Girls!
//     </SecondaryButton>
//     <TertiaryButton> Superstar DJ! </TertiaryButton>
//     <PrimaryButton disabled> Hey Boys! </PrimaryButton>
//     <SecondaryButton disabled> Hey, Girls! </SecondaryButton>
//     <TertiaryButton disabled> Superstar DJ! </TertiaryButton>
//     <GlobalStyle />
//   </div>
// );
const App = () => (
  <div>
    <MasterGridContainer>
      <h1> Hey Boys </h1>
      <h2> Hey Girls </h2>
      <h3> Hey Girls </h3>
      <h4> Superstar DJ </h4>
      <h5> Here We Go! </h5>
    </MasterGridContainer>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
