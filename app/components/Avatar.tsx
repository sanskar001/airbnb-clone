"use client";

import Image from "next/image";
import { FC } from "react";

export interface AvatarProps {
  src?: string | null;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      width={30}
      height={30}
      className="rounded-full"
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
