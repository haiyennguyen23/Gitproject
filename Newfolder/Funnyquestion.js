class Question {
    constructor(content, answer, correctAnswer) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }


    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }


}




let question1 = new Question("Câu 1:Cái gì nặng bằng con voi nhưng chẳng nặng gam nào? ", ["A.Cái cân", "B.Cái bóng của con voi", "C.Cái cân ", "D.Cái bút"], "B.Cái bóng của con voi");
let question2 = new Question("Câu 2:Việt Nam có chung biên giới với quốc gia nào dưới đây?", ["A.Thái lan", "B.Myanmar", "C.Trung Quốc", "D.Bruney"], "C.Trung Quốc");
let question3 = new Question("Câu 3:Đâu là tên một ngôi chùa nổi tiếng ở Hà Nam?", ["A.Bái Đính", "B.Trấn Quốc", "C.Bồ Đà", "D.Tam Chúc"], "D.Tam Chúc");
let question4 = new Question("Câu 4:Sóng biển thường được tạo ra do cái gì?", ["A.Nắng", "B.Gió", "C.Mưa", "D.Sương Mù"], "B.Gió");
let question5 = new Question("Câu 5:Âm thanh có tần số lớn hơn 20KHz gọi là gì?", ["A.Siêu âm", "B.Hạ âm", "C.Cận âm", "D.Quá âm"], "A.Siêu âm");
let question6 = new Question("Câu 6:Tác phẩm nào được coi là tác phẩm nổi tiếng nhất của Hector Malot?", ["A.Không gia đình", "B.Đồi gió hú", "C.Giã từ vũ khí", "D.Miếng da lừa"], "A.Không gia đình");
let question7 = new Question("Câu 7:Đâu là một hợp kim của Nhôm?", ["A.Ferit", "B.Đuyra", "C.Alkanoid", "D.Alumin"], "B.Đuyra");
let question8 = new Question("Câu 8:Thiên tài Albert Einstein đã từng được mời làm tổng thống của đất nước nào?", ["A.Latvia", "B.Bungary", "C.Israel", "D.Jordan"], "C.Israel");
let question9 = new Question("Câu 9:Bức tượng cao nhất Trung Quốc?", ["A.Trung Nguyên Đại Phật", "B.Linh Sơn Đại Phật", "C.Tích Thủy Quan Âm", "D.Lạc Sơn Đại Phật"], "A.Trung Nguyên Đại Phật");
let question10 = new Question("Câu 10:Pôn Pốt mở đầu xâm lược biên giới tây nam nước ta vào ngày tháng năm nào?", ["A.20/12/1978", "B.21/12/1979", "C.21/12/1978", "D.24/12/1978"], "C.21/12/1978");
let question11 = new Question("Câu 11:Đạo diễn của vở nhạc kịch Kim Vân Kiều là ai??", ["A.Nguyễn Đăng Bình", "B.Johahn Bern", "C.Alisa Karnet", "D.Christophe Thiry"], "D.Christophe Thiry");
let question12 = new Question("Câu 12:Vật liệu nào được dùng để rèn những cây kiếm Katana huyền thoại của Nhật Bản?", ["A.Takashi", "B.Tamahagane", "C.Orihaco", "D.Katanashi"], "B.Tamahagane");
let question13 = new Question("Câu 13:'Thính' được làm từ gì", ["A.Gạo", "B.Mía", "C.Thịt", "D.Củ cải"], "A.Gạo");
let question14 = new Question("Câu 14:Động vật nào hoạt động về đêm", ["A.Ma", "B.Kẻ trộm", "C.Chim cú", "D.Dân đổ phế liệu"], "C.Chim cú");
let question15 = new Question("Câu 15:Vườn quốc gia nào hiện không nằm trong danh sách Vườn di sản ASEAN?", ["A.Vườn Quốc Gia Kon Ka Kinh", "B.Vườn Quốc Gia Tam Đảo", "C.Vườn Quốc Gia Chư Mom Ray", "D.Vườn Quốc Gia Bái Tử Long"], "B.Vườn Quốc Gia Tam Đảo");
let funnyquestion = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,question11,question12,question13,question14,question15];
let getQuestion = document.getElementById('question');
showQuestion(question1);


function next(index) {
    index++;
    showQuestion(funnyquestion[index]);
}


function showQuestion(question_1) {
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", funnyquestion.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];


    }
}




showQuestion(question1);
let index = 0;


function checkAnswer(id) {
    let answer = document.getElementById(id).innerHTML;
    let getQuestionId = document.getElementById('question');
    if (!confirm("Bạn có chắc chắn với câu trả lời này?")) {
        return true;
    }
    if (funnyquestion[index].checkAnswer(answer)){
        alert('câu trả lời đúng ');
        if (index === 14) {
            alert("Chúc mừng bạn đã thắng !");

        }
        next(index);
        index++;
        console.log(index);
    } else {
        alert('Câu trả lời sai vui lòng thử lại');
        reload();
    }
}


function reload() {
    location.replace("Dovui.html");
}




