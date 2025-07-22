import React from 'react';
import { View, Image, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface UserAvatarProps {
  name: string;
  imageUri?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  imageUri,
  size = 'md',
  className = '',
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View
      className={twMerge(
        `items-center justify-center overflow-hidden rounded-full bg-gray-300 ${sizes[size]}`,
        className
      )}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} className="h-full w-full" resizeMode="cover" />
      ) : (
        <Text className="font-bold text-white">{initials}</Text>
      )}
    </View>
  );
};
