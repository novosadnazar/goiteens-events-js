import styled from "styled-components";

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 4);
  box-sizing: border-box;

  background-color: #fcebd5;
  border: 2px solid #eeb482;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.h2`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #333;
  font-weight: 800;
`;

export const Desc = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #4a4a4a;
`;
