import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700" rel="stylesheet" />
      </Head>

      <main>
        <h1 className="title">
          Catherine Tan
        </h1>

        <p className="description">
          Senior&nbsp; 
          <a target="_blank" href="https://docs.google.com/document/d/18ldKyFB2eUpNCclrtetJRkOPXfbMrG5hdJpQvUOVCPk/edit?usp=sharing">product engineer</a>
          &nbsp;passionate to solve real-life problems with technology
        </p>

        <div className="grid">
          <a target="_blank" href="/resume">
            <h3>Resume</h3>
          </a>
          
          <a target="_blank" href="https://www.linkedin.com/in/catherineltan">
            <h3>LinkedIn</h3>
          </a>

          <a target="_blank" href="https://www.instagram.com/cat__tan/">
            <h3>Instagram</h3>
          </a>

          <a target="_blank" href="https://www.twitch.tv/zii604">
            <h3>Twitch</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.25rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 2rem;
        }

        .grid a {
          margin: 0 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .title {
            font-size: 3rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Quicksand', sans-serif;
          color: #252525;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
