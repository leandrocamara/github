import React from 'react'
import Image from 'next/image'

import { Container, Flex, Title } from './styles'

interface AvatarProps {
  name: string
  avatarUrl: string
  imageSize?: string
  titleSize?: string
  titleColor?: string
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  avatarUrl,
  imageSize,
  titleSize,
  titleColor
}) => {
  return (
    <Container>
      <Flex imageSize={imageSize}>
        <Image
          loader={({ src }) => src}
          src={avatarUrl}
          alt={name}
          width={500}
          height={500}
        />
        <Title titleSize={titleSize} titleColor={titleColor}>
          {name}
        </Title>
      </Flex>
    </Container>
  )
}

export default Avatar
