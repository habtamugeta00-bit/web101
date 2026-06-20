import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
    return (
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-gray-800">
                        ConsHub
                    </Link>

                    <nav className="md:flex items-center space-x-4 text-lg font-medium text-gray-700 sm:hidden">
                        <Link href="#home" >Home</Link>
                        <Link href="#features">Features</Link>
                        <Link href="#how-it-works">How it Works</Link>
                        <Link href="#find-consultants">Find Consultants</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#contact">Contact</Link>
                        <Link href="#FAQ">FAQ</Link>
                    </nav>

                    <div className="actions">
                        <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </Link>
                        <Link href="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}