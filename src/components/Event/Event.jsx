import { Item } from "./Event.style";
import { Text } from "./Event.style"
import { Desc } from "./Event.style"
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdTypeSpecimen } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { formatDate } from "../utils/formatTime"
import{formatDistance} from"../utils/formatDifference"



export const Event = ({ props }) => {
  return (
    <>
      {props.map(({ name, location, speaker, type, time: { start, end } }) => {
        const formatTime = formatDate(start)
        const formatDeef = formatDistance(start, end)
        return (
          <Item key={name}>
            <Text>{name}</Text>
            <Desc> <FaLocationDot /> {location}</Desc>
            <Desc> <IoPeople /> {speaker}</Desc>
            <Desc> <MdTypeSpecimen /> {type}</Desc>
            <Desc> <FaRegCalendarAlt />{formatTime}</Desc>
            <Desc> <IoIosTimer />{formatDeef}</Desc>
          </Item>
        );
      })}
    </>
  );
};
