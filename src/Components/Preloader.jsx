import pic from "../HR-logo.jpg";


function Preloader(){
    
    return (
    <section data-scroll-section>
        <div className="h-screen flex flex-col items-center justify-center bg-black text-zinc-200 absolute top-0 bottom-0 left-0 right-0">
        <div className="align-middle">
        <img src={pic} alt="HR im"></img>
        </div>
        <div className="align-middle">
            <h1 className="-mt-11 font-Inknut text-4xl">HARDIK RALHAN</h1>
            <p className="ml-28 mt-1 font-Inknut text-xl">WELCOME</p>
        </div>
    </div>
    </section>
    );
}

export default Preloader;