import React, { useRef, useState } from 'react'
import './TodoEditor.css'
const TodoEditor = ({onCreate}) => {
  const [content, setContent]=useState('')
  const inputRef = useRef()

  const onChangeContent=(e)=>{
    setContent(e.target.value)
  }

  const onKeyDown=(e)=>{
    if(e.keyCode==13){
      onSubmit()
    }

  }

  const onSubmit=()=>{
    if(content===''){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }
  return (
    <div className='TodoEditor'>
        <input 
        type="text" 
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 기록...'/>
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor