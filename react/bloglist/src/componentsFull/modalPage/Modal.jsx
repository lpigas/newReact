import React from 'react'
import './ModalBlog.css'

export default function Modal({children, visible, setVisible}) {
    console.log(children)
    const changeClasses = ['Modal']

    if (visible){
        changeClasses.push('active')
    }
  return (
    <div className={changeClasses.join(' ')} onClick={()=> setVisible(false)}>
        <div className='ModalContent active' onClick={e => e.stopPropagation()}>
            {children}
        </div>

    </div>
  )
}
