import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'

export const PublicLayout: React.FC = ({children}) => (
  <>
    <Main>
      <SiteWidth>{children}</SiteWidth>
    </Main>
    <Footer />
  </>
)
