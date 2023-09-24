'use client';

// -> Imports -> Libraries
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

export function Providers ( { children } ) {

    // -> Ensure that mounting is completed.
    const [ mounted, setMounted ] = useState ( false );
    useEffect ( ( ) => { setMounted ( true ); }, [ ] );
    if ( !mounted ) return null;

    return (

        <ThemeProvider attribute="class" enableSystem={ false }>
            
            { children }

        </ThemeProvider>

    );

}