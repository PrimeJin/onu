import React from 'react';
import { useState } from 'react';
// import PillImg from '../../public/jong_pill.svg';
import PillDetailInfo from './PillDetailInfo';
import PillDetailReview from './PillDetailReview';
import fillHeart from '../../public/fillHeart.png';
import emptyHeart from '../../public/emptyHeart.png';
import Image from 'next/image';

type ingredient = {
  ingredientName: string;
  ingredientAmount: string;
  recommendedIntake: number;
};

type detail = {
  message: string;
  nutrientId: number;
  nutrientName: string;
  nutrientImageUrl: string;
  nutrientBrand: string;
  nutrientIntake: string;
  nutrientCaution: string;
  nutrientExpiration: string;
  nutrientType: string;
  nutrientMaterial: string;
  isInterested: boolean;
  ingredientList: {
    ingredientName: string;
    ingredientAmount: string;
    recommendedIntake: number;
  };
  functionList: Array<string>;
};

function PillDetailMain(): React.ReactElement {
  const [infoSwitch, setInfoSwitch] = useState<boolean>(true);
  const [like, setLike] = useState<boolean>(true);

  //제품상세정보<->리뷰
  const switchInfo = () => {
    setInfoSwitch(true);
  };

  const switchReview = () => {
    setInfoSwitch(false);
  };

  //좋아요 on/off
  const likeOrNot = () => {
    setLike(!like);
  };

  const items = {
    message: 'success',
    nutrientId: 1,
    nutrientName: '유산균',
    nutrientImageUrl: '',
    nutrientBrand: '종근당',
    nutrientIntake:
      '1일 3회, 1회 4정 (1정당 250mg)을 물과 함께 섭취하십시오.', //섭취 방법
    nutrientCaution:
      '특정질환, 특이체질이거나 알러지 체질의 경우에는 간혹 개인에 따라 과민반응을 나타낼 수 있으므로 원료를 확인하신 후 섭취하십시오.', //섭취 시 주의사항
    nutrientExpiration: '제조일로부터 2년', //유효기간
    nutrientType: '가루', //제형,
    nutrientMaterial:
      '스피루리나(고시형),구연산,프로필렌글리콜,글리세린지방산에스테르,글리세린지방산에스테르혼합제제용액,덱스트린,효소처리탱자추출물,효소처리탱자추출물,히드록시프로필메틸셀룰로스,스테아린산마그네슘,삼백초추출물분말,인동추출분말,당잔대뿌리,민들레,결명자추출물분말,당근,검정콩,명일엽,호박,케일잎,덱스트린,클로렐라(고시형),결정셀룰로스,칼슘(고시형)...', //원재료
    isInterested: true,
    ingredientList: {
      ingredientName: '칼슘',
      ingredientAmount: '11mg α-TE',
      recommendedIntake: 100,
    },
    functionList: ['뼈 및 관절 건강과 근력 개선', '', ''],
  };

  return (
    <div className="h-[100vh] mt-20">
      <div className="mx-4">
        {/* <PillImg className="w-1/2 mx-auto my-6" /> */}

        <div>
          <div className="grid grid-cols-12">
            <div className="grid content-center col-span-8 row-span-3 ml-1 text-sm font-light text-gray-500">
              {items.nutrientBrand}
            </div>
            <div className="grid content-center col-span-3 row-span-3 justify-items-end">
              <button className="w-24 h-6 text-gray-500 badge badge-outline">
                비교하기
              </button>
            </div>
            <div className="grid content-center col-span-1 justify-items-end">
              <button onClick={likeOrNot}>
                {like ? (
                  <Image
                    className="w-7 h-8"
                    src={emptyHeart}
                    alt="사진깨짐"
                  />
                ) : (
                  <Image
                    className="w-7 h-8"
                    src={fillHeart}
                    alt="사진깨짐"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="mt-2 text-xl font-medium bg-yellow-200">
            {items.nutrientName}
          </div>
          <div className="mt-5 shadow-md ">
            <div className="text-center">원재료</div>
            {items.nutrientMaterial}
          </div>
        </div>
      </div>
      {/*여기는 파란부분 */}
      <div className="bg-[#F2F9FF] mt-8 pt-6 pb-8">
        <hr className="mx-4" />
        <div className="grid grid-cols-2 py-4 mx-4 bg-white tabs justify-items-center">
          <div className="col-span-1">
            <button
              className={`w-full font-semibold ${
                infoSwitch ? 'text-blue-500' : 'text-black'
              }`}
              onClick={switchInfo}
            >
              제품상세정보
            </button>
          </div>
          <div className="col-span-1">
            <button
              className={`w-full font-semibold ${
                infoSwitch ? 'text-black' : 'text-blue-500'
              }`}
              onClick={switchReview}
            >
              리뷰
            </button>
          </div>
        </div>
        <hr className="mx-4" />
        <div className="mx-4">
          {infoSwitch ? <PillDetailInfo /> : <PillDetailReview />}
        </div>
      </div>
    </div>
  );
}

export default PillDetailMain;