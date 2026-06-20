import Link from 'next/link';


export function Header({component}: {component: React.ReactNode}) {
    return (
        <header className="w-full bg-gray-800 p-2 mb-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="logo">
                        ConsHub
                    </Link>

                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

