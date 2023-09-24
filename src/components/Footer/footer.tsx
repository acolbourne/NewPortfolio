// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = ( ) => {

    return (

        <>

            <div className="text-lg m-10">

                In the meantime, <Link href="https://www.andrew-c.me/" className="underline underline-offset-8">click here to visit my blog</Link>.

            </div>
        
        </>

    );

}

export default Footer;