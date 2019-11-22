import styled from 'styled-components'

export const CodeDemo = styled('div')`
  line-height: 20px;
  font-size: 12px;

  .mux-card-inner > ul,
  .mux-card-inner > ol {
    padding: 0 0 0 2em;

    li {
      list-style: square;
    }
    li + li {
      margin-top: .5em;
    }
  }

  p {
    line-height: inherit;
    font-size: inherit;
    margin: 1em 0;
  }

  a {
    margin: 0 .4em;
    &::after {
      content: '🔗';
      margin: 0 0 0 .2em;
    }
  }

  code {
    margin: 0 .4em;
    padding: 0 .4em;
    border-radius: 4px;
    background: #F1F1F1;
    color: #5558d8;
    display: inline-block;
  }

  pre {
    line-height: 24px;
    background-color: #ffffff;
    border: 1px solid #ECECEC;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='240' height='110'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 48px;
    width: fit-content;
    padding: 0 1em;
    border-radius: 10px;
  }
`
