export const colors = {
    buttons : '#6667ab',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    CardComment : '#86939e',
    cardbackground : "white", 
    statusbar : "#ff8c52",
    headerText : "white"
}

export const parameters = {
    headerHeight : 40,
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:"100%"
    },
    buttonTitle:{   //button 안에 있는 Text 스타일 지정 
        color:"white",
        fontSize:20,
        fontFamily: 'IBMPlexSansKR-Regular',
        alignItems:"center",
        justifyContent:"center",
        marginTop:3,
       
    }
}
export const testpageStyle = { //testpage에 들어가는 친구들 집합 Result page도 여기
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:350,
        margin:15
    },
    styledQ :{
        fontSize : 60,
        color:'#6667ab',
        marginBottom:10,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    styledFont:{
        fontSize : 25,
        color:'black',
        justifyContent : 'center',
        fontFamily: 'IBMPlexSansKR-SemiBold'
    },
    styledBox : {
        width : 350,
        height : 150,
        backgroundColor : '#dedef5',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
    },
    logo:{
        width: 250,
        height: 42,
        alignSelf: 'center',
        margin: 10,
        marginTop: 40,
        marginBottom :50
      },
    text1: {
        color:'#6667ab',
        fontSize:20,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    text2:{
        color:'#6667ab',
        fontSize:40,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
}
export const logo = {
    width: 250,
    height: 42,
    alignSelf: 'center',
    margin: 10,
    marginTop: 40
  }
export const title = {
    color:"#ff8C52",
    fontSize:20,
    fontFamily: 'IBMPlexSansKR-Regular'
}


export const myPageStyle ={
    styledBox:{
        flex:3,
        backgroundColor: '#E8E8F2',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'stretch',
        padding:20,
        height: 150,
        margin:10
    },
    styledButton:{
        flex:1,
        backgroundColor: '#E8E8F2',
    }, 
    styledButton1:{
        backgroundColor:'#FFFFFF',
        opacity:0.3,
        alignItems: 'stretch',
        width: 180,
        borderRadius: 10,
        marginTop:10,
    },
    styledList:{
        flex:8,
        backgroundColor: '#E8E8F2', 
        paddingHorizontal: 250,     
    },
    styledPicture:{ 
        backgroundColor:'#6767A6',
        borderRadius: 75,
        width: 100,
        height: 100,
    }
}

export const mainPageStyle = {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#FFFFFF',
      alignContent: 'center',
      justifyContent: 'center',
      },
      nicknamebutton : {
        backgroundColor : '#E8E8F2'
      },
      styledButton1: { //검사하러가기 버튼 스타일
        //button 스타일 지정 
        backgroundColor: '#6667ab',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#6667ab',
        height: 50,
        width: 200,
      },
      viewStyle: { //Swipe 스타일
        backgroundColor : "#6667ab",
        flex: 1,
        width : 200,
        height : 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginLeft:10
      },
      styledPicture:{ 
        //사진 넣는 곳
        backgroundColor:'#6767A6',
        borderRadius: 75,
        width: 100,
        height: 100,
    },
    styledBox: {  //box style
    //box
      flex:3,
      backgroundColor: '#E8E8F2',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      alignItems: 'stretch',
      padding:20,
      margin:10
    },
    styledButton:{  //상세보기 버튼 디자인
        backgroundColor: '#FFFFFF',
        opacity:0.3,
        borderRadius: 10,
        width:180
    },
}