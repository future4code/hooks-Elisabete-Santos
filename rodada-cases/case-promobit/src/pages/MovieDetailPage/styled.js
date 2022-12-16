import styled from "styled-components"

export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 600px;
  width: 100%;
  padding: 50px 10vw 50px 540px;

  background-color: #28608d;
  color: white;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 34px 12px;
  }
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
`

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px 0;

  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  b{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding-top: 32px;
  }
`

export const MoviePosterContainer = styled.div`
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    display: flex;
    justify-content: center;

    width: 100%;
  }
`

export const Assessment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  gap: 0.725rem;

  p {
    line-height: 22px;
  }
`

export const CrewContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 33px;
`

export const CrewContent = styled.div`
  margin-left: 0rem;
`

export const CrewTitle = styled.h1`
  /* font-size: 1rem; */
  font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;
  
`

export const CrewInfo = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-size: 18px;
`


export const MoviePoster = styled.img`
  position: absolute;
  top: 100px;
  left: 112px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    position: relative;
    top: 0;
    left: 0;

    width: 186px;
    height: 279px;
  }
`

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 12px;
  }
`

export const CastMenu = styled.nav`
  display: flex;
  width: 95%;
  gap: 20px;
  padding-bottom: 20px;
  overflow-x: auto;

  ::-webkit-scrollbar{
    height: 12px;
    background: #DDDDDD;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb{
    background: #ADADAD;
    border-radius: 100px;
  }
`

export const TrailerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 12px;
  }
`

export const Trailer = styled.iframe`
  width: 720px;
  height: 405px;
  border: none;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;
    max-width: 300px;
    height: 169px;
  }
`

export const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 12px;
    gap: 12px;
  }
`

export const Recommendations = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    flex-grow: 1;
    justify-content: center;
    
    gap: 12px;
  }
`