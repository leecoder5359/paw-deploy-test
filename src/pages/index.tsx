import { useSession } from 'next-auth/react'

import { CategoryFilters } from '@/components/CategoryFilter'
import { BottomNav } from '@/components/common/BottomNav'
import { CartButton } from '@/components/common/CartButton'
import { MainSearchBar } from '@/components/SearchBar/main'
import { StoreList } from '@/components/StoreList'
import {saveSubscription} from "@/utils/db";

export default function Home() {
  // const { data } = useSession()

  return (
    <>
      <div className="pb-16">
        <MainSearchBar userName={'lee'} />
        <CategoryFilters cols={4} />
        <h3 className="pl-8 text-xl font-bold">골라먹는 맛집</h3>
      <button onClick={subscribeUser}>Subscribe for push notifications</button>
      <button onClick={sendNotification}>Send notification</button>
        <StoreList />
      </div>
      <BottomNav />
      <CartButton />
    </>
  )
}

async function subscribeUser() {
    navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.getSubscription().then((subscription) => {
            if (subscription) {
                console.log('Already subscribed');
            } else {
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
                    })
                    .then((subscription) => {
                        // save subscription on DB
                        saveSubscription(subscription)
                    });
            }
        });
    });
}

async function sendNotification() {
    try {
        const data = {
            title: 'Hello from PWA',
            body: 'This is a test push notification',
            icon: '/icon-192x192.png',
            badge: '/icon-192x192.png',
        };
        console.log(data);
    } catch (error) {
        console.error('Error sending notification:', error);
    }
}
