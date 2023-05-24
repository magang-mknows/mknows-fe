import { useRouter } from 'next/router';

const OTPPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>email : {query?.email} </h1>
    </div>
  );
};

export default OTPPage;
