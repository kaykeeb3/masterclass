import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setTAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event?.preventDefault()

    setTAnswers([newAnswer,...answers])
    setNewAnswer('')
  }

  function hadleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTAnswers([newAnswer,...answers])
      setNewAnswer('')
    }
  }

  return (
    <main>
     <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, adipisci expedita corporis omnis reprehenderit assumenda ea perferendis sunt quidem doloribus quaerat, voluptas cum! Vero, exercitationem?" />

      <Separator />

      <form onSubmit={createNewAnswer} className='p-6 px-6 flex items-center gap-2 border border-color'>
        <label htmlFor="tweet" className='flex flex-1 gap-3 items-center'>
          <img 
            src='https://github.com/Kayke-Ti.png' 
            alt='Kayke Barbosa' 
            className='w-12 h-12 rounded-full '
          />
          <textarea 
            id='tweet' 
            placeholder="Tweet your answer" className='flex-1 border-0 text-sm font-medium mt-5 resize-none focus:outline-none placeholder:text-gray-500' 
            onKeyDown={hadleHotkeySubmit}
            value={newAnswer}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            />
        </label>

        <button 
          type='submit'
          className='ml-auto bg-twitter rounded-full p-3 px-6 text-white text-xs font-black border-0 hover:opacity-90'
          >
            Answer
          </button>
      </form>

      
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}