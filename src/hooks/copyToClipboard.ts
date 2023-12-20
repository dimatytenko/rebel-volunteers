import { useState, useEffect } from 'react';
import { message } from 'antd';

export const useCopyToClipboard = (resetTime: number) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState('');

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setText(text);
    setCopied(true);
    messageApi.open({
      type: 'success',
      content: 'Copied to clipboard',
    });
  };

  useEffect(() => {
    if (!(resetTime && copied)) return;
    const id = setTimeout(() => {
      setCopied(false);
    }, resetTime);
    return () => clearTimeout(id);
  }, []);

  return { copied, copy, text, contextHolder };
};
