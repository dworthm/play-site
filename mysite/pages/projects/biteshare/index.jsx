import Image from 'next/image';

const Biteshare = () => (
  <div>
    <h2>
      Biteshare
    </h2>
    <p>
      Worked on a team of seven engineers to build a mobile-friendly meal sharing app that allows users to order and pay for meals together.
    </p>
    <Image
      src='/images/BiteShareLogin.jpg'
      height={500}
      width={300}
      alt='Biteshare login'
    />
    <Image
      src='/images/BiteShare Register.png'
      height={500}
      width={300}
      alt='Biteshare register'
    />
  </div>
);

export default Biteshare;