import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import "./index.css";
import "./normalize.css";

interface DefaultLayoutProps {
    title: string;
    description: string;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({ children, title, description }) => {
    const data = useStaticQuery(graphql`
        query DefaultLayoutQuery {
            contentYaml {
                title
                description
            }
        }
    `);

    return (
        <>
            <Helmet
                defaultTitle={ data.contentYaml.title }
                title={ title || data.contentYaml.title }
                titleTemplate={ "%s - " + data.contentYaml.title }
            >
                <meta name="description" content={ description || data.contentYaml.description } />
            </Helmet>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
