type StackProps = {
  topic: string;
  symbol: string; // Caminho para o arquivo SVG
  stackList: string[];
};

const Stack = ({topic, symbol, stackList}: StackProps) => {
  return (
    <div className="flex items-start flex-col">
      <div className="flex items-end">
        <div className="2xl:before:content-[' '] 2xl:before:h-2 2xl:before:w-2 2xl:before:bg-[#F8A444] 2xl:before:rounded-full 2xl:py-0 max-2xl:pl-1.5 px-2.5 flex gap-2 items-center justify-center font-instrument font-[500] xs:text-lg text-text-label pt-0.75 bg-primary rounded-t-2xl">
          <div className="2xl:hidden xs:text-base flex items-center justify-center xs:px-2.25 w-10 py-1 rounded-2xl bg-text-primary">
            <img
              src={symbol}
              alt={`${topic} symbol`}
              className="h-3.25 xs:h-3.75"
            />
          </div>
          {topic}
        </div>
        <div className="relative w-4 h-4">
          <div className="absolute w-4 h-4 bg-primary rounded-tr-full z-1"></div>
          <div className="absolute w-4 h-4 bg-background rounded-bl-full z-1"></div>
        </div>
      </div>

      <div className="flex p-0.75 text-lg rounded-b-[25px] rounded-tr-[25px] bg-primary">
        <div className="flex border-1 border-primary-dark 2xl:border-text-primary items-center 2xl:bg-text-primary rounded-3xl">
          <div className="2xl:flex hidden items-center justify-center w-12 pl-1">
            <img src={symbol} alt={`${topic} symbol`} className="h-4" />
          </div>
          <div className="flex flex-wrap gap-1.25 xs:gap-1.5 xl:gap-1.25 2xl:gap-1.5 bg-background p-1.5 rounded-3xl">
            {stackList.map((stack, index) => (
              <div
                key={index}
                className="before:content-[' '] before:h-2 before:w-2 before:bg-[#DACBA2] before:rounded-full flex gap-1.5 xs:gap-2 items-center justify-center xs:font-medium text-base bg-background border-text-primary border-1 text-text-primary px-2.5 py-1 rounded-3xl"
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
