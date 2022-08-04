import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Steve Lehmann</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Steve Lehmann" />
        <p className="description">
          Definition of <b>intelligent</b> - anything but Steve Lehmann
        </p>
      </main>

      <Footer />
    </div>
  )
}
