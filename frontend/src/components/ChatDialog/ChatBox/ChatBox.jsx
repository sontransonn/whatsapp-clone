import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./ChatBox.scss"

import EmojiPicker from 'emoji-picker-react';

import ChatHeader from './ChatHeader/ChatHeader'
import MessageList from './MessageList/MessageList'
import ChatInput from './ChatInput/ChatInput';

import { getConversation } from '../../../services/apiConversation';

import categoriesEmoji from "../../../constants/categoriesEmoji"

const ChatBox = () => {

    const [conversation, setConversation] = useState({});
    const [openEmoji, setOpenEmoji] = useState(false)
    const [value, setValue] = useState("")

    const {
        currentAccount,
        chattingAccount
    } = useSelector(state => state.account)

    const handleOpenEmoji = () => {
        setOpenEmoji(true)
    }

    const handleCloseEmoji = () => {
        setOpenEmoji(false)
    }

    const handleEmojiClick = (e) => {
        setValue(prev => prev + e.emoji)
    }

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: currentAccount.sub, receiverId: chattingAccount.sub });
            setConversation(data);
        }

        getConversationDetails()
    }, [chattingAccount.sub])

    return (
        <div className='chatbox__chatboxContainer'>
            <ChatHeader
                chattingAccount={chattingAccount}
                conversation={conversation}
            />
            <MessageList
                conversation={conversation}
                openEmoji={openEmoji}
            />
            {openEmoji &&
                <EmojiPicker
                    className='chatbox__chatboxContainer__emojiContainer'
                    theme='dark'
                    searchPlaceholder="Tìm kiếm biểu tượng cảm xúc"
                    emojiStyle='apple'
                    onEmojiClick={handleEmojiClick}
                    categories={categoriesEmoji}
                />
            }
            <ChatInput
                conversation={conversation}
                openEmoji={openEmoji}
                handleOpenEmoji={handleOpenEmoji}
                handleCloseEmoji={handleCloseEmoji}
                value={value}
                setValue={setValue}
            />
        </div>
    )
}

export default ChatBox