import { LocalNotifications } from '@capacitor/local-notifications';

export const requestNotificationPermission = async () => {
    const permissionStatus = await LocalNotifications.requestPermissions();
    if(permissionStatus.display !== 'granted') {
        console.error('Notification permission not granted')
        return false;
    }
    return true;
}

export const scheduleNotification = async (title: string, body: string) => {
    const hasPermission = await requestNotificationPermission();
    if (!hasPermission) return;

    await LocalNotifications.schedule({
        notifications: [
          {
            id: 1, // Unique ID for the notification
            title,
            body,
            silent: false,
            schedule: { at: new Date(new Date().getTime() + 1000 * 1) }, // 5 seconds from now
          },
        ],
    })
}