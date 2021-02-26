import React from "react"
import { Link } from "gatsby"
import { Layout, SEO, Section } from '../components'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section className="inverted">
      <Section.Content>
        <Section.Title>404: Not Found</Section.Title>
        <Section.Text><p>You just hit a route that doesn&#39;t exist... the sadness.</p></Section.Text>
        <Link to="/">Go back to the homepage</Link>
      </Section.Content>
    </Section>
  </Layout>
)

export default NotFoundPage
