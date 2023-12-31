// Context
import { UserContext } from "../../contexts/UserContext";
import { CatContext } from "../../contexts/CatContext";
// FC Type
import type { FC } from "react";
// Hook
import { useState, useContext, useEffect, useCallback } from "react";
// Custom Hook
import useLoading from "../../hooks/useLoading";
// Platform, Dimensions, StyleSheet, Component
import { Platform, Dimensions, StyleSheet } from "react-native";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
// Custom Component
import TopBar from "../../components/TopBar";
import CatProfileList from "../../components/CatProfileList";
import {
  WeekCalendar,
  MonthCalendar,
  YearCalendar,
} from "../../components/calendar";
import HydrationGraph from "../../components/graph/HydrationGraph";
// API
import {
  getCatWeekStatistics,
  getCatMonthStatistics,
  getCatYearStatistics,
} from "../../api/hydrationStatistics/getCatStatistics";
// utils
import { changeDateToString } from "../../utils/changeDateToString";
// Icon
import ETIcon from "react-native-vector-icons/Entypo";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
// styles
import mainViewStyles from "../../styles/mainViewStyles";

const { width, height } = Dimensions.get("window");

type HydrationStatisticsProps = {
  route: any;
};

const HydrationStatistics: FC<HydrationStatisticsProps> = ({ route }) => {
  // 1) state, context, 변수 관련 ----------------------------------------------------------
  // 1. currentSelectedCatId state
  // params로 전달된 catId를 초깃값으로 설정
  const { catId } = route.params;
  const [currentSelectedCatId, setCurrentSelectedCatId] =
    useState<string>(catId);

  // 2. API 호출에 사용할 managementSpaceId 전역 변수,
  // CatProfileList에 props로 전달할 전역 변수 불러오기
  const { managementSpaceIdGV } = useContext(UserContext);
  const { catIdArrGV, catProfilePhotoUrlArrGV } = useContext(CatContext);

  // 3. 캘린더 관련 state
  const [onCalendar, setOnCalendar] = useState<boolean>(false);
  const [canPressCheck, setCanPressCheck] = useState<boolean>(false);

  // 4. 통계 기간 관련 state, 변수
  // 통계 기간 단위 state : '주', '달', '년'
  const [range, setRange] = useState<string>("주");

  // 4-1. "주"일 때 범위 state
  // 초깃값 : 이번 주 월요일 날짜 string ~ 오늘 날짜 string 배열
  let thisWeekDateString: string[] = [];
  // 오늘 날짜
  const todayDate = new Date();
  // 0(일) ~ 6(토)
  const dayOfWeek = todayDate.getDay();
  // 월요일(1)까지 거리, 일요일의 경우 음수가 되기 때문에 6으로 처리
  const distanceFromMon = dayOfWeek !== 0 ? dayOfWeek - 1 : 6;

  for (let i = distanceFromMon; i >= 0; i--) {
    // 월요일부터 오늘 날짜까지 저장됨
    const date = new Date(todayDate.getTime() - i * 24 * 60 * 60 * 1000);

    thisWeekDateString.push(changeDateToString(date, "주"));
  }

  // weekRange state 생성, 초깃값 대입
  const [weekRange, setWeekRange] = useState<string[]>(thisWeekDateString);

  // 4-2. "달"일 때 범위 state
  // 초깃값 : 이번 달 string
  const thisMonthString = changeDateToString(todayDate, "달");
  // monthRange state 생성, 초깃값 대입
  const [monthRange, setMonthRange] = useState<string>(thisMonthString);

  // 4-3. "년"일 때 범위 state
  // 초깃값 : 이번 년도 string
  const thisYearString = changeDateToString(todayDate, "년");
  // yearRange state 생성, 초깃값 대입
  const [yearRange, setYearRange] = useState<string>(thisYearString);

  // 5. 통계 데이터 state
  // 통계 보여주기 state
  const [onStatistics, setOnStatistics] = useState<boolean>(false);
  // 캘린더 '체크' 눌렀을 때만 반영되어 출력될 통계 기간 state
  const [statisticsRangeText, setStatisticsRangeText] = useState<
    string[] | string
  >([thisWeekDateString[0], thisWeekDateString[thisWeekDateString.length - 1]]);
  // 통계 그래프 데이터 state
  const [hydrationGuageArr, setHydrationGuageArr] = useState<any[]>([]);

  // 6. 로딩 state
  const { isLoading, handleLoading } = useLoading();

  // 2) 통계 보여주기 함수 관련 ---------------------------------------------------------------------
  // 1. "주" 통계 보여주는 함수
  const showWeekStatistics = useCallback(async () => {
    try {
      handleLoading(true);

      const weekHydrationGuageArr = await getCatWeekStatistics(
        managementSpaceIdGV,
        currentSelectedCatId,
        "week",
        weekRange[0],
        weekRange[weekRange.length - 1]
      );
      setHydrationGuageArr(weekHydrationGuageArr);

      handleLoading(false);
    } catch (error: any) {
      console.log(
        "HydrationStatistics 화면 getCatWeekStatistics 호출에서 error 발생 :",
        error.message
      );
      throw error;
    }
  }, [currentSelectedCatId, weekRange]);

  // 2. "달" 통계 보여주는 함수
  const showMonthStatistics = useCallback(async () => {
    try {
      handleLoading(true);

      const monthHydrationGuageArr = await getCatMonthStatistics(
        managementSpaceIdGV,
        currentSelectedCatId,
        "month",
        monthRange
      );
      setHydrationGuageArr(monthHydrationGuageArr);

      handleLoading(false);
    } catch (error: any) {
      console.log(
        "HydrationStatistics 화면 getCatMonthStatistics 호출에서 error 발생 :",
        error.message
      );
      throw error;
    }
  }, [currentSelectedCatId, monthRange]);

  // 3. "년" 통계 보여주는 함수
  const showYearStatistics = useCallback(async () => {
    try {
      handleLoading(true);

      const yearHydrationGuageArr = await getCatYearStatistics(
        managementSpaceIdGV,
        currentSelectedCatId,
        "year",
        yearRange
      );
      setHydrationGuageArr(yearHydrationGuageArr);

      handleLoading(false);
    } catch (error: any) {
      console.log(
        "HydrationStatistics 화면 getCatYearStatistics 호출에서 error 발생 :",
        error.message
      );
      throw error;
    }
  }, [currentSelectedCatId, yearRange]);

  // 4. 기간 단위에 따른 통계 보여주는 함수
  const showStatistics = useCallback(() => {
    // range 값이 "" 빈 값인 경우 return
    // 이는 아래 3)-3에 해당되는 경우
    if (range === "") return;

    if (range === "주") {
      setStatisticsRangeText([weekRange[0], weekRange[weekRange.length - 1]]);
      showWeekStatistics();
    } else if (range === "달") {
      setStatisticsRangeText(monthRange);
      showMonthStatistics();
    } else if (range === "년") {
      setStatisticsRangeText(yearRange);
      showYearStatistics();
    }
    setOnStatistics(true);
  }, [currentSelectedCatId, range, weekRange, monthRange, yearRange]);

  // 3) useEffect 관련 ---------------------------------------------------------------------------
  // 마운트될 때 showStatistics 함수를 호출할 필요 없음
  // 처음에 range, currentSelectedCatId state의 초깃값이 설정된 것도 변화로 인식되기 때문에
  // 1, 2번 useEffect가 자동으로 실행되며 showStatistics 함수를 호출하게 됨

  // 1. range 바뀔 때 실행될 함수 : 현재 고양이 이번 주/이번 달/이번 년도 통계 불러오기
  useEffect(() => {
    // range를 의존성 배열에 넣음으로써 range가 바뀔 때마다 이 콜백 함수가 실행되고,
    // showStatistics 함수 또한 의존성 배열에 range가 있기 때문에,
    // 최신 range 값을 사용하여 적절한 통계 함수를 호출함

    // showStatistics로 hydrationGuageArr가 새로 저장되었을 때 onStatistics를 true로 바꿈
    setOnStatistics(false);
    showStatistics();
  }, [range]);

  // 2. currentSelectedCatId 바뀔 때 실행될 함수 : 바뀐 고양이 이번 주 통계 불러오기
  useEffect(() => {
    // 다른 고양이 프로필을 누르면, 이전 고양이의 범위가 적용되지 않도록
    // weekRange, monthRange, yearRange 값 초기화하고,
    // range를 "주"로 다시 바꿔서, 바뀐 고양이의 이번 주 통계를 불러옴
    setWeekRange(thisWeekDateString);
    setMonthRange(thisMonthString);
    setYearRange(thisYearString);

    // range가 바뀌면 1번 useEffect가 실행되어 자동으로 showStatistics 함수가 호출됨
    // 그런데, 이미 "주" 였을 때는 setRange("주")만 하면 1번 useEffect가 실행되지 않기 때문에,
    // 먼저 ""로 바꾼 뒤 "주"로 바꾸기.
    // 다만, setter 함수는 비동기적으로 처리되기 때문에 range가 2번 바뀐 것을 인지하게 하기 위해 setTimeout을 사용
    setRange("");
    setTimeout(() => setRange("주"), 20);
  }, [currentSelectedCatId]);

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View pointerEvents={onCalendar ? "none" : "auto"}>
        <TopBar title="음수량 통계" />
        <View style={[styles.catProfileListView]}>
          <CatProfileList
            idArr={catIdArrGV}
            photoUrlArr={catProfilePhotoUrlArrGV}
            currentSelectedCatId={currentSelectedCatId}
            setCurrentSelectedCatId={setCurrentSelectedCatId}
          />
        </View>
        <View style={[mainViewStyles.mainView]}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#59a0ff" />
          ) : (
            <>
              <View style={[styles.rangeAndCalendarView]}>
                <View style={[styles.selectRangeView]}>
                  <FlatList
                    horizontal
                    scrollEnabled={false}
                    data={["주", "달", "년"]}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => setRange(item)}
                        style={[
                          styles.range,
                          item === range && styles.selectedRange,
                        ]}>
                        <Text
                          style={[item === range && styles.selectedRangeText]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                  />
                </View>
                <TouchableOpacity onPress={() => setOnCalendar(true)}>
                  <ETIcon name="calendar" size={25} color="#343434" />
                </TouchableOpacity>
              </View>
              <View style={[styles.statisticsRangeTextView]}>
                <Text style={[styles.statisticsRangeText]}>
                  {range === "주"
                    ? `${statisticsRangeText[0].split("-")[1]}월 ${
                        statisticsRangeText[0].split("-")[2]
                      }일 ~ ${statisticsRangeText[1].split("-")[1]}월 ${
                        statisticsRangeText[1].split("-")[2]
                      }일`
                    : range === "달"
                    ? `${String(statisticsRangeText).split("-")[0]}년 ${
                        String(statisticsRangeText).split("-")[1]
                      }월 `
                    : `${statisticsRangeText}년`}
                </Text>
              </View>
              {onStatistics && (
                <>
                  {range === "주" && (
                    <HydrationGraph
                      range="주"
                      weekRange={weekRange}
                      hydrationGuageArr={hydrationGuageArr}
                    />
                  )}
                  {range === "달" && (
                    <HydrationGraph
                      range="달"
                      monthRange={monthRange}
                      hydrationGuageArr={hydrationGuageArr}
                    />
                  )}
                  {range === "년" && (
                    <HydrationGraph
                      range="년"
                      hydrationGuageArr={hydrationGuageArr}
                    />
                  )}
                </>
              )}
            </>
          )}
        </View>
      </View>
      {onCalendar && (
        <View
          style={[
            styles.calendarView,
            Platform.OS === "android" ? styles.shadowAndroid : styles.shadowIOS,
          ]}>
          <View style={[styles.calendar]}>
            {range === "주" ? (
              <WeekCalendar
                setWeekRange={setWeekRange}
                setCanPressCheck={setCanPressCheck}
              />
            ) : range === "달" ? (
              <MonthCalendar
                setMonthRange={setMonthRange}
                setCanPressCheck={setCanPressCheck}
              />
            ) : (
              <YearCalendar
                setYearRange={setYearRange}
                setCanPressCheck={setCanPressCheck}
              />
            )}
          </View>
          <View style={[styles.calendarIconView]}>
            <TouchableOpacity
              disabled={!canPressCheck}
              // 바뀐 currentSelectedId, range, weekRange/monthRange/yearRange가 자동 적용됨
              onPress={() => {
                showStatistics();
                setOnCalendar(false);
              }}
              style={[styles.icon]}>
              <MCIcon
                name="check-circle"
                size={30}
                color={canPressCheck ? "#45539d" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOnCalendar(false);
                setCanPressCheck(false);
              }}
              style={[styles.icon]}>
              <MCIcon name="close-circle" size={30} color="#343434" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HydrationStatistics;

const styles = StyleSheet.create({
  safeAreaView: {
    position: "relative",
    height: height,
  },
  catProfileListView: {
    width: 400,
    padding: 10,
    borderBottomWidth: 1,
  },

  // range & calendar
  rangeAndCalendarView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectRangeView: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#343434",
    marginRight: 15,
  },
  range: {
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 27,
    backgroundColor: "#cecece",
    borderRightWidth: 1,
    borderColor: "#343434",
  },
  selectedRange: {
    backgroundColor: "#343434",
  },
  selectedRangeText: {
    color: "white",
  },
  statisticsRangeTextView: {
    marginTop: 20,
  },
  statisticsRangeText: {
    fontSize: 16,
    lineHeight: 30,
  },

  // 캘린더
  calendarView: {
    position: "absolute",
    width: width,
    height: 465,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  calendar: {
    position: "absolute",
    width: width,
    top: 65,
    zIndex: 1,
  },
  shadowAndroid: {
    elevation: 20,
  },
  shadowIOS: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  calendarIconView: {
    width: 100,
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 15,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
  },
});
