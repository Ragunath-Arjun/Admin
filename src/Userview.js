import React from 'react'
import { useParams } from 'react-router-dom'

function Userview() {
    const params=useParams();
  return (
    <div>Userview-{params.id}</div>
  )
}

export default Userview