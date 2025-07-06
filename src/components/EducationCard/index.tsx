type EducationCardType = {
  education: string;
   acronym: string;
   fullName?: string;
   courseType: string;
   initialYear: number;
   finalYear: number
  }

const EducationCard = ({education, acronym , fullName, courseType, initialYear ,finalYear}:EducationCardType) => {
  //<p><span className="font-medium text-[#C38A48] px-1 py-0.5 m-1 border-[#FFC396] border-1 rounded-md">{acronym}</span>{fullName}, {finalYear}</p>

  return (
            <div className="flex flex-col items-start gap-1 bg-white p-2.75 rounded-lg border-[#C38A48] border-1 shadow-lg">
              <div className="flex flex-1 w-full justify-between items-center">
                <div className="flex items-center ">
                  <span className="p-0.75 h-4 m-1.5 bg-orange-200 rounded-2xl"></span>
                  <h3 className="font-bold text-lg text-[#211900]">{education}</h3>
                </div>
                <span className="border-1 text-sm  rounded-xl px-2 py-0.5 bg-green-200">Concluído</span>
              </div>
              <div>
              <p className="text-[#7A6E50]">
                <span className="font-medium  text-[#C38A48] px-1 py 0.5 m-1 border-[#FFC396] border-1 rounded-md">{acronym}</span>
                {fullName}
              </p>
              <div className="flex items-center py-[1px] pr-[1px] m-1  bg-orange-200 border-[#C38A48] border-1 border-l-3 rounded-md text-sm">
                <span className="px-2.5 py-0">{courseType}</span>
                <span className="bg-white py-0.5 px-1.5 rounded-md">{initialYear} - {finalYear}</span>
              </div>
              </div>
            </div>
  );
};

export default EducationCard;

