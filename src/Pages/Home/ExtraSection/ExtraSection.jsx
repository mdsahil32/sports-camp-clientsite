import './ExtraSection.css'

const ExtraSection = () => {
    return (
        <div className='flex max-w-screen-lg mx-auto space-x-3'>
            <div className='bg-football-team  h-[550px] my-32 md:py-40 bg-fixed  px-24'>
                <div className=" text-center bg-black bg-opacity-60 py-2">
                    <h3 className="md:text-6xl font-serif my-2 text-white">Our
                        Kid Football Team.</h3>
                </div>
            </div>
            <div className='bg-cricket-team  h-[550px] my-32 md:py-40 bg-fixed  px-24'>
                <div className=" text-center bg-black bg-opacity-60 py-2">
                    <h3 className="md:text-6xl font-serif text-white my-2">Our Kid Cricket Team.</h3>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSection;