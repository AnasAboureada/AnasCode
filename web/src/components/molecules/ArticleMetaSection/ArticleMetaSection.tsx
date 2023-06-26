import React from 'react';

import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import {
  BookmarkBorderOutlined,
  CommentOutlined,
  EditCalendar,
  IosShare,
  PersonAddOutlined,
  PlayLesson,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';

type ArticleHeaderProps = {
  authName: string,
  profileImage: string,
  minRead: string,
  isFollowing: boolean,
  createdAt: string,
  followHandler: () => void,
  likesCount: number,
  commentsCount: number,
  showFollow: boolean,
  title: string,
};

const ArticleHeader: React.FC<ArticleHeaderProps> = (data: ArticleHeaderProps) => {
  const { authName, profileImage, minRead, isFollowing, createdAt,
    followHandler, likesCount, commentsCount, showFollow, title } = data;

  return (
    <SectionWrapper id='article-header' className="bg-white rounded-xl shadow-md overflow-hidden m-3 p-5">
      <Typography variant="h1" className=" text-brand-color" data-testid="article-title">{title}</Typography>
      <Box className="flex items-center">
        <Avatar alt={`User avatar - ${authName}`} src={profileImage} data-testid="user-avatar" />
        <Box className="flex flex-col items-start">
          <Box className="flex">
            <Typography variant="subtitle1" component="h2" className="ml-3  text-brand-color" data-testid="user-name">{authName}</Typography>
            {showFollow && (
              <Button startIcon={<PersonAddOutlined />} size="small" onClick={followHandler} data-testid="follow-btn">
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
            )}
          </Box>
          <Box className="flex justify-center items-center">
            <PlayLesson className="ml-3  text-gray-4" />
            <Typography variant="body1" className="ml-1  text-gray-4" data-testid="min-read">{minRead}</Typography>
            <EditCalendar className="ml-3  text-gray-4" />
            <Typography variant="body1" className="ml-1  text-gray-4" data-testid="created-at">{createdAt}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex items-center justify-between mt-2 md:mt-4">
        <Box>
          <Button startIcon={<ThumbUpAltOutlined />} size="small" data-testid="likes-count">{likesCount}</Button>
          <Button startIcon={<CommentOutlined />} size="small" data-testid="comments-count">{commentsCount}</Button>
        </Box>
        <Box className="flex items-center justify-end">
          <Button startIcon={<BookmarkBorderOutlined />} size="small" aria-label="bookmark" data-testid="bookmark-btn" />
          <Button startIcon={<IosShare />} size="small" aria-label="share" data-testid="share-btn" />
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default ArticleHeader;
