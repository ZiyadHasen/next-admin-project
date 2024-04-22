"use client";
import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "../../../../components/Sidebar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useRouter } from "next/navigation";

function Page() {
  const Editor = dynamic(() => import("../../../../components/CKEditor "), {
    ssr: false,
  });

  const router = useRouter();
  const goNext = () => {
    router.push("/admin");
  };

  return (
    <Sidebar>
      <main className="flex-1 text-black p-4 filter drop-shadow-md shadow-inner shadow-black/25 bg-backG h-[900px]">
        <div className="mx-4 mt-8">
          <div className="text-[20px] font-bold  ">앱 관리 &gt; 약관 관리</div>

          <div className="flex  items-center ">
            <p className="text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] border-b-0 bg-[#fff] cursor-pointer">
              이용 약관
            </p>
            <p className="text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] bg-[#fff] cursor-pointer">
              개인정보 처리방침
            </p>
            <p className="text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] bg-[#fff] cursor-pointer">
              개인정보 수집 및 이용동의
            </p>
          </div>

          <section className="">
            <article className=" bg-white">
              <Editor
                value="
                <h1>제1조 (목적)</h1>
                이 약관은 ㈜메이튼(이하 회사라 칭함)이 운영하는 인터넷 관련 서비스(리네브 앱 이하 리네브 또는 서비스라 칭함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다."
                onChange={(event) => {
                  // console.log(event);
                }}
              />
            </article>

            <div className="  bg-white border-t-[1px] border-gray-400">
              <div className="flex gap-6 justify-center   items-center py-4  ">
                <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
                  취소
                </button>
                <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
                  등록
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
