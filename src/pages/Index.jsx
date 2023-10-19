// import AuthHeader from "../components/AuthHeader";
import MainLayout from "../components/layout/MainLayout";
import landingImageD from "../assets/images/landingImageD.png";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  return (
    <section className="">
      <MainLayout>
        <div className="main">
          <div className="w-11/12 mx-auto">
            <div className="flex my-10">
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-11/12 leading-[4rem]">
                  <p className="text-base font-bold text-primaryBlue">
                    GET STARTED
                  </p>
                  <h2 className="text-[50px] lg:text-[56px] md:tracking-normal lg:tracking-[0.1rem]">
                    {/* lg:tracking-[0.15rem] */}
                    <p className="font-bold">Hire an expert &</p>{" "}
                    <p className="md:tracking-tight lg:tracking-[0.02rem]">get your job done!</p>
                  </h2>
                  <div className="mt-6">
                    <form action="" className="">
                      <div className="w-full flex items-center gap-3">
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full border py-[13px] px-[21px] h-[56px] outline-none bg-[#D4E4FB] border-l-4 border-l-primaryBlue rounded-[5px]"
                            placeholder="Search experts, Country"
                          />
                        </div>
                        <div className="">
                          <button className="flex justify-center items-center rounded-[10px] border-0 outline-none h-[56px] w-[56px] bg-primaryBlue text-white">
                            <BiSearch />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className=" ">
                  <img src={landingImageD} alt="lady with a PC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default Home;
