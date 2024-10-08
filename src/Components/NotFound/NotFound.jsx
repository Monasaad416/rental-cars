import React from 'react'
import notFound from "../../assets/imges//not-found/404-not-found.png"

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={notFound} alt="not found" />
    </div>
  )
}
