import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import RegisterBox from "../components/RegisterBox";

import { MdDoneOutline } from "react-icons/md";

import css from "../styles/Register.module.scss";

const RegisterPage = () => {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState();
  const [ success, setSuccess ] = useState(false);
  
  const _handleRegister = async payload => {
    try {
      setError();
      setLoading(true);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if(!response.ok) throw (await response.json());
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 4000);
    }
    catch(e) {
      console.log(e);
      setError(e);
      setLoading(false);
    }
  };
  return(
    <>
      <Head>
        <title>Extension Pipeline POC - Register</title>
        <meta name="description" content="POC of an extension pipeline, Register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={css.wrapper}
      >
        {
          success
          ?
          <div className={css.sucessBadge}>
            <MdDoneOutline />
          </div>
          :
          <RegisterBox
            register={_handleRegister}
            loading={loading}
            error={error}
          />
        }
      </div>
    </>
  );
};

export default RegisterPage;