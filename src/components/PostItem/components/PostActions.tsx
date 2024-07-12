import React from 'react';

import { Box, TouchableOpacityBox } from '@components/Box/Box';
import { Icon, IconProps } from '@components/Icon/Icon';
import { Text } from '@components/Text/Text';
import { Post } from '@domain';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {}
  function navigateToComments() {}
  function favoritePost() {}
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        icon={{ default: 'heart', marked: 'heartFill' }}
        text={reactionCount}
        marked
      />
      <Item
        onPress={navigateToComments}
        icon={{ default: 'comment', marked: 'comment' }}
        text={commentCount}
        marked={false}
      />
      <Item
        onPress={favoritePost}
        icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
        text={favoriteCount}
        marked={false}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  marked: boolean;
  text: number;
}

function Item({ onPress, icon, text, marked }: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text bold preset="paragraphSmall" ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
