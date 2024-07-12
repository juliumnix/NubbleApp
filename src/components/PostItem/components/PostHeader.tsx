import React from 'react';
import { Image } from 'react-native';

import { Box } from '@components/Box/Box';
import { Text } from '@components/Text/Text';
import { Post } from '@domain';

type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{ uri: author.profileURL }}
        style={{ width: 32, height: 32, borderRadius: 14 }}
      />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.name}
      </Text>
    </Box>
  );
}
