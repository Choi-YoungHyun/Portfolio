function sendit(){
    // alert('회원가입 버튼 클릭')
    const userid = document.getElementById('userid');
    const userpw = document.getElementById('userpw');
    const username = document.getElementById('username');
    const userpw_re = document.getElementById('userpw_re');
    const hp = document.getElementById('hp');
    const email = document.getElementById('email');
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');


    // 정규 표현식
    const expIdText = /^[0-9a-zA-Z]{4,20}$/;
    const expPwText = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const expName = /^[가-힣]{2,6}/
    const expHp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4}$)/
    const expEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9\-\.]{3,6}/
    
    const expSsn1 = /^[0-9]{6}/
    const expSsn2 = /^[0-9]{7}/


    if(!expIdText.test(userid.value)){
        alert('아이디는 4~20자리 영문자로 입력')
        userid.focus(); // 커서를 그쪽으로 가게 해주는 것
        return false
    }
    if(!expPwText.test(userpw.value)){
        alert('비밀번호는 최소 8자리,영어,숫자,특수문자 1개 이상 기입')
        userpw.focus(); // 커서를 그쪽으로 가게 해주는 것
        return false
    }
    if(!expName.test(username.value)){
        alert('이름은 2~6자리')
        username.focus(); // 커서를 그쪽으로 가게 해주는 것
        return false
    }
    if(!expHp.test(hp.value)){
        alert('올바른 전화번호가 아닙니다.')
        hp.focus(); // 커서를 그쪽으로 가게 해주는 것
        
        return false
    }
    if(!expEmail.test(email.value)){
        alert('올바른 이메일이 아닙니다.')
        email.focus(); // 커서를 그쪽으로 가게 해주는 것
        return false
    }
    if(!expSsn1.test(ssn1.value) || expSsn2.test(ssn2.value)){
        alert('올바른 주민번호 아닙니다.')
        ssn1.focus(); // 커서를 그쪽으로 가게 해주는 것
        return false
    }



}

function checkpw(){
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpw_re');

    if(userpw.value != userpw_re.value){
        alert('비밀번호가 서로 일치 하지 않습니다.')
        userpw.focus()
    }else{
    alert('비밀번호 일치!')
    }


}