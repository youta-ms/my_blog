import { Layout } from "@/components/layout";
import { NextSeo } from "next-seo";
import blogConfig from "@/blog.config"
import { ProfileComponent } from "@/components/profile";

const ProfilePage = () => {
  return (
    <Layout>
      <NextSeo
        title="プロフィール"
        description="Youtaの雑記ブログを運営しているYoutaのプロフィールページです。"
        openGraph={{
          title: "プロフィール",
          description: "Youtaの雑記ブログを運営しているYoutaのプロフィールページです。",
          type: "article",
          images: [
            {
              url: `${blogConfig.siteUrl}/images/logo.png`,
            },
          ],
        }}
      />
      <ProfileComponent />
    </Layout>
  )
}

export default ProfilePage
