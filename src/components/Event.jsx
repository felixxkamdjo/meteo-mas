const Event = () => {
    return(
        <>
            <div className="flex flex-col justify-end px-3 py-2 w-[320px] h-[462px] rounded-xl overflow-hidden container bg-cover bg-center bg-no-repeat bg-[url('./assets/ngondo_festival_img.jpg')]">
                <div className="flex flex-col justify-between text-white h-1/3 gap-2">
                    <div className="flex flex-col">
                        <h3 className=" font-bold text-3xl">Ngondo Festival</h3>
                        <h5 className="font-light">Traditionnal&Cultural Event</h5>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>date</div>
                        <div className="flex flex-col justify-between">
                            <h4>Banks of Wouri</h4>
                            <p className="text-xs font-extralight">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Illo eaque maxime delectus.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h5>Time</h5>
                            <p className="text-xs font-light">GMT+1</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event;