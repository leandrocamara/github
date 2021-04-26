import styled from 'styled-components'

interface FlexProps {
  imageSize?: string
}

interface TitleProps {
  titleSize?: string
  titleColor?: string
}

export const Container = styled.div``

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: ${props => (props.imageSize ? props.imageSize : '250px')};
    border-radius: 50%;
  }
`

export const Title = styled.h1<TitleProps>`
  text-align: center;
  font-size: ${props => (props.titleSize ? props.titleSize : '50px')};
  color: ${props =>
    props.titleColor ? props.titleColor : props.theme.colors.primary};
  margin-top: 30px;
`
