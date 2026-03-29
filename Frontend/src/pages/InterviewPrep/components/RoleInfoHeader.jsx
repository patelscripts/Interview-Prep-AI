import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdate,
}) => {
  return (
    <div className="bg-white relative">
      <div className=" container mx-18 px-10 md:px-0">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-medium">{role}</h2>
                  <p className="text-sm text-medium text-gray-900 mt-1">
                    {topicsToFocus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Experience:{experience} {experience == 1 ? "Year" : "Years"}
            </div>

            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              {questions} Q&A
            </div>

            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Last Updated :{lastUpdate}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[40vw] md:w-[30vw] h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-20 h-20 bg-purple-400 blur-[70px] opacity-70 animate-blob1" />
          <div className="absolute top-20 right-32 w-14 h-14 bg-pink-400 blur-[60px] opacity-60 animate-blob2" />
          <div className="absolute top-32 right-16 w-24 h-24 bg-blue-400 blur-[80px] opacity-50 animate-blob3" />
          <div className="absolute top-16 right-5 w-16 h-16 bg-orange-300 blur-[55px] opacity-60 animate-blob2" />
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;
