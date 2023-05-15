import { useEffect, useState } from 'react';
import api from '@/apis/config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MyTakingItem from './MyTakingItem';

//나의 복용중인 영양제 리스트
const Taking = (): React.ReactElement => {
  const [userId, setUserId] = useState<number | null>(null);
  const [itemData, setItemData] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const id = Number.parseInt(
      localStorage.getItem('userId') as string,
    );
    setUserId(id);
  }, []);

  useEffect(() => {
    if (userId !== null) {
      // userId가 정의된 후에만 API 호출을 실행합니다.
      getItemData(userId).then((res) => {
        // API 응답의 데이터 구조에 대한 안전한 처리를 추가합니다.
        if (res?.data?.takingNutrientList) {
          setItemData(res.data.takingNutrientList);
        }
      });
    }
  }, [userId]);

  const getItemData = async (id: number) => {
    return await api.getTakingPillList(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="ml-2 text-xl font-extrabold text-[#1E266E] mb-2">
          복용 중인 영양제
        </p>
        <button
          className="btn bg-[#1E266E] btn-xs"
          onClick={() => router.push('/search')}
        >
          추가하기
        </button>
      </div>

      <div className="flex flex-col space-x-2 items-center w-[400px] bg-white shadow-lg text-xs font-base text-[#909090] rounded-md p-4">
        <div id="item-list">
          {itemData && userId !== null ? (
            itemData.map((item, index) => (
              <MyTakingItem item={item} id={userId} />
            ))
          ) : (
            <div className="flex flex-col">
              <span>복용 중인 영양제가 없습니다.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taking;