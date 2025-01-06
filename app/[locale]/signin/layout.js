import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata = getSEOTags({
  title: `Sign-in to ${config.appName}`,
  canonicalUrlRelative: "/auth/signin",
});

export default function Layout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <>{children}</>;
}
