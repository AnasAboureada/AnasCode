'use client';

import { FC, useState } from 'react';

import CustomizedSnackbar from '@/components/atoms/CustomizedSnackbar/CustomizedSnackbar';
import { callArticleEditApi } from '@/components/libs/helpers';
import { Visibility } from '@mui/icons-material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Box, IconButton, Typography, styled } from '@mui/material';

export interface ArticleActionsProps {
  likes: number;
  views: number;
  slug: string;
  showViews?: boolean;
  className?: string;
}

const ArticleActions: FC<ArticleActionsProps> = ({ slug, likes, views, showViews, className = '' }) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShare = () => {
    if (typeof window === 'undefined') return;

    const baseUrl = window.location.origin;
    const blogUrl = `${baseUrl}/blog/${slug}`;
    console.log('bookmarking...', blogUrl);
    navigator.clipboard.writeText(blogUrl);
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 5000);
  };

  const handleLike = () => {
    if (isLiked) {
      callArticleEditApi(slug, 'unlike');
      setLikesCount(likesCount - 1);
    } else {
      callArticleEditApi(slug, 'like');
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Box className={`flex justify-center items-center ${className}`}>
      <IconButton aria-label="clap" onClick={handleLike}>
        <ThumbUpAltOutlinedIcon className='text-l' />
        {likesCount > 0 &&
          <Typography variant="subtitle1" className="font-sans text-l ml-1">{likesCount}</Typography>
        }
      </IconButton>
      {showViews && views > 0 && (
        <IconButton aria-label="views" disableRipple>
          <Visibility color='inherit' />
          <Typography variant="subtitle1" className="font-sans ml-1 text-l">{views}</Typography>
        </IconButton>
      )}
      {showSnackbar && (
        <CustomizedSnackbar message="Copied to Clipboard" severity="success" />
      )}
      <IconButton aria-label="share" onClick={handleShare}>
        <ShareOutlinedIcon className='text-l' />
      </IconButton>
    </Box>
  );
};

const StylesStickyActionsContainer = styled('div')(({ theme }) => ({
  position: 'sticky',
  bottom: 0,
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StickyActionsContainer: FC<ArticleActionsProps> = ({ likes, views, slug, showViews }) => {
  return <StylesStickyActionsContainer>
    <ArticleActions likes={likes} views={views} slug={slug} showViews={showViews} />
  </StylesStickyActionsContainer>;
};

export default ArticleActions;