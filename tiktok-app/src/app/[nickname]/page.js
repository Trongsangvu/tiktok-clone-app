import DefaultLayout from '~/layouts/DefaultLayout';
import Profile from '~/views/Profile';

export default function ProfilePage({ params }) {
  return (
    <DefaultLayout>
      <Profile nickname={params?.nickname} />
    </DefaultLayout>
  );
}
