import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { List, ListItem, ListItemText, Typography, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { Layout } from "../components/layout/layout"
import { SEO } from "../components/seo";
import { Paragraph, PageSectionHeader } from "../components/layout/paragraph";
import { PageNav } from "../components/navigation/pageNav";
import { RegistrationButton } from "../components/button/mediaButtons";


const CommunityPage = () => {
    const { site } = useStaticQuery<CommunityGuidelinePageQuery>(query)

    const pageTitle: string = `community | ${site.siteMetadata.defaultTitle}`
    return (
        <Layout>
            <SEO title={pageTitle} />
            <Container maxWidth='lg' sx={{ marginBottom: 2 }}>
                <PageNav pageName="Community" />
                <Box>
                    <PageSectionHeader>JASSO海外留学支援制度学部学位取得型 Slack とは？</PageSectionHeader>
                    <Paragraph>
                        <ul>
                            <li>
                                <b>これから留学する派遣学生</b>
                            </li>
                            <li>
                                <b>現在留学している派遣学生</b>
                            </li>
                            <li>
                                <b>留学を終えた派遣学生</b>
                            </li>
                        </ul>
                        をオンラインで繋ぐSlackコミュニティです。2022年8月に運営を開始しました。
                    </Paragraph>
                    <RegistrationButton />
                    <PageSectionHeader>参加資格</PageSectionHeader>
                    <Paragraph>
                        当コミュニティはソーシャルメディア的な側面もあるため、参加者の保護、トラブル防止などの観点から、以下の5点を満たす方のみの登録を受け付けています。
                        <ol>
                            <li>現在JASSO海外留学支援制度学部学位取得型の派遣学生である、もしくは過去派遣学生であり、大学を卒業した。</li>
                            <li>実名かつフルネームでの登録が可能である。</li>
                            <li>コミュニティ内で得た個人情報が含まれるものを、不特定多数の第三者にアクセスできる形で共有、拡散しないことに同意できる。</li>
                            <li>特定の社会的属性に基づく差別的言動・各種ハラスメント行為を行わないことに同意できる。</li>
                            <li>その他、下記コミュニティガイドラインの内容に同意できる。</li>
                        </ol>
                        以上を全て満たし、JASSO海外学部学位取得型派遣学生 Slack Workplaceへの参加をご希望される方は以下のボタンからフォームへのご記入をお願いします。登録していただいたメールアドレスにコミュニティから招待メールを送らせていただきます。ご不明な点がありましたら、メールにて遠慮なくお問い合わせください。派遣学生の皆様のご参加をお待ちしております。
                    </Paragraph>
                    <RegistrationButton />
                    <PageSectionHeader>Community Guideline</PageSectionHeader>
                    <Paragraph>
                        JASSO学部学位取得型派遣学生コミュニティは、2022年に有志のJASSO学部学位取得型支援制度の派遣学生達によってスタートした、現派遣学生及び卒業生の縦横の繋がりを作るためのコミュニティです。
                    </Paragraph>
                    <Paragraph>
                        2022年当時、派遣学生同氏の強固な繋がりがある他奨学団体と比較して、JASSO学部学位取得型支援制度にはその様な繋がりがありませんでした。そこで我々は派遣学生主導のコミュニティを作りたいと考えました。
                    </Paragraph>
                    <Typography variant="h6" gutterBottom>
                        1. 派遣学生情報発信サイト
                    </Typography>
                    <Paragraph>
                        <b>現派遣学生及び卒業生に役立つ情報発信</b>を行います。
                    </Paragraph>
                    <Typography variant="h6" gutterBottom>
                        2. 現派遣学生及び卒業生を繋ぐコミュニティ
                    </Typography>
                    <Paragraph>
                        また2022年8月にはSlackワークスペースを立ち上げ、<b>オンラインコミュニティとしての役割</b>も果たすようになりました。
                    </Paragraph>
                </Box>
            </Container>

        </Layout>
    )
}

export default CommunityPage

const query = graphql`
    query CommunityPage {
        site {
            siteMetadata { 
                defaultTitle: title
            }
        }
    }
`