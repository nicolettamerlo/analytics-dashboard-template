import { isHomePage } from './base';
import { greenTr, blueTr, pinkTr} from './colors';

if(isHomePage){ 

    const noteData = [
        {content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue augue, convallis et ullamcorper at, feugiat a leo", color:"#ffc", head:"#FFFFB3"},
        {content: "Ut tempus sodales pretium. Sed blandit nisl sit amet ex placerat, ut faucibus enim pharetra", color:greenTr, head:"#B9D9C6"},
        {content: "Nullam elementum ultrices turpis vel varius. Sed iaculis quam non erat hendrerit maximus", color:blueTr, head:"#B7D2E1"},
        {content: "Nunc mi lorem, vestibulum a hendrerit non, condimentum et lorem. Vestibulum euismod diam velit", color:pinkTr, head:'#EAB4CE'}
    ];
 
    const noteTrg = document.querySelectorAll('.board__content__note');
  
    for (let i = 0; i < noteTrg.length; i++) {
        const note = noteTrg[i];
        const data = noteData[i];

        note.querySelector('.board__content__note__body').innerHTML = data.content;
        note.querySelector('.board__content__note__body').style.backgroundColor = data.color;
        note.querySelector('.board__content__note__header').style.backgroundColor = data.head;
    }
} 