'use client';

import { useState } from 'react';
import HeartIcon from '@/assets/HeartIcon';
import axiosClient from '@/lib/axiosClient';
import { Toast } from '@/components/common/Toastify';

interface LikeToggleButtonProps {
  articleId: number;
  isLiked?: boolean;
  likeCount: number;
  readOnly?: boolean;
}

export default function LikeToggleButton({
  articleId,
  isLiked = false,
  likeCount = 0,
  readOnly = false,
}: LikeToggleButtonProps) {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);

  const toggleLike = async () => {
    if (readOnly) return;
    try {
      const res = liked
        ? await axiosClient.delete(`/articles/${articleId}/like`)
        : await axiosClient.post(`/articles/${articleId}/like`);
      setLiked(res.data.isLiked);
      setCount(res.data.likeCount);
    } catch (error) {
      Toast.error('좋아요 처리 중 문제 발생');
      console.error('좋아요 처리 실패:', error);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      className={`flex items-center gap-1 ${readOnly ? '!cursor-default' : ''}`}
    >
      <HeartIcon
        fill={liked ? 'var(--color-primary)' : 'none'}
        stroke={liked ? 'var(--color-primary)' : 'var(--color-gray400)'}
        size={16}
      />
      <span className="text-xs-rg sm:text-md-rg text-gray400">
        {count > 9999 ? '9999+' : count}
      </span>
    </button>
  );
}
