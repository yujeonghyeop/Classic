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
    headerText : "white",
    client: '#FF9D9D'
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
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
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
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:330,
        margin:15,
        width:350,
        marginBottom:10
    },
    styledMyType : {
        margin:5,
        color :'#0B1D5F',
        fontSize : 16,
        fontFamily : 'IBMPlexSansKR-Regular'
    },
    styledExplain : {
        width:330,
        alignItems:"center",
        borderWidth:1,
        borderColor: '#6767A6',
        borderRadius: 12,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 20,
        marginBottom: 30
    },
    styledRecommend : {
        flex:1,
        alignItems:"center",
        borderWidth:1,
        borderColor: '#6767A6',
        borderRadius: 12,
        margin:5,
        paddingTop:35
    },
    styledRecommendText1:{
        color :'#0B1D5F',
        fontSize : 20,
        fontFamily : 'IBMPlexSansKR-Bold'
    },
    styledRecommendText2:{
        color :'#0B1D5F',
        fontSize : 18,
        fontFamily : 'IBMPlexSansKR-Regular'
    },
    styledQ :{
        fontSize : 60,
        color:'#6667ab',
        marginBottom:10,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    styledQ1:{
        fontSize : 60,
        color:'#FF9D9D',
        marginBottom:10,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    styledFont:{
        fontSize : 22,
        color:'black',
        justifyContent : 'center',
        fontFamily: 'IBMPlexSansKR-SemiBold'
    },
    buttonTitle:{
        fontSize : 18,
        color:'white',
        justifyContent : 'center',
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    styledBox : {
        width : 350,
        height : 150,
        backgroundColor : '#dedef5',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        padding:10
    },
    logo:{
        width: 250,
        height: 42,
        alignSelf: 'center',
        margin: 10,
        marginTop: 40,
    },
    text1: {
        color:'#0B1D5F',
        fontSize:20,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    text2:{
        color:'#0B1D5F',
        fontSize:40,
        fontFamily: 'IBMPlexSansKR-Bold'
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


export const myAccountstyle ={
    container:{
        flex:1, 
        alignItems:'space-between', 
        justifyContent:'center', 
        flexDirection: 'column'
    },
    styledBox:{
        flex:3,
        borderColor:'#FF9D9D',
        borderWidth: 1.5,
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'stretch',
        padding:20,
        width: '95%',
        height: '20%',
    }, 
    styledPicture:{
        padding:10,
        width: 100,
        height: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    styledButton:{
        backgroundColor:'#E8E8F2',
        width: 180,
        borderRadius: 10,
        marginTop:5,
    },
    styledList:{
        flex:8,
        backgroundColor: '#E8E8F2', 
    },
    ListButton:{
        width:'50%', 
        alignItems:'center', 
        padding:5
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
        backgroundColor : '#E8E8F2',
        height:50,
        alignItems:'center',
        justifyContent:'center'
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
        padding:10,
        width: 100,
        height: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    styledBox: {  //box style
    //box
        flex:3,
        borderColor:'#FF9D9D',
        borderWidth: 2,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding:20,
        margin:10,
        width: '95%',
        height: '10%',
    },
    styledButton:{  //상세보기 버튼 디자인
        backgroundColor: '#FFFFFF',
        opacity:0.3,
        borderRadius: 10,
        width:180
    },
    slide: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB',
        backgroundColor:'white',
        flexDirection:'row'
    },
    slideText: {
        width: "50%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0B1D5F',
        fontSize: 20,
        fontFamily: 'IBMPlexSansKR-Bold'
    }
}

export const setting ={
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    AccountView:{
        borderColor:'#FF9D9D',
        borderWidth:2,
        borderRadius:10,
        marginTop:30,
        padding:30
    },
    AccountButton:{
        width:200,
        height:60,
        margin:10,
        backgroundColor:'#6767A6',
    }
}

export const ViewAllStyle ={
    startText : {
        marginTop:18,
        color:'#0B1D5F',
        fontSize:25,
        fontFamily: 'IBMPlexSansKR-Bold'
    },
    contentName : {
        color:'#0B1D5F',
        fontSize:20,
        fontFamily: 'IBMPlexSansKR-Bold'
    },
    contentIntroduce : {
        color:'#0B1D5F',
        fontSize:17,
        fontFamily: 'IBMPlexSansKR-Regular'
    },
    scrap:{
        backgroundColor:'#E8E8F2',
        margin:5, 
        width:100,
        height:50,
        justifyContent:'center', 
        alignItems:'center',
        borderColor: '#FF9D9D',
        borderWidth:0
    }
}

export const inquiryStyle = {
    buttonStyle : {
        width: 320,
        height: 60,
        margin: 20,
        backgroundColor: '#6767A6',
    },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleView : {
        width: 320,
        borderColor: '#6767A6',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        padding: 15
    },
    contentView: {
        width: 320,
        height: 200,
        borderColor: '#6767A6',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 25,
        padding: 15
    },
    InquiryResultcontainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    InquiryResultTextView : {
        height: 300,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    InquiryResultFont : {
        color: '#0B1D5F',
        fontSize: 25,
        fontFamily: 'IBMPlexSansKR-Bold'
    }
}

export const detailStyle={
    styledBox:{
        borderColor:'#FF9D9D',
        borderWidth: 1.5,
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        padding:20,
        width: '95%',
        height: '80%',

    }

}