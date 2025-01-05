// app/blog/layout.tsx
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/sections/footer';
import { Analytics } from "@vercel/analytics/react";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main className='pt-4'>
                {children}
                <Analytics />
                <Footer />
            </main>
        </>
    );
}
