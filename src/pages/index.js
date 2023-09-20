import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import CodeBlock from "@theme/CodeBlock";
import CodeBlockSwitchable from "@site/src/components/CodeBlockSwitchable";
import TagLine from "@site/src/components/TagLine";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <TagLine />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/1.0/tutorial/intro"
          >
            Tutorial
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/1.0/api"
          >
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

const codeExampleIntro = `import mega from 'megajs'`;

const codeExampleUpload = `import { Storage } from 'megajs'

const storage = await new Storage({
  email: 'johndoe@example.com',
// node2deno:if-node
  password: 'johndoe123'
// node2deno:if-deno
  password: 'johndoe123',
// node2deno:if-deno
  userAgent: null
}).ready

const file = await storage.upload('hello-world.txt', 'Hello world!').complete
console.log('The file was uploaded!', file)
`;

const codeExampleDownload = `import { File } from 'megajs'

const file = File.fromURL('https://mega.nz/file/example#example')
// node2deno:if-deno
file.api.userAgent = null

await file.loadAttributes()
console.log(file.name) // file name
console.log(file.size) // file size in bytes

const data = await file.downloadBuffer() // buffered file contents
console.log(data.toString()) // file contents
`;

export default function Home() {
  return (
    <Layout title="Home">
      <HomepageHeader />
      <main>
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Introduction</h2>
                <p>
                  MEGA JS is an unofficial JavaScript SDK designed to simplify
                  your interaction with <a href="https://mega.nz/">MEGA</a>, the
                  renowned cloud storage platform.
                </p>
                <p>
                  Whether you are building a file management tool, a cloud
                  backup solution, or simply looking to try out{" "}
                  <a href="https://mega.nz/">MEGA</a>, this sdk provides you
                  with the essential tools to seamlessly integrate robust cloud
                  storage capabilities into your JavaScript applications.
                </p>
              </div>
              <div className="col col--8">
                <p>
                  First things first, you need to install the package. If you're
                  using the browser environment, you can skip this step and use
                  the CDN instead.
                </p>
                <CodeBlock>npm install megajs</CodeBlock>
                <br />
                <p>
                  Next, you will need to import it using the following import
                  statement:
                </p>
                <CodeBlockSwitchable
                  language="js"
                  code={codeExampleIntro}
                  version="1"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Uploading files</h2>
                <p>
                  To upload files to <a href="https://mega.nz/">MEGA</a>, import
                  the library using either ES modules or CommonJS.
                </p>
                <p>
                  Then create a storage object to login using your e-mail and
                  password, then wait for the "ready" event.
                </p>
                <p>
                  Finally you can call the <code>.upload()</code> method on the
                  storage object to upload files to your account.
                </p>
              </div>
              <div className="col col--8">
                <CodeBlockSwitchable
                  language="js"
                  code={codeExampleUpload}
                  version="1"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Downloading files</h2>
                <p>
                  To download files, then you first open a file object using the{" "}
                  <code>File.fromURL()</code> method. The argument in this case
                  is the file's URL.
                </p>
                <p>
                  Then you load file attributes such as name and size using{" "}
                  <code>.loadAttributes()</code>.
                </p>
                <p>
                  Finally use the <code>.download()</code> or{" "}
                  <code>.downloadBuffer()</code> method to download the file.
                  The latter will return a Buffer with the file contents.
                </p>
              </div>
              <div className="col col--8">
                <CodeBlockSwitchable
                  language="js"
                  code={codeExampleDownload}
                  version="1"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <Link
                className="button button--secondary button--lg button--block"
                to="/docs/1.0/tutorial/intro"
              >
                Check out the tutorial for more information
              </Link>
            </div>
          </div>
        </section>

        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <ul>
                  <li>
                    This is based on{" "}
                    <a href="https://github.com/tonistiigi/mega">
                      tonistiigi's
                    </a>{" "}
                    mega library .
                  </li>
                  <li>
                    This is all unofficial, based on{" "}
                    <a href="https://mega.nz/#developers">developer guide</a>{" "}
                    and site source.
                  </li>
                  <li>
                    Ensure you agree with MEGA's{" "}
                    <a href="https://mega.nz/#terms">terms of service</a> before
                    using it.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
