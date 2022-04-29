import styled from "styled-components";

import { history, deletMessage } from "../js/chat";
import DeleteMessage from "./DeleteMessage";

const Bubbles = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #f8f6f6;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0 10px 70%;
  word-wrap: break-word;
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  box-shadow: 0px 2px 2px 0px rgba(14, 39, 41, 0.925);
  list-style: none;

  background-color: #10b4b4;
  border-start-end-radius: 15px;
  border-start-start-radius: 15px;
  border-end-start-radius: 15px;

  @media screen and (max-width: 990px) {
    margin: 10px;
    margin-left: 140px;
    max-width: 80%;
    min-width: 8%;
    margin-bottom: 1em;
    position: relative;

  }

`

const BubbleSomeoneElse = styled(Bubbles)`
  background-color: #0e5a5a;
  color: whitesmoke;
  margin: 10px 70% 10px 0;
  align-self: flex-start;
  border-end-start-radius: 0;
  border-end-end-radius: 15px;
  word-wrap: break-word;
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  box-shadow: 0px 2px 2px 0px rgba(48, 241, 177, 0.2);
  position: relative;

  b {
    color: #cacaca;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
  }

  @media screen and (max-width: 990px) {
    margin: 10px;
  }
`;

export default function BubblesComponent() {
  return (
    <>
      {history.map((value) => {
        if (value.nick.toLowerCase() === "eu") {
          return (
            <Bubbles deleted
              key={value.listKey}
              id={value.listKey}
              onDoubleClick={(e) => {
                e.preventDefault();
                deletMessage(value.listKey);
              }}
            >
              <li>{value.text}</li>
              <DeleteMessage clue={value.listKey} time={value.time} />
            </Bubbles>
          );
        } else {
          return (
            <BubbleSomeoneElse
              key={value.listKey}
              id={value.listKey}
              onDoubleClick={(e) => {
                e.preventDefault();
                deletMessage(value.listKey);
              }}
            >
              <li>
                <b>
                  <i>{value.nick}:</i>
                </b>
              </li>

              <li>{value.text}</li>
              <DeleteMessage clue={value.listKey} time={value.time} />
            </BubbleSomeoneElse>
          );
        }
      })}
    </>
  );
}
