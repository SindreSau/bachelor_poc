import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Dashboard', // Dynamic titles do not work on same level as layout.tsx
  description: 'Home page',
};

export default function Home() {
  return <h1>Home</h1>;
}
