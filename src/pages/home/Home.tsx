import * as React from 'react'
import Button from '../../components/Button'

interface Props {
  name: string
}

const Home = ({ name }: Props) => (
  <div>
    <h2>Home</h2>
    <Button onClick={e => console.log('click')}>Click me</Button>
  </div>
)

export default Home
