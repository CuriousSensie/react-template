import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, UserButton, SignInButton} from '@clerk/clerk-react'
import { ModeToggle } from './mode-toggle'



const Header = () => {
  return (
    <>
        <nav className='py-4 h-20 flex justify-between items-center'>
            <Link>
                <p className='flex h-14'>LOGO</p>
            </Link>

            {/* <Button variant="outline">Login</Button>  */}
            <div className='grid grid-cols-2 gap-4'>
              <ModeToggle />

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
        
        
        
        
        
        
        
        </nav>
    </>
  )
}

export default Header