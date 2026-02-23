import { Item } from "./Event.style";
import { Text } from "./Event.style"
import { Desc } from "./Event.style"
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import {IoIosTimer} from "react-icons/io";


export const Event = ({ props }) => {
  return (
    <>
          {props.map(({ name, location, speaker, type, time: { start, end } }) => {
        return (
          <Item key={name}>
            <Text>{name}</Text>
            <Desc> <FaLocationDot /> {location}</Desc>
            <Desc> <IoPeople /> {speaker}</Desc>
            <Desc> <FaRegCalendarAlt />{type}</Desc>
            <Desc> <IoIosTimer />{end}</Desc>
            <Desc> <IoIosTimer />{start}</Desc>
          </Item>
        );
      })}
    </>
  );
};
