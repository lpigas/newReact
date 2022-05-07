import React from 'react'
import Post from './Post';
// import Select from './UI/Input/Select';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


export default function Postlist({value, titels, remove, changePost}) {

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
          {titels}
          </h1>
          <TransitionGroup>
            {value.map(item => 
              <CSSTransition
              key={item.id}
              timeout={500}
              classNames="post"
            >
              <Post remove={remove} value={item} changePost={changePost}/>
              </CSSTransition>
            )}
          </TransitionGroup>

    </div>
  )
}
