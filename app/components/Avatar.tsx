"use client";

import Image from "next/image";
import { FC } from "react";

const Avatar: FC = () => {
  return (
    <Image
      width={30}
      height={30}
      className="rounded-full"
      alt="Avatar"
      src="/images/placeholder.png"
    />
  );
};

export default Avatar;
