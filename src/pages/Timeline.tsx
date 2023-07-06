import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"


export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo!'
  ])

  function createNewTweet(event: FormEvent) {
    event?.preventDefault()

    setTweets([newTweet,...tweets])
    setNewTweet('')
  }

  return (
    <main>
     <Header title="Home" />

      <form onSubmit={createNewTweet} action="" className='p-6 px-6 flex flex-col gap-2'>
        <label htmlFor="tweet" className='flex gap-3'>
          <img 
            src='https://github.com/Kayke-Ti.png' 
            alt='Kayke Barbosa' 
            className='w-12 h-12 rounded-full '
          />
          <textarea 
            id='tweet' 
            placeholder="What's happeing" 
            className='flex-1 border-0 text-sm font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-500' 
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>

        <button 
          type='submit'
          className='ml-auto bg-twitter rounded-full p-3 px-6 text-white text-xs font-black border-0 hover:opacity-90'
          >
            Tweet
          </button>
      </form>

        <Separator />
      
      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}