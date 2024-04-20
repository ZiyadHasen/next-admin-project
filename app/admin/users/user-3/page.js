"use client";
import React from "react";
import { useState } from "react";
import Sidebar from "../../../../components/Sidebar";
import Image from "next/image";
import Date from "../../../../components/Date";

import checked from "../../../../data/images/cheked.svg";
import unChecked from "../../../../data/images/uncheked.svg";
import checkedCircle from "../../../../data/images/checkedCircle.svg";
import unCheckedCircle from "../../../../data/images/circle.svg";

function Page() {
  const [mark, setMark] = useState(false);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);

  const [checkLastOne, setCheckLastOne] = useState(true);
  const [checkLastTwo, setCheckLastTwo] = useState(false);


  return (
    <Sidebar>
      <main className="flex flex-col justify-between  text-white  bg-backG">
        <div className=" text-white   bg-backG ">
          <div className="mx-4 mt-8">
            <h1 className="font-bold text-base mb-2 text-black">
              운영 관리<span className="m-2 ">&gt;</span>관리자 관리
            </h1>

            <div className="px-6 py-2 pb-6 bg-white ">
              <h1 className="bg-[#eee] my-4 text-[#616161] text-sm font-bold p-2">
                기본 정보
              </h1>
              {/* first row  */}
              <div className="flex mt-5 gap-8 h-[30px]">
                <div className="flex-1 flex items-center pb-3 justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 w-[140px]">
                    관리자 번호
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="00001"
                      className="input text-[#616161] h-[28px] w-[200px] mb-1  focus:border-0 focus:outline-none rounded-none"
                    />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-between pb-4 border-b-[2px]  border-gray-400">
                  <div className="text-[#616161] text-sm font-bold  w-[140px]">
                    등록일시
                  </div>
                  <div className="ml-6 text-black">
                    {/* <Date height={12} /> */}
                    <input type="datetime-local" />
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>

              {/* second row */}
              <div className="flex gap-6 mt-5 h-[30px]">
                <div className="flex-1 flex items-center  justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 ">
                    계정(이메일) *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="name@domain.co.kr"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex-1  flex items-center justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 ">
                    비밀번호 *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="********"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161]  text-sm font-bold mr-4">
                    비밀번호 확인 *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="*********"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
              </div>

              {/* third row */}
              <div className="flex gap-6 mt-5 h-[30px]">
                <div className="flex-1 flex items-center  justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 ">
                    관리자 명 *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex-1  flex items-center justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 ">
                    연락처 *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="010-1234-5678"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161]  text-sm font-bold mr-4">
                    비밀번호 확인 *
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="플랫폼 운영부"
                      className="input focus:border-transparent px-2 border-gray-300 focus:border-0 focus:outline-none bg-gray-50 text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
              </div>

              {/* fourth row */}
              <div className="flex gap-6 mt-5 h-[30px]">
                <div className="w-[793px] flex items-center pb-3  border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm font-bold mr-4">
                    접근 기간 *
                  </div>
                  <div className="ml-6">
                    <Date />
                  </div>
                  <div
                    className="flex gap-1 justify-center items-center cursor-pointer ml-3"
                    onClick={() => setMark((prev) => !prev)}
                  >
                    {mark ? (
                      <Image src={checked} alt="checked" />
                    ) : (
                      <Image src={unChecked} alt="un-checked" />
                    )}
                    <p className="text-[#9e9e9e] text-[14px] font-medium">
                      무제한
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-self-end pb-4 border-b-[2px]  border-gray-400 w-[385px]">
                  <div className="text-[#616161] text-sm font-bold mr-[6rem]">
                    잠금 여부 *
                  </div>
                  <div className="flex gap-5">
                    <div
                      className="flex gap-1 justify-center items-center cursor-pointer"
                      onClick={() => {
                        setCheckOne(true);
                        setCheckTwo(false);
                      }}
                    >
                      {checkOne ? (
                        <Image src={checkedCircle} alt="checked" />
                      ) : (
                        <Image src={unCheckedCircle} alt="un-checked" />
                      )}

                      <span className="tetx-[14px] font-medium text-[#9e9e9e]">
                        해제
                      </span>
                    </div>
                    <div
                      className="flex gap-1 justify-center items-center cursor-pointer"
                      onClick={() => {
                        setCheckTwo(true);
                        setCheckOne(false);
                      }}
                    >
                      {checkTwo ? (
                        <Image src={checkedCircle} alt="checked" />
                      ) : (
                        <Image src={unCheckedCircle} alt="un-checked" />
                      )}

                      <span className="tetx-[14px] font-medium text-[#9e9e9e]">
                        잠금
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* fourth */}

              <div className="h-[30px]  gap-[4rem] flex flex-shrink justify-between items-center w-1/3 border-b-[2px] border-gray-400 mt-4">
                <div className="text-[#616161] text-sm font-bold flex-shrink mr-4">
                  권한*{" "}
                </div>
                <div className="flex gap-5">
                    <div
                      className="flex gap-1 justify-center items-center cursor-pointer"
                      onClick={() => {
                        setCheckLastOne(true);
                        setCheckLastTwo(false);
                      }}
                    >
                      {checkLastOne ? (
                        <Image src={checkedCircle} alt="checked" />
                      ) : (
                        <Image src={unCheckedCircle} alt="un-checked" />
                      )}

                      <span className="tetx-[14px] font-medium text-[#9e9e9e]">
                      일반 관리자
                      </span>
                    </div>
                    <div
                      className="flex gap-1 justify-center items-center cursor-pointer"
                      onClick={() => {
                        setCheckLastTwo(true);
                        setCheckLastOne(false);
                      }}
                    >
                      {checkLastTwo ? (
                        <Image src={checkedCircle} alt="checked" />
                      ) : (
                        <Image src={unCheckedCircle} alt="un-checked" />
                      )}

                      <span className="tetx-[14px] font-medium text-[#9e9e9e]">
                      슈퍼 관리자
                      </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <div className="h-110px  bg-white border-t-[2px] border-gray-400">
          <div className="flex gap-6 justify-center   items-center mt-[2rem]   ">
            <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
            취소
            </button>
            <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
            등록
            </button>
          </div>
          <div className="flex gap-6 justify-center my-4   items-center    ">
            <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
            취소
            </button>
            <button className="font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]">
            저장
            </button>
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
