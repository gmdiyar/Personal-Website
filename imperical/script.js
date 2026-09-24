const graphicsButton = document.getElementById('graphics');
const graphicsSubfield = document.getElementById('graphics-sub')
const header = document.getElementById('header');
const bodyFrame = document.getElementById('body-frame');


async function loadGraphicsSubfields() {
    try {

        const response = await fetch('./JSON/subfields/graphics.json');

        if (!response.ok) {
            throw new Error(response.status);
        }

        const subfields = await response.json();
        const buttons = []

        const pages = ['./pages/graphics/opengl.html',
                       './pages/graphics/second.html',
                       './pages/graphics/third.html'
                      ]

        graphicsButton.addEventListener('click', () => {
            if (!graphicsSubfield.hasChildNodes()){
                for (let i = 0; i < subfields.length; i++) {
                    buttons.push(document.createElement('button'))
                    buttons[i].innerHTML = subfields[i]
                    buttons[i].classList.add('index-button');
                    graphicsSubfield.appendChild(buttons[i])

                    buttons[i].addEventListener('click', () => [
                    header.innerHTML = subfields[i],
                    bodyFrame.src = pages[i],
                    // window.scrollTo(100,100)
                    ])
                }
            } else {
                graphicsSubfield.innerHTML = '';
            }
        })

        

    } catch (error) {
        console.log(error);
    }

}

async function loadCyberSubfields() {
    try {

        const response = await fetch('./JSON/subfields/cyber.json');

        if (!response.ok) {
            throw new Error(response.status);
        }

        const subfields = await response.json();
        const buttons = []

        const pages = ['./pages/opengl.html',

                      ]

        graphicsButton.addEventListener('click', () => {
            if (!graphicsSubfield.hasChildNodes()){
                for (let i = 0; i < subfields.length; i++) {
                    buttons.push(document.createElement('button'))
                    buttons[i].innerHTML = subfields[i]
                    buttons[i].classList.add('index-button');
                    graphicsSubfield.appendChild(buttons[i])

                    buttons[i].addEventListener('click', () => [
                    header.innerHTML = subfields[i],
                    bodyFrame.src = pages[i],
                    // window.scrollTo(100,100)
                    ])
                }
            } else {
                graphicsSubfield.innerHTML = '';
            }
        })

        

    } catch (error) {
        console.log(error);
    }

}

loadGraphicsSubfields();
loadCyberSubfields();