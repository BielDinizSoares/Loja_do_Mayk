// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size: "small" | "medium" | "large" | "Xlarge";
  border?: boolean;
}

const sizeClasses = {
  small: "w-8 h-8 text-sm",
  medium: "w-12 h-12 text-md",
  large: "w-16 h-16 text-lg",
  Xlarge: "w-36 h-36 text-xl",
};

export function Avatar({ src, alt, size, border }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${border ? "border-2 border-slate-600" : ""
        } rounded-md overflow-hidden bg-gray-200 w-auto`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          width={100}
          height={100}
        />
      ) : (
        <span className="text-gray-600">{alt?.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}
