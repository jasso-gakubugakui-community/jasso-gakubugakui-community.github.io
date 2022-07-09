import { Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import React from "react"


import { Layout } from "../components/layout/layout"
import { PageSectionHeader, Paragraph } from "../components/layout/paragraph"
import { SEO } from "../components/seo"
import { ContactUsButton, FollowUsOnTwitterButton } from "../components/button/mediaButtons"
import { graphql, useStaticQuery } from "gatsby"

// styles

// markup
const IndexPage = () => {

  const { site } = useStaticQuery<IndexPageQuery>(query)

  return (
    <Layout>
      <SEO />
      <Container maxWidth='lg'>
        <Box my={4}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h3">
                過去・現在・未来の<br />
                派遣学生が繋がる<br />
                コミュニティ
              </Typography>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Box>
        <Box>
          <PageSectionHeader>About</PageSectionHeader>
          <Paragraph>
            {site.siteMetadata.defaultTitle}は、2022年に有志のJASSO海外留学支援制度学部学位取得型の派遣学生達によってスタートした、現派遣学生及び卒業生の縦横の繋がりを作るためのコミュニティです。
          </Paragraph>
          <Paragraph>
            2022年当時、派遣学生同士の頻繁な交流がある他奨学団体と比較して、JASSO海外留学支援制度学部学位取得型にはその様な繋がりがありませんでした。そこで我々は派遣学生主導のコミュニティを作りたいと考えました。
          </Paragraph>
          <Typography variant="h6" gutterBottom color='primary'>
            1. 派遣学生情報発信サイト
          </Typography>
          <Paragraph>
            <b>留学前・中・後の派遣学生に役立つ情報発信</b>を行います。
          </Paragraph>
          <Paragraph>
            現在企画している発信内容として
            <ul>
              <li>留学前：派遣学生同士の情報提供・サポート</li>
              <li>留学中：地域ごとのコミュニティ形成・他の地域の派遣学生との交流</li>
              <li>留学後：現役派遣学生への留学支援、キャリア・進路情報共有及び相談</li>
            </ul>
            が考えられています。
          </Paragraph>
          <Typography variant="h6" gutterBottom color='primary'>
            2. 世代を超えて派遣学生同士を繋ぐオンラインコミュニティ
          </Typography>
          <Paragraph>
            2022年8月にはSlackワークスペースを立ち上げ、<b>オンラインコミュニティとしての役割</b>も始動しました。
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

export default IndexPage

const query = graphql`
    query IndexPage {
        site {
            siteMetadata { 
                title
            }
        }
    }
`