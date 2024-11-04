import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setlength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [spCh, setSpChAllow] = useState(false);
  const [password, setPass] = useState("");

//use ref
const passRef = useRef(null)


  const ranPass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (spCh) str += "!@#$₹[]%&*()_-+=.,:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }


    setPass(pass);

  }, [length, numAllow, spCh, password]);

  const copyPassToCb = useCallback(()=> {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,16);

    window.navigator.clipboard.writeText(password)}, [password])


useEffect(() => {ranPass()}, [length,numAllow,spCh])

  return (
    <>

      <div className='w-2/5 h-96 mx-auto shadow-md rounded-3xl px-4 my-8 text-white bg-emerald-800 text-[5.00rem] leading-none font-mono text-center'>

        <h2 className='text-4xl mb-6'>Password Generator</h2>



        <div className='flex rounded-xl overflow-hidden mb-4 bg-lime-300 w-full h-12'>

          <input type="text"
            value={password}
            className='outline-none w-11/12 py-1 px-3 text-black bg-white text-4xl select-text'
            placeholder='Password'
            id='outputPass'
            readOnly
            ref={passRef}
          />
          <button className='text-3xl bg-slate-900 text-white hover:bg-red-500' onClick={copyPassToCb}>Copy</button>
        </div>

        <div className='flex justify-around text-2xl gap-x-2'>
          <div className='flex items-center flex-col gap-x-1'>
            <input type="range"
              min={5}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              className='cursor-pointer'
              id='numberInput'
              onChange={() => { 
                setNumAllow((prev) =>!prev)
               }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 text-justify'>
            <input type="checkbox"
              defaultChecked={spCh}
              className='cursor-pointer'
              id='spChInput'
              onChange={() => { 
                setSpChAllow((prev) =>!prev)
               }}
            />
            <label htmlFor='spChInput'>Special <br /> Charactor</label>
          </div>

        </div>

        <div className='flex items-center justify-center w-full h-2/6 cursor-pointer'><h1 className='text-4xl bg-red-500 rounded-md w-fit p-3' onClick={()=>{ranPass()}}>Generate New Password</h1></div>
      </div>

    </>
  )
}

export default App





/*
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram ram ram
ram ram ram ram ram ram ram ram
*/