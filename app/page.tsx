import Header from './header/Header'
import { Main } from './main/Main'
import { Card } from './card/Card'
import { FAQ } from './faq/FAQ'

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Card/>
      <FAQ/>
    </div>
  )
}
