import { Button } from '@/UI/Button'
import { Chivo_Mono } from 'next/font/google'
import Image from 'next/image'
import { env } from 'process'
import { use } from 'react'

const ChivoMono = Chivo_Mono({
  weight: '900',
  subsets: ['latin'],
})

async function getFood(params: string, categoryId?: string) {
  const categoryID = categoryId ? categoryId : '10'
  const rakutenRecip = `
  https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=${categoryID}&applicationId=${env.APP_UD}`
  const res = await fetch(rakutenRecip)
  return res.json()
}

export default function Home() {
  const foods = use(getFood('aaa', '20'))

  console.log(foods)
  return (
    <main className={ChivoMono.className}>
      <div className="flex justify-center">
        <Image src="/people.png" alt="aaa" width="200" height="200" />
      </div>
      <div className="flex justify-center">
        <div>
          <p>今日のお酒のつまみ何にしようかな、、、</p>
          <p>そうだ、randomSnackShotを使ってみよう！</p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Button text="おまかせ" color="red" />
        <Button text="鳥系" color="red" />
        <Button text="さっぱり系" color="red" />
      </div>
    </main>
  )
}
