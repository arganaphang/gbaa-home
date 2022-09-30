import { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "~/components";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-50 text-gray-600">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
