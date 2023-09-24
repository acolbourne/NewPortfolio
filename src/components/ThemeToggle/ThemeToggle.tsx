'use client';

// -> Imports -> Libraries
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// -> Imports -> Components
import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = ( ) => {

    // -> Prevent hydration errors.
    const [ mounted, setMounted ] = useState ( false );

    // -> Store and set the theme as needed.
    const { theme, setTheme } = useTheme ( );

    // -> Ensure that hydration is completed.
    useEffect ( ( ) => { setMounted ( true ); }, [ ] );
    
    if ( !mounted ) return null;

    return (

        <>

            <div>

                <Button 
                        onClick={ ( ) => theme === 'light' ? setTheme ( 'dark' ) : setTheme ( 'light' ) }
                        variant="themeToggle"
                >

                    { theme === 'light' && '🌙' }

                    { theme === 'dark' && '☀️' }
                    
                </Button>

            </div>

        </>

    );

}

export default ThemeToggle;