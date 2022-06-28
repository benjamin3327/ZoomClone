// import React from 'react';
// import { Message } from './components';
// import {
//     useHMSActions,
//     useHMSStore,
//     peer,
//     selectMessages,
//     selectBroadcastMessages,
//     selectMessagesByRole,
//     selectMessagesByPeerID
// } from '@100mslive/react-sdk';


// const Chat = () => {
//     const hmsActions = useHMSActions();
//     hmsActions.sendGroupMessage('hi folks!', ['moderator', 'host']);
//     hmsActions.sendDirectMessage('keep this message a secret!', peer.id);
//     const allMessages = useHMSStore(selectMessages); // get all messages
//     const brodacastMessages = useHMSStore(selectBroadcastMessages); // get all broadcasted messages
//     const groupMessagesByRole = useHMSStore(selectMessagesByRole('host')); // get conversation with the host role
//     const directMessages = useHMSStore(selectMessagesByPeerID(peer.id)); // get private conversation with peer
    
//     return (
//         <>
//             {messages.map((msg) => (
//                 <Message key={msg.id} message={msg} />
//             ))}
//         </>
//     )
// }

// export default Chat;