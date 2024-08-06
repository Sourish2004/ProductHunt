import Head from 'next/head';
import ProductHuntCard from '@/components/ProductHuntCard';
import { MantineProvider } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Hunt UI Clone</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <ProductHuntCard />
      </main>
    </div>
  );
}
