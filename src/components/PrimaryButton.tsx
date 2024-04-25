import React from 'react';
import { Pressable, Text } from 'react-native';
import { CommonButtonProps, PrimaryButtonProps } from '@models/button';

interface Props extends Omit<PrimaryButtonProps & CommonButtonProps, 'type'> {}

export default function PrimaryButton(props: Props) {
  return (
    <Pressable style={({ pressed }) => [
      {
        opacity: pressed ? 0.5 : 1,
      },
      props.containerStyle
    ]}>
      <Text style={props.textStyle}>{props.title}</Text>
    </Pressable>
  );
}