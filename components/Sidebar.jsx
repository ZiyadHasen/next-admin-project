import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import logo from "../data/images/Logo.png";
import Image from "next/image";

const Sidebar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("The current route is ", pathname);
  return (
    <>
      <div className="   border-b-2 flex justify-between p-4">
        <Image src={logo} alt="logo" className="object-cover h-full" />

        <div className="flex">
          <div className="text-sm font-bold mx-1 tracking-tight">홍길동 님</div>
          <div className="text-sm font-light mx-1 tracking-tight text-neutral-400">
            (정보수정)
          </div>
          <div className="text-sm font-light mx-1 px-2 border-l-2 border-r-2 border-neutral-400 text-neutral-400">
            최근접속:2022-12-23 14:35
          </div>
          <div className="text-sm font-bold text-neutral-500 mx-1 tracking-tight">
            로그아웃
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="text-black h-screen bg-white py-14   w-[242px]">
          <div className="mb-4">
            <div className="flex items-center gap-1 px-6">
              <div className="w-5 h-5 rounded-full bg-[#9e9e9e] mr-2"></div>
              <h1 className="font-semibold text-[#616161] text-base ">
                운영 관리
              </h1>
            </div>
            <ul className="mt-2">
              <Link href="/admin/users/administrator-management">
                <li
                  className={`my-2 pl-14
              ${
                pathname == "/admin/users/administrator-management" ||
                pathname == "/admin/users/administrator-management-2" ||
                pathname == "/admin/users/administrator-management-3"
                  ? "bg-[#eee] font-bold py-1"
                  : "font-normal"
              }
              `}
                >
                  └ 관리자 관리
                </li>
              </Link>

              <Link href="/admin/users/serial-number-management">
                <li
                  className={`my-2 pl-14
              ${
                pathname == "/admin/users/serial-number-management"
                  ? "bg-[#eee] font-bold py-1"
                  : "font-normal"
              }
              `}
                >
                  └ 시리얼 넘버 관리
                </li>
              </Link>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1 px-6">
              <div className="w-5 h-5 rounded-full bg-[#9e9e9e] mr-2"></div>
              <h1 className="font-semibold text-[#616161] text-base">
                회원 관리
              </h1>
            </div>
            <ul className="">
              <Link href="/admin/users/membership-management">
                <li
                  className={`my-2 pl-14
              ${
                pathname == "/admin/users/membership-management"
                  ? "bg-[#eee] font-bold py-1"
                  : "font-normal"
              }
              `}
                >
                  └ 회원 관리
                </li>
              </Link>

              <Link href="/admin/users/device-management">
                <li
                  className={`my-2 pl-14
              ${
                pathname == "/admin/users/device-management" ||
                pathname == "/admin/users/device-management-2"
                  ? "bg-[#eee] font-bold py-1"
                  : "font-normal"
              }
              `}
                >
                  └ 기기 관리
                </li>
              </Link>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1 px-6">
              <div className="w-5 h-5 rounded-full bg-[#9e9e9e] mr-2"></div>
              <h1 className="font-semibold text-[#616161] text-base">
                사용기록 관리
              </h1>
            </div>
            <ul className="">
              <Link href="/admin/users/usage-record-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/usage-record-management"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 사용기록 관리
                </li>
              </Link>
              <Link href="/admin/users/mission-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/mission-management" || pathname == "/admin/users/mission-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 미션 관리
                </li>
              </Link>
              <Link href="/admin/users/coupon-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/coupon-management" ||
  pathname == "/admin/users/coupon-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 쿠폰 관리
                </li>
              </Link>
              <Link href="/admin/users/coupon-issuance-record">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/coupon-issuance-record"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 쿠폰 발급 관리
                </li>
              </Link>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1 px-6">
              <div className="w-5 h-5 rounded-full bg-[#9e9e9e] mr-2"></div>
              <h1 className="font-semibold text-[#616161] text-base">
                앱 관리
              </h1>
            </div>
            <ul className="">
              <Link href="/admin/users/guide-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/guide-management" ||
  pathname == "/admin/users/guide-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 가이드 관리
                </li>
              </Link>
              <Link href="/admin/users/faq-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/faq-management" ||
  pathname == "/admin/users/faq-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ FAQ 관리
                </li>
              </Link>
              <Link href="/admin/users/shopping-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/shopping-management" ||
  pathname == "/admin/users/shopping-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 쇼핑 관리
                </li>
              </Link>
              <Link href="/admin/users/terms-and-conditions-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/terms-and-conditions-management"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 약관 관리
                </li>
              </Link>
              <Link href="/admin/users/pop-up-management">
                <li
                  className={`my-2 pl-14
${
  pathname == "/admin/users/pop-up-management" ||
  pathname == "/admin/users/pop-up-management-2"
    ? "bg-[#eee] font-bold py-1"
    : "font-normal"
}
`}
                >
                  └ 팝업 관리
                </li>
              </Link>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1 px-6">
              <div className="w-5 h-5 rounded-full bg-[#9e9e9e] mr-2"></div>
              <h1 className="font-semibold text-[#616161] text-base">
                통계 관리
              </h1>
            </div>
            <ul className="">
              <li className=" my-2 pl-14 font-normal text-[16px] ">
                <Link href="/admin/user">└ 회원/기기 통계</Link>
              </li>
              <li className=" my-2 pl-14 font-normal text-[16px]">
                <Link href="/admin/dashboard">└ 접속/사용 통계</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
