import Image from 'next/image';


interface Feature {
  icon: React.ElementType;
  name: string;
  description: string;
}

interface FeaturedProps {
  features: Feature[];
  projectTitle: string;
  projectDescription: string;
  projectImageSrc: string;
  projectImageAlt: string;
}

const Featured: React.FC<FeaturedProps> = ({
  features,
  projectTitle,
  projectDescription,
  projectImageSrc,
  projectImageAlt,
}) => {
  return (
    <section>
      <div className='relative max-w-6xl px-4 mx-auto sm:px-6 '>
        <div className='pt-16 pb-12 md:pt-52 md:pb-20'>
          <div>
            <div className='flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0'>
              <div
                className='order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center'
                data-aos='fade-down'
              >
                <h3 className='pb-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100/60 via-zinc-200 to-zinc-200/60'>
                  {projectTitle}
                </h3>
                <p className='mb-8 text-lg text-slate-50'>
                  {projectDescription}
                </p>
                <dl className='max-w-xl grid grid-cols-1 gap-4 lg:max-w-none'>
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className='px-2 py-1 rounded group hover:bg-zinc-100 duration-500'
                    >
                      <div className='flex items-center mb-1 space-x-2 '>
                        <feature.icon className='w-4 h-4 shrink-0 text-zinc-300 group-hover:text-zinc-950 duration-500' />
                        <h4 className='font-medium text-zinc-50 group-hover:text-zinc-950 duration-500'>
                          {feature.name}
                        </h4>
                      </div>
                      <p className='text-sm text-left text-slate-50 group-hover:text-zinc-950 duration-500'>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className='flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'>
                <div className='z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none'>
                  <Image
                    src={projectImageSrc}
                    alt={projectImageAlt}
                    width={2432}
                    height={1442}
                    className='w-[76rem] z-10 rounded-xl border border-white/10'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;