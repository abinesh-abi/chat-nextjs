'use client'
import { AppDispatch, RootState } from '@/app/_store';
import { appendMessage } from '@/app/_store/features/chatSlice';
import { setSocketRef } from '@/app/_store/features/socketSlice';
import CONFIG from '@/config/CONFIG';
import { MessageType } from '@/types/chat';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  children: React.ReactNode;
}

export default function WebSocketWrapper({ children }: Props) {
  const dispatch: AppDispatch = useDispatch()
  const socket = useSelector((state: RootState) => state.socket)
  const user = useSelector((state: RootState) => state.user)
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Create WebSocket connection
    ws.current = new WebSocket(CONFIG.NEXT_PUBLIC_SOCKET_URL);

    // Connection opened
    ws.current.onopen = () => {
      console.log('WebSocket Client Connected');
      handleRegister()
    };
    dispatch(setSocketRef(ws.current))

    ws.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      const message: MessageType = receivedMessage?.message
      dispatch(appendMessage(message))
    };


    // Cleanup on unmount
    return () => {
      ws.current?.close();
    };
  }, [user.user?._id]);

  // handle user register
  const handleRegister = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ type: 'register', userId: user.user?._id }));
    } else {
      console.error('WebSocket is not open or userId is not set. Current state:', ws.current?.readyState);
    }
  };
  return (
    <>{children}</>
  )
}
