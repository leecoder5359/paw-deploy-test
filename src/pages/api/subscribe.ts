import {saveSubscription} from "@/utils/db";


export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const subscription = req.body;

        try {
            saveSubscription(subscription);
            res.status(201).json({ message: 'Subscription saved' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to save subscription' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}