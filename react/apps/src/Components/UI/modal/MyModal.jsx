import React from 'react'
import './MyModal.css'

export default function MyModal({children, visible, setVisible}) {
    const changeClasses = ['MyModal']

    if (visible){
        changeClasses.push('active')
    }
  return (
    <div className={changeClasses.join(' ')} onClick={()=> setVisible(false)}>
        <div className='MyModalContent' onClick={e => e.stopPropagation()}>
            {children}
        </div>

    </div>
  )
}
