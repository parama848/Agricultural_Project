
import { assets } from '../assets/assets'
 function SliderImage() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
        {/* <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p> */}
        <div className="flex items-center gap-2 h-[400px] w-full max-w-[1450px] mt-10 mx-auto">
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src={assets.farmer1}
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src={assets.farmer2}
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src={assets.farmer3}
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src={assets.farmer4}
                    alt="image" />
            </div>
            {/* <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src={assets.farmer2}
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div> */}
        </div>
        </>
    );
};
export default SliderImage;