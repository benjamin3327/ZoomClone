// import { useHMSNotifications, HMSNotificationTypes } from '@100mslive/react-sdk';
// import {useEffect} from 'react'

// const Notification = () => {
//     const notification = useHMSNotifications();

//     useEffect(() => {
//         if (!notification) {
//             return;
//         }

//         // notification is a reactive object
//         // this function will run everytime there is a new notification
//         console.log('notification type', notification.type);

//         // The data in notification depends on the notification type
//         console.log('data', notification.data);
//     }, [notification]);
//     // you can use the following to show appropriate toast notifications for eg.
//     switch (notification.type) {
//         case HMSNotificationTypes.PEER_LIST:
//             console.log(`${notification.data} are the peers in the room`); // received right after join
//             break;
//         case HMSNotificationTypes.PEER_JOINED:
//             console.log(`${notification.data.name} joined`);
//             break;
//         case HMSNotificationTypes.PEER_LEFT:
//             console.log(`${notification.data.name} left`);
//             break;
//         case HMSNotificationTypes.NEW_MESSAGE:
//             console.log(
//                 `${notification.data.message} received from ${notification.data.senderName}`
//             );
//             break;
//         case HMSNotificationTypes.ERROR:
//             console.log('[Error]', notification.data);
//             console.log('[Error Code]', notification.data.code);
//             break;
//         case HMSNotificationTypes.RECONNECTING:
//             console.log('[Reconnecting]', notification.data);
//             break;
//         case HMSNotificationTypes.RECONNECTED:
//             console.log('[Reconnected]');
//             break;
//         case HMSNotificationTypes.NAME_UPDATED:
//         case HMSNotificationTypes.METADATA_UPDATED:
//         case HMSNotificationTypes.ROLE_UPDATED:
//             console.log(`peer updated(${notification.type}), new peer=`, notification.data);
//             break;
//         case HMSNotificationTypes.TRACK_DEGRADED:
//             console.log(`track - ${notification.data} degraded due to poor network`);
//             break;
//         case HMSNotificationTypes.TRACK_RESTORED:
//             console.log(`track - ${notification.data} recovered`);
//             break;
//         case HMSNotificationTypes.ROOM_ENDED:
//             console.log(`room ended, reason - ${notification.data.reason}`);
//             break;
//         case HMSNotificationTypes.REMOVED_FROM_ROOM:
//             console.log(`removed from room, reason - ${notification.data.reason}`);
//             break;
//         case HMSNotificationTypes.DEVICE_CHANGE_UPDATE:
//             console.log(`device changed - ${notification.data}`);
//             break;
//         default:
//             break;
//     }

//     return <div> {notification?.type}</div>;
// }
// export default Notification;