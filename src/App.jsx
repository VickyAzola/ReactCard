import Header from './Header'
import ReactGray from './assets/reactjs-icon 2.svg'

export default function App() {
  return (
    <>
    <div className='rounded-lg bg-[#282D35] '>
      <Header />
      <div className='text-gray-200 py-14 pl-8 pr-20 relative'>
        <h1 className='text-4xl font-bold mb-8'>Fun facts about React</h1>
          <ul className='ml-8 my-2 text-sm list-disc marker:text-[#61DAFB] marker:text-xl space-y-2 max-w-xs'>
            <li>Was first releaced in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is mantained by facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
          </ul>
          <img className='absolute right-0 top-0 bottom-0 my-auto w-24' src={ReactGray} alt="" />
      </div>
    </div>
    </>
  )
}


//export default App solo puede usarse una vez con el default
//para importar varios elementos se debe escribir diferente INVESTIGAR
