import { Item } from "./Event.style";
import { Text } from "./Event.style"
import { Desc } from "./Event.style"
export const Event = ({ props }) => {
  return (
    <>
          {props.map(({ name, location, speaker, type, time: { start, end } }) => {
        return (
          <Item key={name}>
            <Text>{name}</Text>
            <Desc>{location}</Desc>
            <Desc>{speaker}</Desc>
            <Desc>{type}</Desc>
            <Desc>{end}</Desc>
            <Desc>{start}</Desc>
          </Item>
        );
      })}
    </>
  );
};
