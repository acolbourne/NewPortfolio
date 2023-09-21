// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';

export const metadata = {
title: 'Andrew Colbourne - Dev.',
description: 'Dev.',
}

export default function RootLayout ( { children }: { children: React.ReactNode } ) {

    return (

        <html lang="en">
            
            <body>
                
                { children }
                
            </body>
        
        </html>

    );

}