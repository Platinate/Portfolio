import React from 'react';
import './Main.css'

interface Props {
    children: React.ReactNode;
}

const Main: React.FC<Props> = ({children}) => {
  return (
    <main className="Main">
        {children}
    </main>
  )
}

export default Main
