//'use client'

import React, { useEffect } from 'react';
import Main from '/public/main.svg';
import Image from 'next/image';
import kakao from '/public/kakao_login_large_wide.png';
import Link from 'next/link';

const Login = () => {
  useEffect((): void => {}, []);

  return (
    <div className="grid grid-rows h-[100vh] bg-white pt-20">
      {/* 로고화면
       */}
      <div className="w-full h-80 bg-[#D8EDFF] flex justify-center items-center pl-10">
        <Main />
      </div>
      {/* 폼화면 */}
      <div className="grid grid-cols-4">
        <div className="col-start-2 col-end-4">
          <button>
            <Link href="">
              <Image
                src={kakao}
                alt="kakaoLogin"
                className="w-full h-full"
                priority={true}
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;