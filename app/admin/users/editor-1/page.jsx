"use client";
import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "../../../../components/Sidebar";
import Image from "next/image";
import Date from "../../../../components/Date";
import Date2 from "../../../../components/Date2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import checked from "../../../../data/images/cheked.svg";
import unChecked from "../../../../data/images/uncheked.svg";
import checkedCircle from "../../../../data/images/checkedCircle.svg";
import unCheckedCircle from "../../../../data/images/circle.svg";

function Page() {
  const Editor = dynamic(() => import("../../../../components/CKEditor "), {
    ssr: false,
  });

  const [mark, setMark] = useState(false);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);

  const [checkLastOne, setCheckLastOne] = useState(true);
  const [checkLastTwo, setCheckLastTwo] = useState(false);

  return (
    <Sidebar>
      <main className="flex flex-1 flex-col justify-between bg-backG h-[1250px]">
        <div className="    bg-backG ">
          <div className="mx-4 mt-8 ">
            <h1 className="font-bold text-base mb-2 text-black">
              앱 관리 <span> &gt;</span>FAQ 관리
              <span> &gt;</span>FAQ 등록/수정
            </h1>

            <div className="px-6 py-2 pb-6 bg-white ">
              <h1 className="bg-[#eee] my-4 text-[#616161] text-sm font-bold p-2">
                기본 정보
              </h1>
              {/* first row  */}
              <div className="flex mt-5 gap-8 h-[30px]">
                <div className=" flex justify-between items-center w-[25rem] border-b-[2px] border-gray-400 ">
                  <h2 className="text-gray-600  font-lg font-bold mr-[2rem]">
                    모델명
                  </h2>
                  <select className=" px-4 outline-none border-0 text-gray-600">
                    <option disabled selected>
                      RENEVV 9.5
                    </option>
                    <option>RENEVV 9.5</option>
                    <option>RENEVV 10.8</option>
                    <option>RENEVV 13</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center  justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 w-[140px]">
                    노출 순서
                  </div>
                  <div className="ml-6 ">
                    <input
                      type="text"
                      placeholder="1"
                      className="input text-[#616161] h-[28px] w-[250px] mb-1  border-gray-200  focus:border-0 focus:outline-none rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-1 border-b-[2px] gap-10 items-center  border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold ">
                    노출 여부 *
                  </div>
                  <div className="flex justify-center items-center gap-4">
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

                      <span className="text-[14px] font-medium text-[#9e9e9e]">
                        노출
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

                      <span className="text-[14px] font-medium text-[#9e9e9e]">
                        비노출
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* second row */}

              <div className="flex mt-5 gap-8 h-[30px]">
                <div className="flex-1  flex items-center justify-between border-b-[2px] border-gray-400 ">
                  <div className="text-[#616161] text-sm  font-bold mr-4 ">
                    작성자
                  </div>
                  <div className="ml-6">
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="input focus:border-transparent px-2 focus:border-0 focus:outline-none text-[#616161] h-[28px] w-[230px] mb-1 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-between border-b-[2px]  border-gray-400">
                  <div className="text-[#616161] text-sm font-bold  w-[140px]">
                    최종 등록일시
                  </div>
                  <div className="ml-6 text-black">
                    <Date2 />
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
              <h1 className="bg-[#eee] my-4 text-[#616161] text-sm font-bold p-2">
                FAQ 내용
              </h1>

              <div className=" flex items-center gap-4 border-b-[2px] border-gray-400">
                <div className="text-[#616161]  w-[140px] text-sm  font-bold  ">
                  질문 *
                </div>
                <input
                  type="text"
                  placeholder="기기를 연결할 수 없어요."
                  className="input focus:border-transparent px-2 border-gray-200 focus:outline-none text-[#616161] h-[28px] w-full mb-1  rounded-none"
                />
              </div>
            </div>


            {/*  editor  */}

        <section className=" gap-2 bg-white  px-6 pb-7">
          <div  className="">
            <p className="absolute pb-1 text-[#616161]  w-[100px] text-sm  font-bold  border-b-[2px] border-black">
              답변 *
            </p>
          </div>
          <div className="ml-[140px]">
            <Editor
              value="국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다."
              onChange={(event) => {
                // console.log(event);
              }}
            />
          </div>
        </section>
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
