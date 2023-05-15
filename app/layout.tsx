import Container from "../components/container";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import "../styles/index.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </head>
      <body>
        <Layout>
          <Container>{children}</Container>
        </Layout>
      </body>
    </html>
  );
}
