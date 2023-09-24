// -> Imports -> Components
import { Header, Footer } from '@/components';
import NextTopLoader from 'nextjs-toploader';

// -> Imports -> Constants
import { websiteSettings } from '@/constants';

// -> Imports -> Providers
import { Providers } from '@/app/providers';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';
import '@/cssfiles/layout.css';

export const metadata = {

    title: websiteSettings.name,
    description: websiteSettings.description,
    
}

export default function RootLayout ( { children }: { children: React.ReactNode } ) {

    return (

        <html lang="en" className="scroll-smooth">
            
            <body>
                
                <Providers>

                    <NextTopLoader showSpinner={ false } />
                    
                    <Header />

                    { children }
                    
                    <Footer />

                </Providers>

            </body>
        
        </html>

    );

}