import fatherSonImage from '../../../assets/warehouse/father-son-standing-their-warehouse-with-helmets-their-heads-looking-package-prepared-transport-looking-proud-satisfied.jpg';

const ConnectingGlobal = () => {
    //background color to blue 
    return (

        <div className="flex flex-col md:flex-row h-screen bg-blue-900">
            {/* Left side (Text and small image) */}
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <img 
                    src="https://www.ceylonambassador.com/images/warehouse/warehouse-1.jpg" 
                    alt="warehouse" 
                    className="mb-4 w-2/3 md:w-1/2"
                />
                <h1 className="text-3xl font-bold mb-4">Connecting Global</h1>
                <p className="text-lg">
                    We provide a range of services that connect you to the world.
                </p>
            </div>

            {/*Yellow Color Divider */}
            
            <div className="bg-yellow-400 w-1/12"></div>

            {/* Right side (Image only) */}
            <div className="flex-1">
                <img 
                    src={fatherSonImage}
                    alt="warehouse large" 
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
}

export default ConnectingGlobal;
