function func_escala() {
    document.getElementById('scale_button_on').style.display = 'none'
    document.getElementById('scale_button_off').style.display = 'block'
    document.getElementById('scale_ball').style.marginLeft = '6.25vmin'

    document.getElementById('mercurio').style.animationPlayState = 'paused'
    document.getElementById('venus').style.animationPlayState = 'paused'
    document.getElementById('terra').style.animationPlayState = 'paused'
    document.getElementById('marte').style.animationPlayState = 'paused'
    document.getElementById('jupiter').style.animationPlayState = 'paused'
    document.getElementById('saturno').style.animationPlayState = 'paused'
    document.getElementById('urano').style.animationPlayState = 'paused'
    document.getElementById('netuno').style.animationPlayState = 'paused'
    document.getElementById('lua').style.animationPlayState = 'paused'
    document.getElementById('blua').style.animationPlayState = 'paused'
}

function func_escala_back() {
    document.getElementById('scale_button_on').style.display = 'block'
    document.getElementById('scale_button_off').style.display = 'none'
    document.getElementById('scale_ball').style.marginLeft = '0.25vmin'

    document.getElementById('mercurio').style.animationPlayState = 'running'
    document.getElementById('venus').style.animationPlayState = 'running'
    document.getElementById('terra').style.animationPlayState = 'running'
    document.getElementById('marte').style.animationPlayState = 'running'
    document.getElementById('jupiter').style.animationPlayState = 'running'
    document.getElementById('saturno').style.animationPlayState = 'running'
    document.getElementById('urano').style.animationPlayState = 'running'
    document.getElementById('netuno').style.animationPlayState = 'running'
    document.getElementById('lua').style.animationPlayState = 'running'
    document.getElementById('blua').style.animationPlayState = 'running'
}