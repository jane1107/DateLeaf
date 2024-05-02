import { FC, ReactNode } from 'react';
import PolicyButton from '../components/Policy/PolicyButton';
import HistoryBackButton from '../components/common/HistoryBackButton';

interface Props {
  children: ReactNode;
  title: string;
}

const PolicyPageLayout: FC<Props> = ({ children, title }) => {
  return (
    <main className={'relative m-auto h-screen w-fit p-8'}>
      <HistoryBackButton />
      <h2 className="my-5 text-xl font-semibold">{title}</h2>
      {/* <div className="card h-5/6 max-w-5xl bg-white">{children}</div> */}
      <div className="card h-3/4 max-w-5xl bg-white">{children}</div>
      <PolicyButton />
    </main>
  );
};

export default PolicyPageLayout;
