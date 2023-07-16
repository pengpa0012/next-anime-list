import React from 'react'

export default async function page({params}: any) {
  return (
    <div>{params.profile}</div>
  )
}
