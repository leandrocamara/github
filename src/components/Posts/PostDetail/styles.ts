import styled from 'styled-components'

export const Container = styled.div``

export const Article = styled.article`
  text-align: justify;
  padding-top: 30px;
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  padding-block: 20px;
  color: #8257e6;
`

export const LightText = styled.div`
  font-size: 18px;
  color: #bbbbbb;
  font-weight: bold;
`

export const ContentHtml = styled.div`
  font-size: 18px;
  line-height: 1.6;
  padding-top: 10px;

  > p {
    margin-block: 18px;
  }

  > ul {
    padding-left: 40px;
  }
`
