// -> Imports -> Libraries
import React from 'react';

// -> Imports -> Components
import { ThemeToggle } from '@/components';

const Header: React.FC = ( ) => {

    return (

        <>
            
            <header className="m-5 mb-0">

                <ThemeToggle />

            </header>
        
        </>

    );

}

export default Header;