import Head from 'next/head';
import Image from 'next/image';

import Paper from "@mui/material/Paper";

import DraggableList from '../components/DraggableList';
import CodeEditor from '../components/CodeEditor';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Extension Pipeline POC</title>
        <meta name="description" content="POC of an extension pipeline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.topBar}>
          <Image
            src="/boldo-logo.png"
            width={100}
            height={100}
          />
        </div>
        <Paper elevation={3} className={styles.content}>
          <Paper
            elevation={5}
            className={styles.leftPaper}
          >
            <DraggableList />
          </Paper>
          <Paper
            elevation={5}
            className={styles.rightPaper}
          >
            <CodeEditor />
          </Paper>
        </Paper>
      </main>
    </div>
  )
};

export default Home;
