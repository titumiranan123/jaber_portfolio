import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById('root')!).render(
  <div>
        <ParallaxProvider>

<RouterProvider router={routes} />
        </ParallaxProvider>
  </div>,
)
