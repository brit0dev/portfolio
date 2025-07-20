type StackProps = {
  topic: string;
  symbol: string; // Caminho para o arquivo SVG
  stackList: string[];
};

const Stack = ({topic, symbol, stackList}: StackProps) => {
  return (
    <div className="flex items-start flex-col">
      <div className="flex items-end">
        <div className="2xl:before:content-[' '] 2xl:before:h-2 2xl:before:w-2 2xl:before:bg-[#F8A444] 2xl:before:rounded-full 2xl:py-0 max-2xl:pl-1.5 px-2.5 flex gap-2 items-center justify-center font-bold  text-[#764A19] pt-0.75 text-lg bg-[#FFCE96] rounded-t-2xl">
          <div className="2xl:hidden flex items-center justify-center px-2.25 w-10 py-1 rounded-2xl bg-[#211900]">
            <img src={symbol} alt={`${topic} symbol`} className="h-3.75" />
          </div>{' '}
          {topic}
        </div>
        <div className="relative w-4 h-4">
          <div className="absolute w-4 h-4 bg-[#FFCE96] rounded-tr-full z-1"></div>
          <div className="absolute w-4 h-4 bg-white rounded-bl-full z-1"></div>
        </div>
      </div>

      <div className="flex p-0.75 text-lg rounded-b-[25px] rounded-tr-[25px] bg-[#FFCE96]">
        <div className="flex border-1 border-[#C38A48] 2xl:border-[#211900] items-center 2xl:bg-[#211900] rounded-3xl">
          <div className="2xl:flex hidden items-center justify-center w-12 pl-1">
            <img src={symbol} alt={`${topic} symbol`} className="h-4" />
          </div>
          <div className="flex flex-wrap gap-1.5 xl:gap-1.25EU  2xl:gap-1.5 bg-[#FFFCF4] p-1.5 rounded-3xl">
            {stackList.map((stack, index) => (
              <div
                key={index}
                className="before:content-[' '] before:h-2 before:w-2 before:bg-[#DACBA2] before:rounded-full flex gap-2 items-center justify-center font-medium text-base bg-[#FFFCF4] border-[#211900] border-1 text-[#211900] px-2.75 py-1 rounded-3xl"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
