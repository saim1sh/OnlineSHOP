import React from 'react'
import { Outlet } from 'react-router'

export default function Allroutes() {
  return (
    <div>{Outlet()}</div>
  )
}
