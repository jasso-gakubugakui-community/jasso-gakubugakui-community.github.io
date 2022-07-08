import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { List, ListItem, ListItemText, Typography, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { Layout } from "../components/layout/layout"
import { SEO } from "../components/seo";
import { Paragraph, PageSectionHeader } from "../components/layout/paragraph";
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
                    <Paragraph>
                        JASSO学部学位取得型奨学生コミュニティは、2022年に有志のJASSO学部学位取得型支援制度の奨学生達によってスタートした、現奨学生及び卒業生の縦横の繋がりを作るためのコミュニティです。
                    </Paragraph>
                    <Paragraph>
                        2022年当時、奨学生同氏の強固な繋がりがある他奨学団体と比較して、JASSO学部学位取得型支援制度にはその様な繋がりがありませんでした。そこで我々は奨学生主導のコミュニティを作りたいと考えました。
                    </Paragraph>
                    <Typography variant="h6" gutterBottom>
                        1. 奨学生情報発信サイト
                    </Typography>
                    <Paragraph>
                        <b>現奨学生及び卒業生に役立つ情報発信</b>を行います。
                    </Paragraph>
                    <Typography variant="h6" gutterBottom>
                        2. 現奨学生及び卒業生を繋ぐコミュニティ
                    </Typography>
                    <Paragraph>
                        また2022年8月にはSlackワークスペースを立ち上げ、<b>オンラインコミュニティとしての役割</b>も果たすようになりました。
                    </Paragraph>
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