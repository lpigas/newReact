import React from 'react';
import Post from './Post';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


export default function Postlist({value, titels, remove, changePost, openBlog, className}) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
          {titels}
          </h1>
          <TransitionGroup>
            {value.map(item => 
              <CSSTransition
              key={item.id}
              timeout={0}
              classNames="post"
            >
              <Post remove={remove} value={item} changePost={changePost} openBlog={openBlog} className={className}/>
              </CSSTransition>
            )}
          </TransitionGroup>

    </div>
  )
}
