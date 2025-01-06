

import { redirect } from "next/navigation";
import config from "@/config";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { unstable_setRequestLocale } from 'next-intl/server';

// This is a server-side component to ensure the user is logged in and has the necessary access.
// If not, it will redirect to the appropriate page based on the condition.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const supabase = createServerComponentClient({ cookies });

  // Check if the user is logged in
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    redirect(config.auth.loginUrl);
    return;
  }

  // Check if the logged in user has access
  const { data, error } = await supabase
    .from('profiles')
      .select('has_start_access, has_adv_access, has_pro_access')
    .eq('id', session.user.id)
    .single();


  if (error) {
  redirect('/#pricing');
  return;
}

  if (data) {
  const { has_start_access, has_adv_access, has_pro_access } = data;

  // Check if only one of the fields is true
  const accessCount = [has_start_access, has_adv_access, has_pro_access].filter(access => access).length;

  if (accessCount === 1) {
    // User has valid access, proceed with your logic
    console.log('User has valid access');
  } else {
    redirect('/#pricing');  // Assuming 'pricingUrl' is defined in your config for the pricing page
    return;
  }
}


  return <>{children}</>;
}
