import styled from 'styled-components'

export const FormLine = styled('div')`
  line-height: 32px;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;

  & + & {
    margin-top: 32px;
  }

  > * + * {
    margin-left: 8px;
  }
`

interface IFormLabel {
  required?: boolean
}

export const FormLabel = styled('label') <IFormLabel>`
  flex: 0 0 7em;
  margin-right: 1em;
  user-select: none;

  ::after {
    content: '${props => props.required ? '*' : ''}';
    display: inline;
    color: red;
  }
`

export const FormBody = styled('div')`
  flex: 1 0;

  .mux-textarea-inner {
    width: 100%;
    resize: vertical;
  }

  .mux-button {
    display: block;
  }

  .mux-select {
    display: block;
  }

  > * + * {
    margin-left: 8px;
  }
`

export const FormTip = styled('p')`
  display: block;
  color: #999;
  margin: .2em 0;
  user-select: none;

  code {
    padding: 2px;
    border: 1px solid #CCC;
    color: #666;
    border-radius: 4px;
    margin: 0 10px 0 5px;
    user-select: text;
  }

  em {
    font-style: normal;
    color: #666;
  }
`
