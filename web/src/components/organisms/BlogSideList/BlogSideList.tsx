import Link from 'next/link';

import DataFetcher from '@/components/libs/DataFetcher';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Divider, Skeleton, Typography } from '@mui/material';

export interface SideList {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface BlogSideListProps {
  url: string;
  title: string;
}

export const SideListWrapper = ({ title, listItems }: { title: string, listItems: SideList[] }) => {
  const fieldName = title === 'categories' ? 'category' : 'tag';
  const visibleItems = listItems.slice(0, 20);
  const hiddenItems = listItems.slice(20);

  return <Box className="flex flex-col space-y-4 p-4">
    <Divider className='w-full' />
    <Typography variant="h5" className="text-brand-color text-bold font-sans capitalize">{title}</Typography>
    <Divider className='w-full' />
    <Box className="space-y-2">
      {visibleItems.map((listItem: SideList) => (
        <Link key={listItem.id} href={`/category/${listItem.slug}`}>
          <Chip
            component='a'
            className="m-1 cursor-pointer text-brand-color bg-light-shade hover:text-dark-accent text-sans capitalize"
            label={`${listItem[fieldName]} (${listItem.count})`}
            clickable
          />
        </Link>
      ))}
    </Box>
    {hiddenItems.length > 0 && (
      <Accordion
        elevation={0}
        className="bg-white justify-end items-end"
        sx={{
          borderBottom: '0',
          borderTop: '0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          className="bg-white"
          sx={{
            borderBottom: '0',
            borderTop: '0',
            justifyContent: 'end',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <Typography variant="body1" className='justify-self-end justify-end self-end font-sans'>Show all</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="space-y-2">
            {hiddenItems.map((listItem: SideList) => (
              <Link key={listItem.id} href={`/category/${listItem.slug}`}>
                <Chip
                  component='a'
                  className="m-1 cursor-pointer text-brand-color bg-light-shade hover:text-dark-accent"
                  label={`${listItem[fieldName]} (${listItem.count})`}
                  clickable
                />
              </Link>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    )}
  </Box >;
};

const BlogSideList = ({ url, title }: BlogSideListProps) => {

  const SideListSkelton = () => {
    return (
      <>
        <Skeleton variant="rectangular" width="100%" height={118} />
        <Skeleton variant="rectangular" width="40%" height={20} />
        <Skeleton variant="rectangular" width="20%" height={20} />
        <Skeleton variant="rectangular" width="30%" height={20} />
        <Skeleton variant="rectangular" width="50%" height={20} />
        <Skeleton variant="rectangular" width="20%" height={20} />
      </>
    );
  };

  return (
    <Box className="flex flex-col space-y-4">
      <DataFetcher url={url} Loader={SideListSkelton} errorMessage={`Error loading ${title?.toLowerCase()}`}>
        {(listItems: SideList[]) => <SideListWrapper title={title} listItems={listItems} />}
      </DataFetcher>
    </Box>
  );
};

export default BlogSideList;


