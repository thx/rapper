import styled from 'styled-components'

interface IRow {
  gutter?: number
  margin?: number
}

export const Row = styled('div') <IRow>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${props => !isNaN(props.margin || NaN) ? props.margin + 'px' : '24px'};
  margin-bottom: ${props => !isNaN(props.margin || NaN) ? props.margin + 'px' : '24px'};
  margin-left: ${props => -(props.gutter || 8) / 2}px;
  margin-right: ${props => -(props.gutter || 8) / 2}px;
`

interface ICol {
  gutter?: number
  devide?: number
  margin?: number
}

export const Col = styled('div') <ICol>`
  ${props => props.devide
    ? `flex: 0 0 ${(100 / props.devide).toFixed(6)}%`
    : `flex: 1 0 0`};

  box-sizing: border-box;
  padding-left: ${props => (props.gutter || 8) / 2}px;
  padding-right: ${props => (props.gutter || 8) / 2}px;
  margin-bottom: ${props => props.margin ? props.margin + 'px' : '0'};
  min-width: 0;
`
