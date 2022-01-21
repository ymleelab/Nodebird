import Head from 'next/head';

import AppLayout from "../components/AppLayout";

const signup = () => {
    return (
        <>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>회원가입</AppLayout>
        </>
    );
};

export default signup;