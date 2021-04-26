import React from 'react'
import Avatar from '../Avatar'

import { Container, Info } from './styles'

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
      <Avatar name={name} avatarUrl={avatarUrl} />
      <Info>
        {info} You can contact me on <a href={linkedInUrl}>LinkedIn</a>.
      </Info>
    </Container>
  )
}

export default Biography
