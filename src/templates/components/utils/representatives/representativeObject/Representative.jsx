const Representative = ({data}) =>{
    return(
        <a href={data.link}>
            <div key={data.id} className='w-32 h-32 overflow-hidden hover:bg-rose-500 hover:duration-500 duration-500 bg-rose-600 border border-stone-200'>
                <svg className='absolute w-32 p-5 hover:p-4 duration:500 hover:duration-500' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                    <path className="fill-stone-200" d={data.path}/>
                </svg>
                <div className="bg-stone-200 w-6 h-6 relative rotate-45 top-[114px] left-[114px]"></div>
                <div className="bg-stone-200 w-6 h-6 relative rotate-45 top-[90px] right-[12px]"></div>
                <div className="bg-stone-200 w-6 h-6 relative rotate-45 bottom-[60px] left-[-12px]"></div>
                <div className="bg-stone-200 w-6 h-6 relative rotate-45 bottom-[84px] right-[-114px]"></div>
            </div>
        </a>
    );
}

export default Representative;