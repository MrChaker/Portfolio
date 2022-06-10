import { createRoot } from 'react-dom/client'
import './index.css'
import App from 'components/App'
import { fontAW } from 'fontawsome'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
fontAW()
root.render(<App />)
