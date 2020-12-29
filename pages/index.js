import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dinçer Canpunar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <h2 className="display-3 font-weight-bold">Dinçer<br/>Canpunar</h2> */}
            <h2 className="display-4 mb-3">Dinçer Canpunar</h2>
            <p className="lead">I’m a senior software developer with experience in developing front-end and back-end systems.</p>
            <a href="mailto:dincercanpunar@hotmail.com">dincercanpunar@hotmail.com</a>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/dincerc/" target="_blank">linkedin</a>
              </li>
              <li>
                <a href="https://codepen.io/dincerc/" target="_blank">codepen</a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/developer?id=Din%C3%A7er+Canpunar" target="_blank">android</a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer> */}
    </div>
  )
}
