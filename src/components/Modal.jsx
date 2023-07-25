import React from 'react'
import { useEffect } from 'react'

function Modal({content, showModal}) {
    useEffect(() => {
        setTimeout(() => showModal(false), 2000)
    },[])
  return (
    <div className="fixed top-0 left-0 right-0 w-full p-4 bg-green-400">
        <h3>{content}</h3>
    </div>
  )
}

export default Modal