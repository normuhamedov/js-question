let questions = [
    { question: '1. Element nima?', fullAnswer: 'HTML ning ichidagi barcha kodlar elementlar deyiladi. Teglar ikki hil bo`ladi: toq va juft.' },
    { question: '2. Headings nima?', fullAnswer: 'Headings bu - sarlavhalar. h1….h6.' },
    { question: '3. Attribute nima?', fullAnswer: 'Tegga qo`shimcha yordam beradigan kodlar atributlar deyiladi. Atributlar ochiluvchi tegning yonidan joy tashlab yoziladi. Masalan: <a href="https://www.w3schools.com">Visit W3Schools</a> yoki <img src="" alt=""></img>' },
    { question: '4. Class va ID nima?', fullAnswer: '`class` - bu bizning tegimizga beriladigan nom hisoblanib, u bilan biz css va javascriptda murojaat qilishimiz mumkin. `css` da biz unga class nomi oldiga .(nuqta) qo`yish orqali chaqiramiz. `id` esa ham xuddi class kabi murojaat vazifasini bajaradi, lekin `id` saytda bir nom bilan faqat bir marta ishlatiladi.' },
    { question: '5. CSS nima?', fullAnswer: 'CSS (Cascading Style Sheets) - bu HTML ga yozgan kodimizga bezak, rang, uslub berish uchun yaratilgan.' },
    { question: '6. CSS z-index nima?', fullAnswer: 'HTML dagi elementlarimiz ustma ust joylashib qolganida ularning birini ustunlik qilishiga yordam beradigan teg. Misol uchun: z-index: 2;' },
    { question: '7. CSS z-index qachon ishlaydi?', fullAnswer: 'position xususiyati berilganda.' },
    { question: '8. CSS overflow nima?', fullAnswer: 'CSS overflow - malum o`lchamga ega elementni ichiga o`zidan katta elementni joylashtirsak, tashqariga chiqib ketadi. overflow chiqib ketgan elementni tartiblaydi: visible - default holatda; hidden - ko`rinmaydi; scroll - scroll tarzida yurgizish imkoniyati; auto - scrollga o`xshaydi.' },
    { question: '9. CSS opacity nima?', fullAnswer: 'CSS opacity - HTML elementimizni shaffofligini ko`rsatadi.' },
    { question: '10. CSS Box-sizing nima?', fullAnswer: 'CSS Box-sizing - elementga berilgan CSS property larini faqat elementning ichidan olishni taminlaydi.' },
    { question: '11. JavaScript nima?', fullAnswer: 'JavaScript - web uchun mahsus yuqori darajadagi (high-level) dasturlash tili bo`lib, HTML va CSS ni dinamik tarzda o`zgartirish imkonini beradi.' },
    { question: '12. Object nima?', fullAnswer: 'JavaScript Object - bu bir nechta ma\'lumotlar to\'plamini saqlashga imkon beruvchi ma\'lumot turi.' },
    { question: '13. CSS position nima?', fullAnswer: 'position - bu elementlarning joylashuvini belgilash.' },
    { question: '14. CSS position turlari', fullAnswer: '- static; - relative (iz qoldiradi); - fixed (joyda qotiradi); - absolute (iz qoldirmaydi, joylashuvni ekrandan oladi); - sticky.' },
    { question: '15. CSS margin va paddinglari nima?', fullAnswer: 'margin elementning tashqi tarafidan joy ochib beradi, padding esa ichki qismida joy ochib beradi.' },
];

function displayAnswers(answers) {
    let container = document.getElementById("answersContainer");

    answers.forEach((answer, index) => {
        let answerElement = document.createElement('div');
        answerElement.style.marginBottom = "50px";

        let questionElement = document.createElement('p');
        questionElement.innerHTML = `<strong>Savol:</strong> ${answer.question}`;

        let userAnswerElement = document.createElement('p');
        userAnswerElement.innerHTML = `<strong>Javob:</strong> ${answer.userAnswer}`;

        let fullAnswerElement = document.createElement('p');
        fullAnswerElement.innerHTML = `<strong>To'liq Javob:</strong> ${answer.fullAnswer}`;

        answerElement.appendChild(questionElement);
        answerElement.appendChild(userAnswerElement);
        answerElement.appendChild(fullAnswerElement);
        container.appendChild(answerElement);
    });
}

let answers = questions.map((item, index) => {
    alert(`${index + 1} - savol`);
    let userAnswer = prompt(item.question);
    confirm(`${index + 2} - savolga tayyormisiz?`);
    return { ...item, userAnswer };
});

displayAnswers(answers);