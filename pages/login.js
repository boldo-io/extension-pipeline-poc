import Head from "next/head";

import LoginBox from "../components/LoginBox";

const LoginPage = () => {
  return(
    <>
      <Head>
        <title>Extension Pipeline POC - Login</title>
        <meta name="description" content="POC of an extension pipeline, Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginBox />
    </>
  );
};

export default LoginPage;