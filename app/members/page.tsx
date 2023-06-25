import WideContentBlock from '@/components/WideContentBlock'
import React from 'react'

const guildInfo = 'https://api.wynncraft.com/public_api.php?action=guildStats&command=The%20House%20of%20Solitude';

async function getData(url:string) {
  const res = await fetch(url);
  
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default function Members() {
  return (
    <main className="min-h-screen">
      <WideContentBlock style='bg-blue-950 text-white' title='Guild Members' text='The current guild members of Solitude.'/>
    </main>
  )
}

