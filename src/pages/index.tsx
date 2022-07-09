import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"

import { Layout } from "../components/layout/layout"
import { SEO } from "../components/seo"

// styles

// markup
const IndexPage = () => {
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
      </Container>
    </Layout>
  )
}

export default IndexPage
