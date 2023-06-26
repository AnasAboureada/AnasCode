import axios from 'axios';
import useSWR from 'swr';

import CustomizedSnackbar from '@/components/atoms/CustomizedSnackbar/CustomizedSnackbar';

interface DataFetcherProps {
  url: string;
  Loader: React.FC;
  errorMessage: string;
  children: (data: unknown) => JSX.Element;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const DataFetcher = ({ url, Loader, errorMessage, children }: DataFetcherProps) => {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <CustomizedSnackbar message={errorMessage} severity="error" />;

  if (!data) return (<Loader />);

  return children(data);
};

export default DataFetcher;
