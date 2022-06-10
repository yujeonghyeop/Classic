
import React, { useState,useEffect } from 'react'
import{ View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import { buttonTitleB } from '../../global/fontStyles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import mozart from '../../images/mozart.png';
import bach from '../../images/bach.png';
import beethoven from '../../images/beethoven.png';
import brahms from '../../images/brahms.png';
import chopin from '../../images/chopin.png';
import haydn from '../../images/Haydn.png';
import hendel from '../../images/hendel.png';
import schubert from '../../images/Schubert.png';
export default function Result({navigation}){
    
    const [musician, setMusician] = useState('');
    const [sentence, setSentence] = useState('');
    const [moreSen, setMoreSen] = useState([]);
    const [srate, setsrate] = useState(0);
    const [hrate, sethrate] = useState(0);
    const [drate, setdrate] = useState(0);
    const [cnt, setCnt] = useState(false);
    const [subject, setsubject] = useState();
    const [subjecticon, setsubjecticon] = useState();
    const [space, setspace] = useState();
    const [spaceicon, setspaceicon] = useState();
    const [source,setsource] = useState()
    const user = firebase.auth().currentUser;
    const email = user.email; 
    const [numsubject, setnumsubject] = useState([]);
    
    const resettype = async key =>{
        firestore().collection("회원").doc(email).update({
            result : 0,
            총체 : 0,
            분석 : 0,
            자기지향 : 0,
            사회지향 : 0,
            이성 : 0,
            감성 : 0,
        })   
    }

    const getImage15 = async key =>{
        const inf = firestore().collection("tool").doc("15");
        firestore().collection("회원").doc(email).collection("myspace").doc("15_1").set({
                    'kate' : "cafe",
                    'location' : "경기 수원시 팔달구 중부대로 239번길 35 2층",
                    'name' : "안다미로 스터디카페"
                })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 팔달구 우만동 아주로 47번길 15",
                'name' : "트릴리언"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_3").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로193번길 36",
            'name' : "카페안녕"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_4").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로193번길 72-6 2층",
            'name' : "유메야"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_5").set({
            'kate' : "cafe",
            'location' : "경기 수원시 영통구 도청로 65 상가동132",
            'name' : "커피가게 by 김진욱"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_6").set({
            'kate' : "school",
            'location' : "아주대학교 도서관",
            'name' : "도서관 자료실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_7").set({
            'kate' : "school",
            'location' : "아주대학교 도서관",
            'name' : "도서관 열람실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_8").set({
            'kate' : "school",
            'location' : "개방 강의실(팔달)",
            'name' : "팔달관 강의실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("15_9").set({
            'kate' : "schhol",
            'location' : "개방 강의실(성호)",
            'name' : "성호관 강의실"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("15_1").set({
            'kate' : "문학과 예술",
            'name' : "서양영화사",
            'professor' : "남기웅"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("15_2").set({
            'kate' : "자연과 과학",
            'name' : "생물학이란 무엇인가",
            'professor' : "남석현"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const msen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                setMoreSen(msen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen,
                    'more_exp' : moreSen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(hendel)
        setCnt(true);
    }
    const getImage18 = async key =>{
        const inf = firestore().collection("tool").doc("18");
        firestore().collection("회원").doc(email).collection("myspace").doc("18_1").set({
            'kate' : "cafe",
            'location' : "경기 수원시 팔달구 중부대로 239번길 35 2층",
            'name' : "안다미로 스터디카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 팔달구 우만동 아주로 47번길 15",
                'name' : "트릴리언"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_3").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로193번길 36",
            'name' : "카페안녕"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_4").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로193번길 72-6 2층",
            'name' : "유메야"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_5").set({
            'kate' : "cafe",
            'location' : "경기 수원시 영통구 도청로 65 상가동132",
            'name' : "커피가게 by 김진욱"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_6").set({
            'kate' : "school",
            'location' : "아주대학교 도서관",
            'name' : "도서관 자료실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_7").set({
            'kate' : "school",
            'location' : "아주대학교 도서관",
            'name' : "도서관 열람실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_8").set({
            'kate' : "school",
            'location' : "개방 강의실(팔달)",
            'name' : "팔달관 강의실"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("18_9").set({
            'kate' : "schhol",
            'location' : "개방 강의실(성호)",
            'name' : "성호관 강의실"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_1").set({
            'kate' : "자연과 과학",
            'name' : "자연과학의 이해",
            'professor' : "최재희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_2").set({
            'kate' : "자연과 과학",
            'name' : "에너지와 사회",
            'professor' : "김형택"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_3").set({
            'kate' : "자연과 과학",
            'name' : "수학이란 무엇인가",
            'professor' : "최영우"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_4").set({
            'kate' : "일반교양",
            'name' : "수학기초",
            'professor' : "김장현"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_5").set({
            'kate' : "일반교양",
            'name' : "일본어2",
            'professor' : "이경숙"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_6").set({
            'kate' : "일반교양",
            'name' : "일본어3",
            'professor' : "이경숙"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_7").set({
            'kate' : "일반교양",
            'name' : "중국어1",
            'professor' : "오경희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("18_8").set({
            'kate' : "일반교양",
            'name' : "중국어2",
            'professor' : "오경희"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument =firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(beethoven)
        setCnt(true);
    }
    const getImage20 = async key =>{
        const inf = firestore().collection("tool").doc("20");
        firestore().collection("회원").doc(email).collection("myspace").doc("20_1").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 원천동 월드컵로 199",
            'name' : "투썬플레이스"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("20_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 영통구 원천동 아주로 46",
                'name' : "탐앤탐스"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("20_3").set({
            'kate' : "school",
            'location' : "아주대학교 학생회관",
            'name' : "학생회관 테이블"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("20_4").set({
            'kate' : "school",
            'location' : "아주대학교 율곡관 지하 1층",
            'name' : "율곡관 토론학습실"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("20_1").set({
            'kate' : "역사와 철학",
            'name' : "인류학이란 무엇인가",
            'professor' : "구본규"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("20_2").set({
            'kate' : "자연과 과학",
            'name' : "현대물리의 이해",
            'professor' : "김영태"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("20_3").set({
            'kate' : "자연과 과학",
            'name' : "우주란 무엇인가",
            'professor' : "안성혁"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("20_4").set({
            'kate' : "자연과 과학",
            'name' : "생물다양성과 진화",
            'professor' : "김정규"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("20_5").set({
            'kate' : "일반교양",
            'name' : "살아 있는 박물관",
            'professor' : "오상탁"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const msen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                setMoreSen(msen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen,
                    'more_exp' : moreSen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(brahms)
        setCnt(true);
    }
    const getImage24 = async key =>{
        const inf = firestore().collection("tool").doc("24");
        firestore().collection("회원").doc(email).collection("myspace").doc("24_1").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 원천동 월드컵로 199",
            'name' : "투썬플레이스"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("24_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 영통구 원천동 아주로 46",
                'name' : "탐앤탐스"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("24_3").set({
            'kate' : "school",
            'location' : "아주대학교 학생회관",
            'name' : "학생회관 테이블"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("24_4").set({
            'kate' : "school",
            'location' : "아주대학교 율곡관 지하 1층",
            'name' : "율곡관 토론학습실"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_1").set({
            'kate' : "역사와 철학",
            'name' : "서양철학사",
            'professor' : "신호재"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_2").set({
            'kate' : "자연과 과학",
            'name' : "인간과 두뇌의 신비",
            'professor' : "김희진"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_3").set({
            'kate' : "자연과 과학",
            'name' : "과학과 종교",
            'professor' : "이재신"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_4").set({
            'kate' : "일반교양",
            'name' : "강의페어링3",
            'professor' : "이진희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_5").set({
            'kate' : "일반교양",
            'name' : "데이터입문 수리기초",
            'professor' : "전영목"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_6").set({
            'kate' : "일반교양",
            'name' : "발표와 토의",
            'professor' : "최선호"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_7").set({
            'kate' : "일반교양",
            'name' : "일본어회화",
            'professor' : "이유진"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("24_8").set({
            'kate' : "일반교양",
            'name' : "태권도",
            'professor' : "김은철"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(haydn)
        setCnt(true);
    }
    const getImage30 = async key =>{
        const inf = firestore().collection("tool").doc("30");
        firestore().collection("회원").doc(email).collection("myspace").doc("30_1").set({
            'kate' : "sc",
            'location' : "경기 수원시 영통구 중부대로 259 예스프라자 403호",
            'name' : "토브 스터디카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("30_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 영통구 원천동 79-10",
                'name' : "공차"
            })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_1").set({
            'kate' : "역사와 철학",
            'name' : "현대사회의 윤리",
            'professor' : "신호재"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_2").set({
            'kate' : "역사와 철학",
            'name' : "한국의 사상과 전통",
            'professor' : "홍문기"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_3").set({
            'kate' : "역사와 철학",
            'name' : "포스트 모더니즘",
            'professor' : "남성일"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_4").set({
            'kate' : "역사와 철학",
            'name' : "조선신록과 민간역사",
            'professor' : "홍문기"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_5").set({
            'kate' : "문학과 예술",
            'name' : "서양연극사",
            'professor' : "장영지"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("30_6").set({
            'kate' : "일반교양",
            'name' : "살아있는 미술관",
            'professor' : "이동재"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(schubert)
        setCnt(true);
    }
    const getImage36 = async key =>{
        const inf = firestore().collection("tool").doc("36");
        firestore().collection("회원").doc(email).collection("myspace").doc("36_1").set({
            'kate' : "sc",
            'location' : "경기 수원시 영통구 중부대로 259 예스프라자 403호",
            'name' : "토브 스터디카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("36_2").set({
                'kate' : "cafe",
                'location' : "경기도 수원시 영통구 원천동 79-10",
                'name' : "공차"
            })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_1").set({
            'kate' : "역사와 철학",
            'name' : "철학이란 무엇인가",
            'professor' : "이진희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_2").set({
            'kate' : "역사와 철학",
            'name' : "윤리적 추론",
            'professor' : "이진희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_3").set({
            'kate' : "문학과 예술",
            'name' : "생각의 예술적 표현",
            'professor' : "안지연"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_4").set({
            'kate' : "문학과 예술",
            'name' : "문학예술비평",
            'professor' : "차희정"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_5").set({
            'kate' : "문학과 예술",
            'name' : "문학과 미디어",
            'professor' : "조명숙"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_6").set({
            'kate' : "일반교양",
            'name' : "디지털 사진 실습",
            'professor' : "윤영희"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_7").set({
            'kate' : "일반교양",
            'name' : "발명과 특허",
            'professor' : "최승철"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("36_8").set({
            'kate' : "일반교양",
            'name' : "범죄와 현대사회",
            'professor' : "김현우"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(chopin)
        setCnt(true);
    }
    const getImage40 = async key =>{
        const inf = firestore().collection("tool").doc("40");
        firestore().collection("회원").doc(email).collection("myspace").doc("40_1").set({
            'kate' : "sc",
            'location' : "경기도 수원시 영통구 아주로 46 3층",
            'name' : "플랜트 스터디카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_2").set({
            'kate' : "sc",
            'location' : "경기도 수원시 영통구 아주로 18 2층 ",
            'name' : "랭 스터디카페"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_3").set({
            'kate' : "cafe",
            'location' : "경기 수원시 팔달구 월드컵로 205",
            'name' : "스타벅스"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_4").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 중부대로 260",
            'name' : "메가커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_5").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로 191 1층",
            'name' : "이디야커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_6").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로 47 1층",
            'name' : "굿커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_7").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로39번길 8 3층",
            'name' : "카페 도해"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_8").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로179번길 10 1층카페 쉼",
            'name' : "쉼"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_9").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로47번길 13 2층",
            'name' : "카탈로그"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_10").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 에듀타운로 101",
            'name' : "fifty two hertz"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_11").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 도청로17번길 40",
            'name' : "뜰 11"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_12").set({
            'kate' : "school",
            'location' : "경기도 수원시 팔달구 권광로 386",
            'name' : "카페 몽상"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_13").set({
            'kate' : "school",
            'location' : "아주대학교 도서관 카페",
            'name' : "도서관 카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("40_14").set({
            'kate' : "schhol",
            'location' : "아주대학교 신학생회관 카페",
            'name' : "학식 카페"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("40_1").set({
            'kate' : "역사와 철학",
            'name' : "형식논리학",
            'professor' : "홍성기"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("40_2").set({
            'kate' : "문학과 예술",
            'name' : "서양 고전문학",
            'professor' : "이병훈"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("40_3").set({
            'kate' : "문학과 예술",
            'name' : "동양미술사",
            'professor' : "안미연"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("40_4").set({
            'kate' : "자연과 과학",
            'name' : "기술과 사회",
            'professor' : "박영무"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(mozart)
        setCnt(true);
    }
    const getImage48 = async key =>{
        const inf = firestore().collection("tool").doc("48");
        firestore().collection("회원").doc(email).collection("myspace").doc("48_1").set({
            'kate' : "sc",
            'location' : "경기도 수원시 영통구 아주로 46 3층",
            'name' : "플랜트 스터디카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_2").set({
            'kate' : "sc",
            'location' : "경기도 수원시 영통구 아주로 18 2층 ",
            'name' : "랭 스터디카페"
            })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_3").set({
            'kate' : "cafe",
            'location' : "경기 수원시 팔달구 월드컵로 205",
            'name' : "스타벅스"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_4").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 중부대로 260",
            'name' : "메가커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_5").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로 191 1층",
            'name' : "이디야커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_6").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로 47 1층",
            'name' : "굿커피"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_7").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로39번길 8 3층",
            'name' : "카페 도해"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_8").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 월드컵로179번길 10 1층카페 쉼",
            'name' : "쉼"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_9").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 팔달구 아주로47번길 13 2층",
            'name' : "카탈로그"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_10").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 에듀타운로 101",
            'name' : "fifty two hertz"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_11").set({
            'kate' : "cafe",
            'location' : "경기도 수원시 영통구 도청로17번길 40",
            'name' : "뜰 11"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_12").set({
            'kate' : "school",
            'location' : "경기도 수원시 팔달구 권광로 386",
            'name' : "카페 몽상"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_13").set({
            'kate' : "school",
            'location' : "아주대학교 도서관 카페",
            'name' : "도서관 카페"
        })
        firestore().collection("회원").doc(email).collection("myspace").doc("48_14").set({
            'kate' : "schhol",
            'location' : "아주대학교 신학생회관 카페",
            'name' : "학식 카페"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("48_1").set({
            'kate' : "일반교양",
            'name' : "독일 명작의 이해",
            'professor' : "홍성광"
        })
        firestore().collection("회원").doc(email).collection("mysubject").doc("48_2").set({
            'kate' : "일반교양",
            'name' : "독일어",
            'professor' : "홍성광"
        })
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(bach)
        setCnt(true);
    }
    const [score, setScore] = useState(1);
    const first = firestore().collection("회원").doc(email);
    async function Read(){
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["result"];
                const rate1 = pandi["사고유형비율"]
                const rate2 = pandi["학습성격비율"]
                const rate3 = pandi["행동조절비율"]
                setsrate(rate1)
                sethrate(rate2)
                setdrate(rate3)
                if (plan === 15){
                    setsubject("서양영화사")
                    setsubjecticon("palette")
                    setspace("안다미로 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage15();
                }
                else if(plan === 18){
                    setsubject("자연과학의 이해")
                    setsubjecticon("emoji-nature")
                    setspace("안다미로 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage18();
                }
                else if (plan === 20){
                    setsubject("인류학이란 무엇인가")
                    setsubjecticon("auto-stories")
                    setspace("투썸플레이스")
                    setspaceicon("emoji-food-beverage")
                    setScore(plan);
                    getImage20();
                }
                else if (plan === 24){
                    setsubject("서양철학사")
                    setsubjecticon("auto-stories")
                    setspace("투썸플레이스")
                    setspaceicon("emoji-food-beverage")
                    setScore(plan);
                    getImage24();
                }
                else if (plan === 30){
                    setsubject("현대사회의 윤리")
                    setsubjecticon("auto-stories")
                    setspace("토브 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage30();
                }
                else if (plan === 36){
                    setsubject("철학이란 무엇인가")
                    setsubjecticon("auto-stories")
                    setspace("토브 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage36();
                } 
                else if (plan === 40){
                    setsubject("형식논리학")
                    setsubjecticon("auto-stories")
                    setspace("플랜트 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage40();
                }
                else if (plan === 48){
                    setsubject("독일 명작의 이해")
                    setsubjecticon("self-improvement")
                    setspace("플랜트 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage48();
                }

            }
        })
    }
    useEffect(()=>{
        Read();
    })

    return cnt ? (
        <ScrollView keyboardShouldPersistTaps = "always">
            <View style = {testpageStyle.container}>
                <View style = {{alignItems:"center", marginTop:25}}>
                    <Text style = {testpageStyle.text1}>당신의 유형은</Text>
                    <Text style = {testpageStyle.text2}>{musician}</Text>
                </View>
                <Image 
                    style = {{width:300, height:400}}
                    source = {source} 
                />
                

                <Progress.Bar progress={srate} width={330} color={'#FF9D9D'} height={35} borderRadius={12} marginTop={25}/>
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>계획형</Text>
                    <Text style = {testpageStyle.styledMyType}>즉흥형</Text>
                </View>

                <Progress.Bar progress={hrate} width={330} color={'#FF9D9D'} height={35} borderRadius={12} />
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>개인형</Text>
                    <Text style = {testpageStyle.styledMyType}>사회형</Text>
                </View>

                <Progress.Bar progress={drate} width={330} color={'#FF9D9D'} height={35} borderRadius={12}/>
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>총체형</Text>
                    <Text style = {testpageStyle.styledMyType}>분석형</Text>
                </View>

                <View style = {testpageStyle.styledExplain}>
                    <Text style = {testpageStyle.text1}>{sentence}</Text>
                </View>

                <View style = {{flex:1, flexDirection:'row', width:350, marginBottom:25, position: 'relative'}}>
                    <View style = {{position: 'absolute', left:70, top:-25, height:80, width:40, backgroundColor:'#6767A6', transform: [{rotate: '80deg'}]}}></View>
                    <View style = {testpageStyle.styledRecommend}>
                        <Text style = {testpageStyle.styledRecommendText1}>최고의 공부장소</Text>
                        <View style ={{height:130, width:130, backgroundColor:'#FF9D9D'}}>
                        <Icon name = {spaceicon} type = 'material'size = {120}/>
                        </View>
                        <Text style = {testpageStyle.styledRecommendText2}>{space}</Text>
                    </View>
                    <View style = {{position: 'absolute', right:70, top:-25, height:80, width:40, backgroundColor:'#6767A6', transform: [{rotate: '80deg'}]}}></View>
                    <View style = {testpageStyle.styledRecommend}>
                        <Text style = {testpageStyle.styledRecommendText1}>최고의 교양과목</Text>
                        <View style = {{height:130, width:130, backgroundColor:'#FF9D9D'}}>
                        <Icon name = {subjecticon} type = 'material'size = {120}/>
                        </View>
                        <Text style = {testpageStyle.styledRecommendText2}>{subject}</Text>
                    </View>
                </View>

                <TouchableOpacity style={testpageStyle.styledButton} onPress = {() => {
                        resettype()
                        navigation.navigate("Test1")
                }}>
                    <Text style={buttonTitleB}>검사 다시하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress = {() => {
                        navigation.navigate("HomeScreen")
                    }}
                >
                    <Text style={buttonTitleB}>Main Page로 가기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    ) : null
}