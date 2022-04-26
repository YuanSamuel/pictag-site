import Image from 'next/image';

export default function Team() {
  return (
    <div
      className='flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-10/12 mb-14 lg:mb-20'
      id='team'
    >
      <div className='flex flex-row w-full justify-around px-20'>
        <div className='flex flex-col items-center'>
          <Image
            src='/samuel1.png'
            alt='Samuel Yuan'
            width={300}
            height={300}
          />
          <p>Samuel Yuan</p>
          <a
            href='mailto:samuel@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            samuel@pictag.us
          </a>
        </div>
        <div className='flex flex-col items-center'>
          <Image src='/sarv.png' alt='Sarvesh' width={300} height={300} />
          <p>Sarvesh Submarineian</p>
          <a
            href='mailto:sarvesh@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            sarvesh@pictag.us
          </a>
        </div>
        <div className='flex flex-col items-center'>
          <Image src='/tyla1.png' alt='Tyler' width={300} height={300} />
          <p>Tyler Kerch</p>
          <a
            href='mailto:tyler@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            tyler@pictag.us
          </a>
        </div>
      </div>
    </div>
  );
}