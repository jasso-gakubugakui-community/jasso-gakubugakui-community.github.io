import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { List, ListItem, ListItemText, Typography, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { Layout } from "../components/layout/layout"
import { SEO } from "../components/seo";
import { P, PageSectionHeader } from "../components/layout/paragraph";
import { ContactUsButton, FollowUsOnTwitterButton } from "../components/button/mediaButtons";
import { PageNav } from "../components/navigation/pageNav";


const AboutPage = () => {
    const { site } = useStaticQuery<AboutPageQuery>(query)

    const pageTitle: string = `about | ${site.siteMetadata.defaultTitle}`
    return (
        <Layout>
            <SEO title={pageTitle} />
            <Container maxWidth='lg' sx={{ marginBottom: 2 }}>
                <PageNav pageName="About" />
                <Box>
                    <PageSectionHeader>About</PageSectionHeader>
                    <P>
                        {site.siteMetadata.defaultTitle}は、2022年に有志のJASSO海外留学支援制度学部学位取得型の派遣学生達によってスタートした、現派遣学生及び卒業生の縦横の繋がりを作るためのコミュニティです。
                    </P>
                    <P>
                        2022年当時、派遣学生同氏の強固な繋がりがある他奨学団体と比較して、JASSO海外留学支援制度学部学位取得型にはその様な繋がりがありませんでした。そこで我々は派遣学生主導のコミュニティを作りたいと考えました。
                    </P>
                    <Typography variant="h6" gutterBottom>
                        1. 派遣学生情報発信サイト
                    </Typography>
                    <P>
                        <b>現派遣学生及び卒業生に役立つ情報発信</b>を行います。
                    </P>
                    <Typography variant="h6" gutterBottom>
                        2. 現派遣学生及び卒業生を繋ぐコミュニティ
                    </Typography>
                    <P>
                        また2022年8月にはSlackワークスペースを立ち上げ、<b>オンラインコミュニティとしての役割</b>も果たすようになりました。
                    </P>
                </Box>
                <Toolbar disableGutters>
                    <Box mr={2}>
                        <ContactUsButton />
                    </Box>
                    <Box mr={2}>
                        <FollowUsOnTwitterButton />
                    </Box>
                </Toolbar>
            </Container>

        </Layout>
    )
}

export default AboutPage

const query = graphql`
    query AboutPage {
        site {
            siteMetadata { 
                defaultTitle: title
            }
        }
    }
`