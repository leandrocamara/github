import styled from 'styled-components'

export const Container = styled.div``

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 250px;
    border-radius: 50%;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 54px;
  color: ${props => props.theme.colors.primary};
  margin-top: 40px;
`

export const Info = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 20px;
  text-align: justify;

  > a {
    color: #8257e6;
    text-decoration: none;
  }

  > a:hover {
    text-decoration: underline;
  }
`
