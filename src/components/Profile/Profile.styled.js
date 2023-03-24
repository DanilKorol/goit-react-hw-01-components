import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: white;
  max-width: 380px;
  width: 300px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 0px rgba(170, 170, 170, 1);
  font-size: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
`;

export const UserPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid black;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const UserLocation = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const SocialStats = styled.ul`
  display: flex;
  background-color: rgb(187, 220, 235);
  border-top: 1px solid rgb(115, 120, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-right: 1px solid rgb(115, 120, 120);
    text-align: center;
    padding: 10px;
    gap: 5px;
  }

  li:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
