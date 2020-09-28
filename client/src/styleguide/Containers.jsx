import styled from 'styled-components';

export const MasterGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fill, auto);
  grid-row-gap: 10px;
  justify-content: center;
`;

// might not need?
export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`;

export const SwatchPanel = styled.div`
  display: grid;
  grid-gap: 15px;
  background-color: #FFFFFF;
  padding: 20px;
`;

export const SwatchRow = styled.div`
  display: grid;
  grid-auto-columns: 75px;
  grid-template-rows: 75px;
  grid-auto-flow: column;
`;

export const Swatch = styled.div`
  background-color: ${(props) => props.bgColor || 'white'};
  position: relative;
  flex: 0 0 72px;
  height: 72px;
`;

export const SwatchDetail = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 8px;
  margin-bottom: 1em;
  margin-left: 1em;
  color: ${(props) => props.color};
`;
