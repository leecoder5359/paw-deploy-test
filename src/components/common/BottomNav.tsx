'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiHome, BiMap } from 'react-icons/bi';

export const BottomNav = () => {
    const { pathname } = useRouter();

    return (
        <div className="fixed bottom-0 grid h-16 w-screen grid-cols-3 place-items-center border-t border-t-gray-200 bg-white text-center text-sm text-gray-500">
            <Link
                href="/"
                className={`grid place-items-center ${
                    pathname === '/' ? 'font-bold text-black' : ''
                }`}
            >
                <BiHome className="text-2xl" />홈
            </Link>
            <Link
                href="/map"
                className={`grid place-items-center ${
                    pathname === '/map' ? 'font-bold text-black' : ''
                }`}
            >
                <BiMap className="text-2xl" />
                검색
            </Link>
        </div>
    );
};
