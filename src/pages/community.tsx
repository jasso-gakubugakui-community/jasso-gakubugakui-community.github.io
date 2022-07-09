import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { List, ListItem, ListItemText, Typography, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { Layout } from "../components/layout/layout"
import { SEO } from "../components/seo";
import { P, SectionHeading, SubsectionHeading } from "../components/layout/paragraph";
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
                    <SectionHeading>{site.siteMetadata.defaultTitle} Slack とは？</SectionHeading>
                    <P>
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
                    </P>
                    <RegistrationButton />
                    <SectionHeading>参加資格</SectionHeading>
                    <P>
                        当コミュニティはソーシャルメディア的な側面もあるため、参加者の保護、トラブル防止などの観点から、以下の5点を満たす方のみの登録を受け付けています。
                        <ol>
                            <li>現在JASSO海外留学支援制度学部学位取得型の派遣学生である、もしくは過去派遣学生であり、大学を卒業した。</li>
                            <li>実名かつフルネームでの登録が可能である。</li>
                            <li>コミュニティ内で得た個人情報が含まれるものを、不特定多数の第三者にアクセスできる形で共有、拡散しないことに同意できる。</li>
                            <li>特定の社会的属性に基づく差別的言動・各種ハラスメント行為を行わないことに同意できる。</li>
                            <li>その他、下記コミュニティガイドラインの内容に同意できる。</li>
                        </ol>
                        以上を全て満たし、JASSO海外学部学位取得型派遣学生 Slack Workplaceへの参加をご希望される方は以下のボタンからフォームへのご記入をお願いします。登録していただいたメールアドレスにコミュニティから招待メールを送らせていただきます。ご不明な点がありましたら、メールにて遠慮なくお問い合わせください。派遣学生の皆様のご参加をお待ちしております。
                    </P>
                    <RegistrationButton />
                    <SectionHeading>Community Guideline</SectionHeading>
                    <SubsectionHeading>1. アンチハラスメントポリシー</SubsectionHeading>
                    <P>
                        特定の社会的属性に基づく差別的言動や各種ハラスメント、またJASSO学部学位コミュニティ運営がハラスメントと判断した行為を禁止します。行為が発覚した際は、運営メンバーから該当者へ警告をします。
                    </P>
                    <P>
                        もしハラスメントを受けていると感じたら、気兼ねなく運営にお問い合わせフォームから相談してください。
                    </P>
                    <SubsectionHeading>2. 外部団体・企業による宣伝及び勧誘活動に関して</SubsectionHeading>
                    <P>
                        JASSO学部学位コミュニティでは学生が参加者の大多数を占めているという性質から、企業・団体による過剰な採用・企業宣伝の場になってしまう恐れがあります。
                    </P>
                    <P>
                        外部企業・団体によるイベントの宣伝・勧誘・リクルーティング活動に関するトピックに関連する投稿は以下のルールに沿って行うこととします。
                        <ol>
                            <li>ダイレクトメッセージ(DM)の利用における注意
                                <br />
                                参加者が過剰なリクルーティング・宣伝をDMでされた場合、参加者はSlackの問い合わせフォームから運営へ通報することができます。
                            </li>
                        </ol>
                    </P>
                    <SubsectionHeading>3. DM・チャンネルの利用方法</SubsectionHeading>
                    <P>
                        コミュニティ内におけるダイレクトメッセージ（DM）・チャンネルの利用方法に関して以下のルールをご覧ください。
                        <ol>
                            <li>
                                DMは、コミュニティガイドライン違反の通報がある場合、複数の管理者の合意のもと内容を閲覧することができます。完全なプライベート空間ではありません。
                            </li>
                            <li>
                                新規チャンネルの作成を希望する際は、運営に問い合わせフォームからご連絡ください。運営メンバーの承認を得てから、新規チャンネルを作成するかどうかの判断をします。
                            </li>
                            <li>
                                各投稿に関して議論を始めるもしくは返信をする際にはその投稿にスレッドを作成する形式を原則とします。ただ、自身の投稿をチャンネル参加者の目に留まるようにする場合、「also send to # チャンネル名」のオプションを使ってください。
                            </li>
                        </ol>
                    </P>
                    <SubsectionHeading>4. JASSO学部学位コミュニティへのコミットメント・退会手続きに関して</SubsectionHeading>
                    <P>
                        JASSO学部学位コミュニティのコミットメント・退会に関して以下のルールを遵守してください。
                        <ol>
                            <li>
                                コミュニティ参加者が本コミュニティからの退会を希望する場合、運営への問い合わせフォームへご連絡ください。本Slackのアカウント停止手続きを行います。
                            </li>
                            <li>
                                その他コミュニティガイドラインに反する行為が見受けられた場合（例: アカウントを本名で登録していない等）、運営から対象参加者に注意勧告をします。その連絡に対し返信が無い場合、運営は対象参加者のアカウント停止手続きを行います。
                            </li>
                        </ol>
                    </P>
                    <SubsectionHeading>5. ガイドラインの改訂に関して</SubsectionHeading>
                    <P>
                        JASSO学部学位コミュニティは、参加者の方のご意見が必要不可欠だと運営側は考えています。ガイドライン・プライバシーポリシーにおいては、今後コミュニティが拡大していくにつれ参加者の皆さんの提案や意見を元に適宜改訂していきます。
                    </P>
                    <P>
                        ガイドライン及びプライバシーポリシーは「# general-コミュニティガイドライン」に固定投稿され、それに関する意見や議論もそのチャンネルで行うようにします。
                    </P>
                    <SectionHeading>Privacy Policy</SectionHeading>
                    <P>
                        JASSO学部学位コミュニティ（以下，「当団体」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                    </P>
                    <SubsectionHeading>1. 個人情報</SubsectionHeading>
                    <SubsectionHeading>2. 個人情報の収集方法</SubsectionHeading>
                    <SubsectionHeading>3. 個人情報を収集・利用する目的</SubsectionHeading>
                    <SubsectionHeading>4. 利用目的の変更</SubsectionHeading>
                    <SubsectionHeading>5. 個人情報の第三者提供</SubsectionHeading>
                    <SubsectionHeading>6. 個人情報の開示</SubsectionHeading>
                    <SubsectionHeading>7. 個人情報の訂正および削除</SubsectionHeading>
                    <SubsectionHeading>8. 個人情報の利用停止等</SubsectionHeading>
                    <SubsectionHeading>9. プライバシーポリシーの変更</SubsectionHeading>
                    <SubsectionHeading>10. お問い合わせ窓口</SubsectionHeading>
                    本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                    <List>
                        <ListItem>当団体名：JASSO学部学位コミュニティ</ListItem>
                        <ListItem>担当部署：JASSO学部学位コミュニティ</ListItem>
                        <ListItem>Eメールアドレス：jasso.gakubugakui.community__at__gmail.com</ListItem>
                    </List>
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