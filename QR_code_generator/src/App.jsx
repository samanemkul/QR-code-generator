import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import './App.css'

function App() {
  return(
    <div>
      <h1>Scan my QR code</h1>
     <QRCodeSVG values='https://www.youtube.com/watch?v=mA3eC9YnhsU&t=144s'
     size="250"/>
    </div>
  )
}

export default App
