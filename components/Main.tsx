import Head from "next/head";

export const Main = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/assets/favicon.svg" type={"svg"}/>
            </Head>
            {children}
        </>
    )
}