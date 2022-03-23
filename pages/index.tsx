import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Form from '../components/form';


const Home: NextPage = () => {
  const { push } = useRouter();

  const handleStartGame = (quantity: number, giftDoor: number) => push(`/game/${quantity}/${giftDoor}`);

  return (
    <Form onStartGame={handleStartGame} />
  );
};

export default Home;
