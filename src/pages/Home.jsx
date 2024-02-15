import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { chartData, circularProgressBarData } from "../utils/dummyData";
import CircularProgressBar from "../components/CircularProgressBar";
import CustomInputRange from "../components/CustomInputRange";
import Layout from "../components/Layout";
import Chart from "../components/Chart";
import DP from "../assets/images/satya.jpg";

const Home = () => {
  const [showIWantList, setShowIWantList] = useState(false);
  const [listText, setListText] = useState("");

  const [showAgeList, setShowAgeList] = useState(false);
  const [ageListText, setAgeListText] = useState("Under 30");

  const [showSalaryList, setShowSalaryList] = useState(false);
  const [salaryListText, setSalaryListText] = useState("$20 - $30");

  const [showGenderList, setShowGenderList] = useState(false);
  const [gender, setGender] = useState("Male");

  const [rangeValue1, setRangeValue1] = useState([25]);
  const [rangeValue2, setRangeValue2] = useState([60]);

  return (
    <Layout>
      {/* User Section Start */}
      <section className=" lg:bg-gray-100 p-5 lg:py-10 xl:px-10 xl:py-8   flex flex-col gap-5 lg:gap-5  xl:gap-8 lg:min-w-[230px] xl:min-w-[300px]">
        <div className="flex items-center gap-3 sm:gap-4 -mt-3 xl:-mt-0 ">
          <div className="w-[50px] h-[50px]  sm:w-[60px] sm:h-[60px] lg:min-w-[60px] lg:min-h-[60px] xl:w-[70px]  xl:h-[70px] rounded-full overflow-hidden shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] ">
            <img src={DP} alt="user" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold -mb-[7px] sm:-mb-[5px] md:-mb-1 xl:-mb-[1px]">
              Hi Satya,
            </h2>
            <span className="text-gray-500 font-medium text-xs sm:text-sm">
              welcome back
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-2 mt-[5px] lg:mt-0 bg-gray-100 p-6 lg:p-0 rounded-2xl">
          <div className="flex flex-col gap-[3px] lg:gap-0">
            <h3 className=" xl:text-xl font-bold lg:mb-2 xl:mb-3">Today</h3>
            <span className="text-3xl lg:text-2xl xl:text-3xl  font-bold">
              $19,892
            </span>
            <span className="text-gray-400 font-medium text-xs xl:text-base">
              Account Balance
            </span>
          </div>

          <div className="flex lg:flex-col items-center lg:items-start gap-10 lg:gap-2">
            <div className="flex flex-col">
              <span className="text-base xl:text-xl font-bold">$4,000</span>
              <span className="text-gray-400 font-medium hidden xl:block">
                Year-to-Date Contributions
              </span>
              <span className="text-gray-400 font-medium text-xs xl:hidden">
                Year-to-Date
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-base xl:text-xl font-bold">$1,892</span>
              <span className="text-gray-400 font-medium text-xs xl:text-base">
                Total Interest
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-start lg:mt-2">
            <button
              className="flex items-center justify-center border-none gap-2 py-[10px] px-7 rounded-xl lg:rounded-lg bg-mainColor text-white w-full lg:w-[145px] lg:hover:bg-[#1a4cff]"
              onClick={() => setShowIWantList(!showIWantList)}
            >
              {listText ? (
                <span className="text-sm  xl:text-base">{listText}</span>
              ) : (
                <span className="text-sm xl:text-base after:content-['...'] after:ml-0.5 lg:after:content-none">
                  I want to
                </span>
              )}

              <span className="hidden lg:flex">
                {showIWantList ? (
                  <FaCaretUp size={16} />
                ) : (
                  <FaCaretDown size={16} />
                )}
              </span>
            </button>

            {showIWantList && (
              <ul className="absolute top-[46px] xl:top-[50px] left-0 z-10 bg-white border rounded-xl w-full lg:w-[145px] shadow-[0_0_4px_0px_rgba(0,0,0,0.1)] lg:shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] overflow-hidden">
                {["Text 1", "Text 2", "Text 3", "Don't Select"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="text-sm text-center lg:text-left xl:text-base py-[10px] px-7 border-b-[1px] last:border-none xl:cursor-pointer lg:hover:bg-gray-200"
                      onClick={() => {
                        setListText(item === "Don't Select" ? "" : item);
                        setShowIWantList(false);
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>

        <div className=" bg-gray-100 p-6 lg:p-0 rounded-2xl">
          <h2 className="xl:text-xl font-bold lg:mt-4 xl:mt-0">
            Recent Transactions
          </h2>
          <ul className="flex flex-col gap-2 lg:gap-0 xl:gap-4 mt-5">
            {[1, 2, 3].map((item, index) => (
              <li key={index} className="border-b-[1px] pb-2 xl:pb-4">
                <span className="text-gray-400 font-medium text-xs xl:text-base">
                  2020-08-0{item}
                </span>
                <p className="text-gray-800 font-bold text-xs xl:text-base">
                  Withdrawal Transfer to Bank-XXX1{item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* User Section End */}

      {/* Retirement Income Section Start */}
      <section className="flex flex-col p-5 lg:py-10 xl:px-10 xl:py-8  gap-5 lg:gap-5 xl:gap-8">
        <div>
          <h2 className="text-mainColor text-sm xl:text-xl font-bold">
            Retirement Income
          </h2>
          <h2 className="text-xl xl:text-[22px] font-bold">
            Starting Year 2056
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
          <div className="flex flex-col gap-1 pb-2 border-b-[1px] border-mainColor">
            <span className="text-2xl lg:text-[22px] xl:text-2xl font-bold">
              $300,000
            </span>
            <span className="text-gray-400 font-medium text-xs xl:text-base w-max">
              My Goal
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-[1px] lg:gap-1 pb-2 border-b-[1px] border-mainColor flex-1 lg:flex-none">
              <span className="lg:text-[22px] xl:text-2xl text-base font-bold">
                59%
              </span>
              <span className="text-gray-400 font-medium text-xs xl:text-base w-max">
                Goal Achieved
              </span>
            </div>

            <div className="flex flex-col gap-[1px] xl:gap-1 pb-2 border-b-[1px] border-mainColor flex-1 lg:flex-none">
              <span className="lg:text-[22px] xl:text-2xl text-base font-bold">
                $300
              </span>
              <span className="text-gray-400 font-medium text-xs xl:text-base w-max">
                Est. Monthly Income
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 xl:mt-0">
          <h2 className="xl:text-xl font-bold xl:font-semibold">
            Contributions Overtime
          </h2>

          <div className="flex gap-5 mb-6 mt-4 lg:mt-1 ">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[3px] xl:gap-2">
              <span className="flex w-[10px] h-[6px] xl:w-3 xl:h-2 rounded-xl bg-[#1434A4]"></span>
              <span className="text-gray-400 font-medium text-xs xl:text-base lg:flex">
                Employer<span className="hidden lg:block">:</span>
              </span>
              <span className="text-xs xl:text-base font-bold xl:font-medium ">
                $73,500
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-[3px] xl:gap-2">
              <span className="flex w-[10px] h-[6px] xl:w-3 xl:h-2 rounded-xl bg-[#3F00FF]"></span>
              <span className="text-gray-400 font-medium text-xs xl:text-base lg:flex">
                Employee<span className="hidden lg:block">:</span>
              </span>
              <span className="text-xs xl:text-base font-bold xl:font-medium ">
                $52,500
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-[3px] xl:gap-2">
              <span className="flex w-[10px] h-[6px] xl:w-3 xl:h-2 rounded-xl bg-[#89b2ff]"></span>
              <span className="text-gray-400 font-medium text-xs xl:text-base lg:flex lg:items-center lg:w-max">
                Total Interest<span className="hidden lg:block">:</span>
              </span>
              <span className="text-xs xl:text-base font-bold xl:font-medium ">
                $244,313
              </span>
            </div>
          </div>

          <div>
            <Chart chartData={chartData} />
          </div>
        </div>

        <div className="my-3 xl:my-0 ">
          <div className="mb-3 lg:mb-5 xl:mb-2">
            <h2 className="text-base xl:text-xl font-bold xl:font-semibold lg:mb-[2px] xl:mb-0">
              How do I compare to my peers?
            </h2>
            <p className="text-gray-400 font-medium text-xs xl:text-base">
              These numbers represent current goal achievement
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 xl:gap-6">
            <div>
              <div className="relative border-b-[1px] lg:pb-2 xl:pb-0">
                <button
                  className="flex items-center justify-center gap-2 lg:gap-2 xl:gap-2 outline-none py-[10px] lg:py-[2px] xl:py-[10px] xl:hover:bg-gray-200 "
                  onClick={() => {
                    setShowAgeList(!showAgeList);
                    setShowGenderList(false);
                    setShowSalaryList(false);
                  }}
                >
                  <span className="font-semibold text-sm xl:text-base  w-[80px] lg:w-[30px] xl:w-[80px] text-left">
                    Age:
                  </span>

                  <div className="flex items-center justify-center gap-[2px]">
                    <span className="font-medium text-gray-500 text-sm xl:text-base">
                      {ageListText}
                    </span>
                    <span className="text-gray-400 xl:text-black">
                      {showAgeList ? (
                        <FaCaretUp size={16} />
                      ) : (
                        <FaCaretDown size={16} />
                      )}
                    </span>
                  </div>
                </button>

                {showAgeList && (
                  <ul className="absolute top-[46px] lg:top-[38px] xl:top-[52px] left-0 z-10  bg-white border rounded-xl w-full xl:w-[145px] shadow-[0_0_4px_0px_rgba(0,0,0,0.1)] xl:shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] overflow-hidden">
                    {["Under 30", "Under 40", "Under 50"].map(
                      (listText, index) => (
                        <li
                          key={index}
                          className="py-[10px] px-7 border-b-[1px] last:border-none xl:cursor-pointer xl:hover:bg-gray-200 text-sm sm:text-base lg:text-sm xl:text-base text-center xl:text-left"
                          onClick={() => {
                            setAgeListText(listText);
                            setShowAgeList(false);
                          }}
                        >
                          {listText}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              <div className="relative border-b-[1px] lg:pb-2 xl:pb-0">
                <button
                  className="flex items-center justify-center gap-2 lg:gap-2 xl:gap-2 outline-none py-[10px] lg:py-[2px] xl:py-[10px] xl:hover:bg-gray-200"
                  onClick={() => {
                    setShowSalaryList(!showSalaryList);
                    setShowAgeList(false);
                    setShowGenderList(false);
                  }}
                >
                  <span className="font-semibold text-sm xl:text-base w-[80px] lg:w-[50px] xl:w-[80px] text-left ">
                    Salary :
                  </span>

                  <div className="flex items-center justify-center gap-[2px]">
                    <span className="font-medium text-gray-500 text-sm xl:text-base lg:w-max">
                      {salaryListText}
                    </span>
                    <span className="text-gray-400 xl:text-black">
                      {showSalaryList ? (
                        <FaCaretUp size={16} />
                      ) : (
                        <FaCaretDown size={16} />
                      )}
                    </span>
                  </div>
                </button>

                {showSalaryList && (
                  <ul className="absolute top-[46px] lg:top-[38px] xl:top-[52px] left-0 z-10  bg-white border rounded-xl w-full xl:w-[145px] shadow-[0_0_4px_0px_rgba(0,0,0,0.1)] xl:shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] overflow-hidden">
                    {["$20 - $30", "$30 - $40", "$40 - $50"].map(
                      (listText, index) => (
                        <li
                          key={index}
                          className="py-[10px] px-7 border-b-[1px] last:border-none xl:cursor-pointer xl:hover:bg-gray-200 text-sm sm:text-base text-center lg:text-sm xl:text-base xl:text-left"
                          onClick={() => {
                            setSalaryListText(listText);
                            setShowSalaryList(false);
                          }}
                        >
                          {listText}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              <div className="relative border-b-[1px] xl:border-none lg:pb-2 xl:pb-0">
                <button
                  className="flex items-center justify-center gap-2 lg:gap-2 xl:gap-2 outline-none py-[10px] lg:py-[2px] xl:py-[10px] xl:hover:bg-gray-200"
                  onClick={() => {
                    setShowGenderList(!showGenderList);
                    setShowSalaryList(false);
                    setShowAgeList(false);
                  }}
                >
                  <span className="font-semibold text-sm xl:text-base w-[80px] lg:w-[60px] xl:w-[80px] text-left">
                    Gender :
                  </span>

                  <div className="flex items-center justify-center gap-[2px]">
                    <span className="font-medium text-gray-500 text-sm xl:text-base">
                      {gender}
                    </span>
                    <span className="text-gray-400 xl:text-black">
                      {showGenderList ? (
                        <FaCaretUp size={16} />
                      ) : (
                        <FaCaretDown size={16} />
                      )}
                    </span>
                  </div>
                </button>

                {showGenderList && (
                  <ul className="absolute top-[46px] lg:top-[38px] xl:top-[52px] left-0 z-10  bg-white border rounded-xl w-full xl:w-[145px] shadow-[0_0_4px_0px_rgba(0,0,0,0.1)] xl:shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] overflow-hidden">
                    {["Male", "Female", "Other"].map((gender, index) => (
                      <li
                        key={index}
                        className="py-[10px] px-7 border-b-[1px] last:border-none xl:cursor-pointer xl:hover:bg-gray-200 text-sm sm:text-base lg:text-sm xl:text-base text-center xl:text-left"
                        onClick={() => {
                          setGender(gender);
                          setShowGenderList(false);
                        }}
                      >
                        {gender}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex xl:gap-2">
              {circularProgressBarData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-[3px] w-1/3"
                >
                  <CircularProgressBar percentage={item?.percentage} />
                  <span className="font-medium text-xs xl:text-base">
                    {item?.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Retirement Income Section End */}

      {/* Retirement Strategy Section Start */}
      <section className="flex flex-col lg:p-5 lg:py-10 xl:py-8 lg:gap-8 relative mb-5 xl:mb-0">
        <div className="bg-gradient-to-b from-slate-100 to-white p-5 xl:p-7 lg:p-4 rounded-t-3xl lg:rounded-xl lg:to-slate-100">
          <h2 className="text-base xl:text-xl font-bold xl:font-semibold mb-5">
            Retirement Startegy
          </h2>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between font-semibold text-sm xl:text-base">
                Employee Contribution
              </label>

              <div className="flex items-center  gap-2">
                <CustomInputRange
                  rangeValue={rangeValue1}
                  setRangeValue={setRangeValue1}
                />
                <span className="font-semibold w-[60px] text-center text-sm xl:text-base">
                  {rangeValue1[0]}%
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between font-semibold text-sm xl:text-base">
                Retirement Age
              </label>

              <div className="flex items-center  gap-2">
                <CustomInputRange
                  rangeValue={rangeValue2}
                  setRangeValue={setRangeValue2}
                />
                <span className="font-semibold w-[60px] text-center text-sm xl:text-base">
                  {rangeValue2[0]}
                </span>
              </div>
            </div>

            <hr className="border-b-[1px] border-gray-200 hidden xl:block" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3 font-semibold text-sm xl:text-base">
                <span> Employer Contribution</span>
                <span>8.4%</span>
              </div>
              <div className="flex items-center justify-between gap-3 font-semibold text-sm xl:text-base">
                <span>Interest Rate</span>
                <span>5%</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={true}
              className="bg-mainColor border-none text-white py-2 rounded-xl lg:rounded-lg lg:hover:bg-[#1a4cff] text-sm xl:text-base"
            >
              Update
            </button>
          </form>

          <div className="flex items-center justify-center mt-5">
            <Link
              to={"#"}
              className="flex items-center text-mainColor font-semibold w-fit text-sm xl:text-base"
            >
              View Help Docs
              <FiChevronRight
                size={17}
                strokeWidth={2}
                className="mt-[3px] ml-[2px]"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start lg:gap-1 lg:border-l-2 border-l-mainColor px-4 py-1  text-sm max-[310px]:text-xs xl:text-base ">
          <span className="text-gray-500 font-semibold text-center lg:text-left">
            Are you considering a <br className="hidden lg:inline" />
            <strong className="text-black/75 ">Housing Advance ?</strong>
          </span>
          <span className="text-gray-400 font-semibold ">
            Limited time reduced interest.
          </span>

          <Link
            to={"#"}
            className="flex items-center text-mainColor text-xs xl:text-[15px] font-semibold w-fit"
          >
            Learn More
            <FiChevronRight size={16} className="mt-[2px] ml-[2px]" />
          </Link>
        </div>
      </section>
      {/* Retirement Strategy Section End */}
    </Layout>
  );
};

export default Home;
