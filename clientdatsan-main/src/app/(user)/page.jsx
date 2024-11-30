import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Home() {
  return (
    <div className="text-black ">
      <div className="h-[500px] bg-[url('/imageBg.jpg')] bg-center  text-white px-20  flex justify-center items-center flex-col ">
        <div className="flex items-center">
          <FaStar size={14} />
          <FaStar size={24} className="text-yellow mx-15" />
          <FaStar size={14} />
        </div>
        <h2 className="text-[44px]  text-center font-[500] p-15 px-25    ">HỆ THỐNG HỖ TRỢ TÌM KIẾM SÂN BÃI NHANH</h2>
        <span className="h-[4px] w-[50px] bg-[#3aaced] rounded-3  "></span>
        <h3 className="pt-15 ">
          Dữ liệu được Datsan247 cập nhật thường xuyên giúp cho người dùng tìm được sân một cách nhanh nhất
        </h3>
      </div>
      <div className="py-[80px] px-15 lg:flex lg:container ">
        <div className="flex  items-center flex-col py-15" >
          <Image src={"/image_1.png"} alt="img" width={86} height={86} className="mb-20 " />
          <h3 className="text-[24px] font-[500] mb-[12px]  ">
            Tìm kiếm vị trí sân
          </h3>
          <p className="text-center">
            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
          </p>
        </div>
        <div className="flex  items-center flex-col py-15" >
          <Image src={"/image_2.png"} alt="img" width={86} height={86} className="mb-20 " />
          <h3 className="text-[24px] font-[500] mb-[12px]  ">
            Đặt lịch online
          </h3>
          <p className="text-center">
            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
          </p>
        </div>
        <div className="flex  items-center flex-col py-15" >
          <Image src={"/image_3.png"} alt="img" width={86} height={86} className="mb-20 " />
          <h3 className="text-[24px] font-[500] mb-[12px]  ">
            Tìm kiếm vị trí sân
          </h3>
          <p className="text-center">
            Dữ liệu sân đấu dồi dào, liên tục cập nhật, giúp bạn dễ dàng tìm kiếm theo khu vực mong muốn
          </p>
        </div>
      </div>
      <div className="bg-yellow px-15 py-20 lg:py-[40px] ">
        <form action="" className="lg:flex lg:justify-between lg:container" >
          <h4 className="text-[18px] font-[500] mb-[35px] lg:mb-0  ">
            Bạn muốn đăng ký sử dụng
            <br />
            phần mềm quản lý sân Datsan247 MIỄN PHÍ?
          </h4>
          <input type="text" placeholder="Họ & tên *" className="px-15 h-[48px] w-full lg:w-[150px] rounded-10 mb-20 lg:mb-0  " />
          <input type="text" placeholder="Số điện thoại *" className="px-15 h-[48px] w-full lg:w-[150px] rounded-10 mb-20 lg:mb-0  " />
          <input type="text" placeholder="Email" className="px-15 h-[48px] w-full lg:w-[150px] rounded-10 mb-20 lg:mb-0  " />
          <button className="bg-blue-bold rounded-10  text-white p-15 lg:px-20    ">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
}
