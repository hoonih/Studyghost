import { SafeAreaView, Text } from "react-native"
import React, { useState } from "react"
import styled from "styled-components/native";

export const Calendar = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <SafeAreaView>
            <Maintext>
                캘린더
            </Maintext>
            <Weekand>
                <WeekandItemStart
                    onPress={() => handleClick(0)}
                    isClicked={selectedItemIndex === 0}>
                        <StyledDay isClicked={selectedItemIndex === 0}>
                            일
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 0}>
                            영어
                        </StyledSubject>
                </WeekandItemStart>
                <WeekandItem 
                    onPress={() => handleClick(1)}
                    isClicked={selectedItemIndex === 1}>
                        <StyledDay isClicked={selectedItemIndex === 1}>
                            월
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 1}>
                            영어
                        </StyledSubject>
                </WeekandItem>
                <WeekandItem
                    onPress={() => handleClick(2)}
                    isClicked={selectedItemIndex === 2}>
                        <StyledDay isClicked={selectedItemIndex === 2}>
                            화
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 2}>
                            영어
                        </StyledSubject>
                </WeekandItem>
                <WeekandItem
                    onPress={() => handleClick(3)}
                    isClicked={selectedItemIndex === 3}>
                        <StyledDay isClicked={selectedItemIndex === 3}>
                            수
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 3}>
                            영어
                        </StyledSubject>
                </WeekandItem>
                <WeekandItem
                    onPress={() => handleClick(4)}
                    isClicked={selectedItemIndex === 4}>
                        <StyledDay isClicked={selectedItemIndex === 4}>
                            목
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 4}>
                            영어
                        </StyledSubject>
                </WeekandItem>
                <WeekandItem
                    onPress={() => handleClick(5)}
                    isClicked={selectedItemIndex === 5}>
                        <StyledDay isClicked={selectedItemIndex === 5}>
                            금
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 5}>
                            영어
                        </StyledSubject>
                </WeekandItem>
                <WeekandItemEnd 
                    onPress={() => handleClick(6)}
                    isClicked={selectedItemIndex === 6}>
                        <StyledDay isClicked={selectedItemIndex === 6}>
                            토
                        </StyledDay>
                        <StyledSubject isClicked={selectedItemIndex === 6}>
                            영어
                        </StyledSubject>
                </WeekandItemEnd>
            </Weekand>
        </SafeAreaView>
    )
}

const Maintext = styled.Text`
  marginStart: 20px;
  marginTop: 22px;
  marginBottom: 22px;
  font-weight: 600;
  font-size: 24px;
`

const Weekand = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    gap: 1px;  
`

const WeekandItemStart = styled.TouchableOpacity `
    background-color: ${props => props.isClicked ? "#00E35A" : "white"};
    height: 60px;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0px 0px 8px;
    gap: 4px;
`

const WeekandItem = styled.TouchableOpacity `
    background-color: ${props => props.isClicked ? "#00E35A" : "white"};
    height: 60px;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

const WeekandItemEnd = styled.TouchableOpacity `
    background-color: ${props => props.isClicked ? "#00E35A" : "white"};
    height: 60px;
    flex: 1;
    align-items: center;
    border-radius: 0px 8px 8px 0px;
    justify-content: center;
    gap: 4px;
`

const StyledDay = styled.Text`
    color: ${props => props.isClicked ? "white" : "black"};
    font-size: 16px;
    font-weight: 600;
`

const StyledSubject = styled.Text`
    color: ${props => props.isClicked ? "white" : "#6F6F6F"};
    font-size: 12px;
    font-weight: 500;
`

const DayWrapper = styled.View`
    align-items: center;
    gap: 4px;
`;
