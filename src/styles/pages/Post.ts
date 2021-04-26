import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
`

export const ButtonBack = styled.div`
  display: flex;
  font-size: 18px;
  padding-top: 50px;

  > a {
    color: #8257e6;
    text-decoration: none;
  }

  > a:hover {
    text-decoration: underline;
  }
`
