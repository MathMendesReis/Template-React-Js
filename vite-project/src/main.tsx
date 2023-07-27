/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'
import { Theme } from './styles/Theme.tsx'
import {
  RouterProvider,
} from "react-router-dom";
import useRouter from './router/useRouter.tsx'

const [router] = useRouter()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
