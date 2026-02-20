export const Event = ({ props }) => {
  return (
    <>
          {props.map(({ name, location, speaker, type, time: { start, end } }) => {
        return (
          <li key={name}>
                <h2>{name}</h2>
                <p>{ location}</p>
                <p>{speaker }</p>
                <p>{ type}</p>
                <p>{ end}</p>
                <p>{ start}</p>
          </li>
        );
      })}
    </>
  );
};
