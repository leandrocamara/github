import React from 'react'
import Image from 'next/image'

import { Container, Flex, Info, Title } from './styles'

interface BiographyProps {
  name: string
  info: string
  avatarUrl: string
  linkedInUrl: string
}

const Biography: React.FC<BiographyProps> = ({
  name,
  info,
  avatarUrl,
  linkedInUrl
}) => {
  return (
    <Container>
      <Flex>
        <Image
          loader={({ src }) => src}
          src={avatarUrl}
          alt={name}
          width="500"
          height="500"
        />
        <Title>{name}</Title>
      </Flex>
      <Info>
        {info} You can contact me on <a href={linkedInUrl}>LinkedIn</a>.
      </Info>
    </Container>
  )
}

export default Biography
