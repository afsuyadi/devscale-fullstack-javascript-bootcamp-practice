import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { useState, useEffect } from 'react';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Dashboard } from '../components/dashboard';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/atoms/userAtom';
import { useHydrateAtoms } from 'jotai/utils';

export const Route = createFileRoute('/')({
  component: App,
  loader: () => {
    return {
      username: "afsuyadi"
    }
  }
})

function App() {
  const data = Route.useLoaderData();
  const setUserData = useSetAtom(userAtom);

  // useEffect(() => {
  //   setUserData({username : data.username,})
  // }, [data, setUserData])

  useHydrateAtoms([[userAtom, {username : data.username}]])

  return (
    <main className="h-screen">
      <Header username={data.username} />
      <Sidebar username={data.username} />
      <Dashboard username={data.username} />
    </main>
  )
}
