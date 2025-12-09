"use client";
import { AppDispatch } from "@/app/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Boards = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {}, [dispatch]);
  return (
    <div className="w-full h-full gap-6 flex items-center justify-center  overflow-x-auto p-4">
      <div>
        <p className="heading-l text-MediumGrey">
          Henüz bir board oluşturmadın , sol taraftaki butona tıkla ve ilk adımını at . Listedeki boardlara
          gözat veya yeni bir tane oluştur
        </p>
      </div>
    </div>
  );
};

export default Boards;
