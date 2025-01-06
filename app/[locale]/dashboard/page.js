'use client'

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ButtonAccount from '@/components/ButtonAccount';
import { useRouter, usePathname } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Dashboard({ params }) {
  const locale = params?.locale || 'en'; // Fallback to 'en'
  
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const supabase = createClientComponentClient();

  async function fetchUserSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  }

  async function checkUserAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  }

  useEffect(() => {
    async function initializeUserData() {
      const session = await fetchUserSession();
      if (session) {
        setSession(session);
        await checkUserAuth();
      }
    }

    initializeUserData();
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mb-8 flex justify-between items-center">
        {pathname !== '/' && <ButtonAccount />}
      </div>

      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
        {!user && (
          <div className="alert alert-warning">
            <p>Please sign in to access the dashboard</p>
          </div>
        )}
        {user && (
          <div className="alert alert-success">
            <p>Welcome back, {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}