import reactLogo from './assets/react.svg'

export default function Header() {
    return (
        <>
        <header className='rounded-t-lg p-6 bg-[#21222A] '>
            <nav className="flex justify-between items-center">
                <div className='flex gap-x-2 items-center'>
                    <img className='w-6' src={reactLogo} alt="React Logo"/>
                    <p className='font-bold text-lg text-[#61DAFB] '>ReactFacts</p>
                </div>
                <p className="flex gap-x-6 text-white text-sm font-medium">React Course - Project 1</p>
            </nav>
        </header>
        </>
    )
}
