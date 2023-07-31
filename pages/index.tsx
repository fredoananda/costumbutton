import React, { useRef, useState } from 'react'


type RadioProps = {
  label: string
  checked?: boolean
  onClick?: () => void
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<RadioProps> = ({
  label,
  value,
  checked,
  onClick,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex items-center">
      <input
        id="default-radio-2"
        type="radio"
        value={value}
        onClick={onClick}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-radio-2"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  )
}
const dataToSend: React.MouseEventHandler<HTMLButtonElement> = async (
  event
) => {
  event.preventDefault() // Mencegah tindakan default tombol "submit"

  const data = {
    name: 'Nama Warehouse',
    warehouse_id: 'ID Warehouse',
    address_jp: 'Alamat dalam bahasa Jepang',
    address_en: 'Alamat dalam bahasa Inggris',
    settings: {
      warehouse_for_hurry_request: true,
      warehouse_for_post_request: false,
      warehouse_for_assists_the_request: true,
      warehouse_for_post_recommendation: false,
      warehouse_for_auction: true,
    },
  }

  try {
    const response = await fetch('http://localhost:8080/api/warehouse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    // Proses respons dari server jika ada
  } catch (error) {
    // Tangani kesalahan jika ada
    console.error('Error:', error)
  }
}
const Index = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [disableAll, setDisableAll] = useState(false)
  const [enableAll, setEnableAll] = useState(false)
  const [enableAll1, setEnableAll1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  
  const [enableAll2, setEnableAll2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');
  
  const [enableAll3, setEnableAll3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('');
  
  const [enableAll4, setEnableAll4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState('');
  
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  
    if (option === 'enableAll') {
      setEnableAll(true);
      setEnableAll1(true);
      setEnableAll2(true);
      setEnableAll3(true);
      setEnableAll4(true);
    } else if (option === 'disableAll') {
      setEnableAll(false);
      setEnableAll1(false);
      setEnableAll2(false);
      setEnableAll3(false);
      setEnableAll4(false);
    }
  };
  
  const [radioAll, setRadioAll] = useState({
    enableAll: false,
    disableAll: false,
  })
  const handleCustomRadioChange = (value: boolean) => {
    setSelectedOption('custom');
    setEnableAll(value);
  };
  
  const handleCustomRadioChange1 = (value: boolean) => {
    setSelectedOption1('custom');
    setEnableAll1(value);
  };
  
  const handleCustomRadioChange2 = (value: boolean) => {
    setSelectedOption2('custom');
    setEnableAll2(value);
  };
  
  const handleCustomRadioChange3 = (value: boolean) => {
    setSelectedOption3('custom');
    setEnableAll3(value);
  };
  
  const handleCustomRadioChange4 = (value: boolean) => {
    setSelectedOption4('custom');
    setEnableAll4(value);
  };
  
  return (
    <div>
    <div className='items-center justify-center h-screen ml-4'>
        <h1 className="text-center font-bold text-xl  text-[#1E293B] mt-10 ">
        Warehouse Setting
      </h1>

      <p className="font-bold  text-[#1E293B] mt-10 text-start ">
        Warehouse status for information to users
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable all"
          onClick={() => handleOptionChange('enableAll')}
          checked={selectedOption === 'enableAll'}
        />
        <Radio
          label="Disable all"
          onClick={() => handleOptionChange('disableAll')}
          checked={selectedOption === 'disableAll'}
        />
        <Radio
          label="Custom"
          onClick={() => handleOptionChange('custom')}
          checked={selectedOption === 'custom'}
        />
      </section>

      <h3 className="font-bold text-xl  text-[#1E293B] mt-10 text-start">
        Per category settings
      </h3>

      <p className="font-bold text-[#1E293B] mt-10 text-start">
        Warehouse for Hurry Request
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={enableAll}
          onChange={() => handleCustomRadioChange(true)}
        />
        <Radio
          label="Disable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={!enableAll}
          onChange={() => handleCustomRadioChange(false)}
        />
      </section>

      <p className="font-bold  text-[#1E293B] mt-10 text-start ">
        Warehouse for Post Request
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={enableAll1}
          onChange={() => handleCustomRadioChange1(true)}
        />
        <Radio
          label="Disable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={!enableAll1}
          onChange={() => handleCustomRadioChange1(false)}
        />
      </section>

      <p className="font-bold  text-[#1E293B] mt-10 text-start ">
        Warehouse for Assist the Request
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={enableAll2}
          onChange={() => handleCustomRadioChange2(true)}
        />
        <Radio
          label="Disable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={!enableAll2}
          onChange={() => handleCustomRadioChange2(false)}
        />
      </section>

      <p className="font-bold  text-[#1E293B] mt-10 text-start">
        Warehouse for Post Recommendation
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={enableAll3}
          onChange={() => handleCustomRadioChange3(true)}
        />
        <Radio
          label="Disable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={!enableAll3}
          onChange={() => handleCustomRadioChange3(false)}
        />
      </section>

      <p className="font-bold  text-[#1E293B] mt-10 text-start">
        Warehouse for Auction
      </p>
      <section className="grid grid-flow-col mt-5">
        <Radio
          label="Enable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={enableAll4}
          onChange={() => handleCustomRadioChange4(true)}
        />
        <Radio
          label="Disable"
          disabled={disableAll || selectedOption === 'disableAll'}
          checked={!enableAll4}
          onChange={() => handleCustomRadioChange4(false)}
        />
      </section>

      <button
        onClick={dataToSend} 
        type="submit"
        className="text-white mt-10 bg-[#0043A1] disable:opacity-60  focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full  focus:outline-none"
      >
        SUBMIT
      </button>
    </div>
    </div>
  );
};

export default Index;
