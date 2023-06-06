
import img2 from '../../../assets/images/banner/black-professional-black-basketball-player-action-basketball-court.jpg'
import img3 from '../../../assets/images/banner/fighting-close-up-legs-professional-soccer-football-players-fighting-ball-field-isolated-white-wall-concept-action-motion-high-tensioned-emotion-during-game-cropped-image.jpg';
import img1 from '../../../assets/images/banner/hockey-players.jpg';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="h-screen w-full bg-black bg-opacity-30" />
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h1 className="md:text-6xl text-xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">WELCOME
                            <br />
                            <span >TO THE</span>
                            <br />
                            <span>Sports Academy</span>
                        </h1>

                        <div className=' flex justify-center items-end gap-5 '>
                            <a href="#slide4" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
                        </div>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h1 className="md:text-6xl text-xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">
                        WELCOME
                            <br />
                            <span >TO THE</span>
                            <br />
                            <span>Sports Academy</span>
                        </h1>
                        <div className=' flex justify-center items-end gap-5 '>
                            <a href="#slide1" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h1 className="md:text-6xl text-xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">WELCOME
                            <br />
                            <span >TO THE</span>
                            <br />
                            <span>Sports Academy</span>
                        </h1>
                        <div className=' flex justify-center items-end gap-5 '>
                            <a href="#slide2" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;