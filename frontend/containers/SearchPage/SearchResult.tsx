import React from 'react';
// import api from '@/apis/config';
// import { useSearch } from '@/apis/hooks';
import { SearchBar } from '@/components/common/SearchBar';
import ItemList from '@/components/list/GridList';
import { itemDataList } from '@/apis/data';

type SearchProps = {
  keyword: string;
};

const SearchResult = (props: SearchProps) => {
  //검색어를 받아왔으니 검색 API 호출
  // const { isLoading, isError, isSuccess, data, error } = useSearch(
  //   props.keyword,
  // );
  // if (isLoading) {
  //   console.log('로딩중...');
  //   return <div>로딩증...</div>;
  // }
  // if (isError) {
  //   console.log(error);
  //   return <div>검색한 결과를 찾을 수 없습니다.</div>;
  // }
  // if (isSuccess) {
  //   console.log(data);
  //   return (
  // <div className="h-[100vh] bg-white pt-20 mx-4">
  //   <SearchBar />
  //   <div className="mt-10">
  //     <label className="ml-2 text-xl font-extrabold text-[#1E266E]">
  //       {props.keyword} 검색 결과
  //     </label>
  //     <hr />
  //     {/** 검색결과에 따른 값
  //      * 검색결과 형태가 정해지면 아래 ItemList에 props로 넘겨주기
  //      */}
  //     {/* <ItemList /> */}
  //   </div>
  // </div>;
  //   );
  // }

  return (
    <div className="flex justify-center">
      <div className="w-[400px] h-[100vh] bg-white pt-20 mx-4">
        <div className="mt-4">
          <label className="ml-2 text-xl font-extrabold text-[#1E266E]">
            {props.keyword} 검색 결과
          </label>
          <hr />
          <div className="my-2">
            <ItemList itemList={itemDataList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
