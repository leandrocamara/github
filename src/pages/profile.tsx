import { GetStaticProps } from 'next'

const Profile: React.FC = (props: any) => {
  const { user } = props

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        width="80"
        style={{ borderRadius: 40 }}
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:8000/users/12851884')

  const data = await response.json()

  return {
    props: {
      user: data
    }
  }
}

export default Profile
