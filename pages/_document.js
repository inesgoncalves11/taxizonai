import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
       
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=optional" rel="stylesheet"/>
     
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&family=Ubuntu:wght@300;500&display=optional" rel="stylesheet" />
     
      
       <link rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"/>
     
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}