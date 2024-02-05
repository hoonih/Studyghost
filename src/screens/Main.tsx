import React from 'react'
import userprofile from '../../assets/img/profile.png'
import ic_search from '../../assets/img/search.png'
import ic_list from '../../assets/img/list.png'
import { Image, SafeAreaView, FlatList, Text, View } from 'react-native'
import styled from "styled-components/native";

const data = [
  {
    id: '1',
    profilImage: require('../../assets/img/profile.png'),
    name: '정수학',
    address: '서울특별시 도봉구 창동 14번지 시티월드',
  },
  {
    id: '2',
    profilImage: require('../../assets/img/profile.png'),
    name: '정수락',
    address: '서울특별시 도봉구 창동 14번지 시티월드',
  },
  {
    id: '3',
    profilImage: require('../../assets/img/profile.png'),
    name: '정수락',
    address: '서울특별시 도봉구 창동 14번지 시티월드',
  },
];


const renderItem = ({ item }) => (
  <AcaListItem>
    <Acaimage source={item.profilImage}/>
      <AcaArray>
      <TextAcaname>
        {item.name}
      </TextAcaname>
      <Textadress>
        {item.address}
      </Textadress>
    </AcaArray>
  </AcaListItem>
);

export const Main = () => {
    return (
        <StyledHome>
          <SafeAreaView>
            <Maintext>
              홈
            </Maintext>
            <Container>
              <Containertitle>
                내 정보
              </Containertitle>
              <CenterSet>
                <ProfileImage source={userprofile}/>
                <Profilename>홍예훈</Profilename>
                <Textname>선린인터넷고등학교</Textname>
                <Textpoint>보유 포인트: 10p</Textpoint>
              </CenterSet>
            </Container>
            <Container>
              <Containertitle>
                다음 시간표
              </Containertitle>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />

            </Container>
            <DoubleContainer>
              <Doublecontainerin>
                <IconImage source={ic_search}/>
                <TextAcaname>
                  학원 검색
                </TextAcaname>
              </Doublecontainerin>
              <Doublecontainerin>
                  <IconImage source={ic_list}/>
                <TextAcaname>
                  학원 목록
                </TextAcaname>
              </Doublecontainerin>

            </DoubleContainer>
          </SafeAreaView>
        </StyledHome>
    )
}


const IconImage = styled.Image`
  height: 46px;
  width: 46px;
  margin-bottom: 4px;
`

const ProfileImage = styled.Image`
  height: 86px;
  width: 86px;
  border-radius: 67px;
`

const StyledHome = styled.View`
  height: auto;
  width: auto;
  background-color: #F4F4F4;
  flex: 1;
`;

const Maintext = styled.Text`
  marginStart: 20px;
  marginTop: 22px;
  marginBottom: 22px;
  font-weight: 600;
  font-size: 24px;
`

const Container = styled.View`
  flex-direction: column;
  background-color: white;
  marginHorizontal: 20px;
  marginBottom: 12px;
  border-radius: 16px;
  padding: 16px;
`;

const Doublecontainerin = styled.View `
  flex: 1;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`

const DoubleContainer = styled.View`
  marginHorizontal: 20px;
  gap: 12px;
  flex-direction: row;
  width: auto;
`

const CenterSet = styled.View`
  display: flex;
  marginTop: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Containertitle = styled.Text`
  font-weight: 600;
  font-size: 16px;
`


const Profilename = styled.Text`
  font-weight: 600;
  font-size: 16px;
  marginTop: 8px;
`

const Textname = styled.Text`
  marginTop: 4px;
  font-weight: 500;
  font-size: 12px;
`

const Textpoint = styled.Text`
  marginTop: 4px;
  color: #9D9D9D;
  font-weight: 500;
  font-size: 12px;
`

const TextAcaname = styled.Text`
  font-weight: 500;
  color: black;
  font-size: 16px;
`

const Textadress = styled.Text`
  font-weight: 600;
  color: #747474;
  font-size: 14px;
  marginTop: 4px;
`

const Acaimage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 67px;
`


const AcaArray = styled.View`
  flex-direction: column;
  paddingStart: 10px;
`;

const AcaListItem = styled.View`
  marginTop: 10px;
  align-items: center;
  flex-direction: row;
`;