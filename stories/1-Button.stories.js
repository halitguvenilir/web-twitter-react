import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const NormalButton = () => <Button>Save</Button>

export const NavButton = () => <NavigationButton>Menu Button</NavigationButton>

export const Nav = () => <Navigation />
