self.addEventListener('push', (event) => {
    console.log('[Service Worker] Push Received.', event.data.text());
    const { title, body } = event.data.json();
    event.waitUntil(self.registration.showNotification(title, { body }));
});