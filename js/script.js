function update(event){
    console.log("Update function called by:", event.type);

    document.querySelectorAll('.touch-dot')
        .forEach(dot => dot.remove());
    
    let clientX, clientY;

    if(event.touches && event.touches.length > 0){
        console.log("  - Handling Touch Event");

        for(let i=0; i < event.touches.length; i++){
            clientX = event.touches[i].pageX;
            clientY = event.touches[i].pageY;

            let dot = document.createElement('div');

            dot.classList.add('touch-dot');
            dot.style.left = (clientX - 50) + "px";
            dot.style.top = (clientY - 50) + "px";
            document.body.appendChild(dot);

            console.log(`  - Touch dot created at: ${clientX}, ${clientY}`);
        }
    }else if(event.type.startsWith('mouse')){
            console.log("  - Handling Mouse Event");
            if(event.buttons === 1){
                clientX = event.pageX;
                clientY = event.pageY;

                let dot = document.createElement('div');

                dot.classList.add('touch-dot');
                dot.style.left = (clientX - 50) + "px";
                dot.style.top = (clientY - 50) + "px";
                document.body.appendChild(dot);

                console.log(`  - Mouse dot created at: ${clientX}, ${clientY}`);
            }else {
                console.log("  - Mouse event, but button not pressed or it's mouseup.");
            }
    }
}

window.addEventListener('touchstart', update);
window.addEventListener('touchmove', update);
window.addEventListener('touchend', update);
window.addEventListener('touchcancel', update);

window.addEventListener('mousedown', update);
window.addEventListener('mousemove', update);
window.addEventListener('mouseup', update);
