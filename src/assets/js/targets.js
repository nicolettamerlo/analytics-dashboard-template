import { pinkTr, blueTr, yellowTr, greenTr, purpleTr, redTr } from './colors';
import { isHomePage } from './base';

if(isHomePage){
    const trgNodes = document.querySelectorAll('.target');

    const tgsData = [
        {color:pinkTr, value:'48%', current: '$1.152.000', goal: '$2.400.000'},
        {color:blueTr, value:'82%',current: '#147.600', goal: '#180.000'},
        {color:yellowTr, value:'61%', current: '$176.900', goal: 'below $290.000'},
        {color:greenTr, value:'73%', current: '#1.379.700', goal: '#1.890.000'},
        {color:purpleTr, value:'75%', current: '$1.582.500', goal: '$2.110.000'},
        {color:redTr, value:'45%', current: '$85.500', goal: 'below $190.000'},
    ]

    for (let i = 0; i < trgNodes.length; i++) {
        let trg = tgsData[i];
        let trgNode = trgNodes[i];
        let percentage = trgNode.querySelector('.target__percentage');
        let bar = trgNode.querySelector('.target__wrap__bar');
        let barInside = trgNode.querySelector('.target__wrap__bar__inside');
        let current = trgNode.querySelector('.target__footer__current__value');   
        let goal = trgNode.querySelector('.target__footer__goal__value');  
        // set colors
        trgNode.style.borderColor = trg.color;
        percentage.style.borderColor = trg.color;
        bar.style.backgroundColor = trg.color;
        bar.style.borderColor = trg.color;
        barInside.style.backgroundColor = trg.color;
        // set values
        barInside.style.width = trg.value;
        percentage.innerHTML = trg.value;
        barInside.innerHTML = trg.value;
        current.innerHTML = trg.current;
        goal.innerHTML = trg.goal;
    }    
}


