import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="p-6 px-5 grid grid-cols-column gap-3 border border-color no-underline">
      <img 
        className="w-12 h-12 rounded-full"
        src="https://github.com/diego3g.png" 
        alt="Diego Fernades"
       />

       <div className="flex flex-col gap-2">
         <div className="flex items-center gap-1">
            <strong>Diego Fernades</strong>
            <span className="text-sm text-tweet">@diegosf</span>
          </div>

          <p className="leading-5">
            {props.content}
          </p>

          <div className="flex items-center gap-12 mt-3">
          <button 
              className="flex items-center gap-2 bg-transparent border-0 text-sm text-tweet"
              type="button"
            >
              <ChatCircle  className="w-5 h-5 hover:text-twitter"/>
                20
           </button>

           <button
              className="flex items-center gap-2 bg-transparent border-0 text-sm text-tweet" 
              type="button"
            >
              <ArrowClockwise  className="w-5 h-5 hover:text-twitter"/>
                20
           </button>

           <button
              className="flex items-center gap-2 bg-transparent border-0 text-sm text-tweet" 
              type="button"
            >
              <Heart  className="w-5 h-5 hover:text-twitter"/>
                20
           </button>
          </div>
       </div>
    </Link>
  )
}