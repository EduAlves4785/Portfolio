const projetoCard1=document.getElementById("projeto-card1")
const videosContainer=document.getElementById("videos-container")

projetoCard1.addEventListener("mouseenter",()=>{
    projetoCard1.innerHTML=`
        <div id="card-footer" class="card-footer">
            <button id="acessa-projetos">Acessar</button>
        </div>
         `
    const acessaProjetos=document.getElementById("acessa-projetos") 
    acessaProjetos.addEventListener('click',()=>{
        acessaProjetos.style.color="white"
        acessaProjetos.style.backgroundColor="rgb(30,144,255)"
    })   
        
    document.getElementById("acessa-projetos").addEventListener('click',()=>{
        videosContainer.innerHTML=`
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6942254999112450048" height="307" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6982809855115866112" height="528" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6976227462410039296" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6947364562580987904" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6943734595636887552" height="549" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>  
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6946181942841102336" height="549" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
        `
    })
})

projetoCard1.addEventListener("mouseleave",()=>{
    document.getElementById('card-footer').remove() 
})

const projetoCard2=document.getElementById("projeto-card2")

projetoCard2.addEventListener('mouseenter',()=>{
    projetoCard2.innerHTML=`
        <div id="card-footer" class="card-footer">
            <button id="acessa-projetos">Acessar</button>
        </div>
         `

    const acessaProjetos=document.getElementById("acessa-projetos") 
    acessaProjetos.addEventListener('click',()=>{
            acessaProjetos.style.color="white"
            acessaProjetos.style.backgroundColor="rgb(30,144,255)"
        })     
    document.getElementById("acessa-projetos").addEventListener('click',()=>{
        videosContainer.innerHTML=`
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6944079456030363648" height="328" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6967856778499756032" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6973669933117247488" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
        `
    })    
})

projetoCard2.addEventListener("mouseleave",()=>{
    document.getElementById('card-footer').remove() 
})

const projetoCard3=document.getElementById("projeto-card3")

projetoCard3.addEventListener('mouseenter',()=>{
    projetoCard3.innerHTML=`
        <div id="card-footer" class="card-footer">
            <button id="acessa-projetos">Acessar</button>
        </div>
         `

    const acessaProjetos=document.getElementById("acessa-projetos") 
    acessaProjetos.addEventListener('click',()=>{
            acessaProjetos.style.color="white"
            acessaProjetos.style.backgroundColor="rgb(30,144,255)"
        })         
    document.getElementById("acessa-projetos").addEventListener('click',()=>{
        videosContainer.innerHTML=`
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6955668129586778112" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6964933071552827392" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7060794375227740160" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7031987895548657664" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7019400838414577665" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7009980904555098112" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7006037901163552768" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6998308161036152834" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6988587458678394880" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6978793032917635072" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
        `
    })    
})

projetoCard3.addEventListener("mouseleave",()=>{
    document.getElementById('card-footer').remove() 
})

const projetoCard4=document.getElementById("projeto-card4")

projetoCard4.addEventListener('mouseenter',()=>{
    projetoCard4.innerHTML=`
        <div id="card-footer" class="card-footer">
            <button id="acessa-projetos">Acessar</button>
        </div>
         `
    const acessaProjetos=document.getElementById("acessa-projetos") 
        acessaProjetos.addEventListener('click',()=>{
            acessaProjetos.style.color="white"
            acessaProjetos.style.backgroundColor="rgb(30,144,255)"
        })     
    document.getElementById("acessa-projetos").addEventListener('click',()=>{
        videosContainer.innerHTML=`
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7056072835345133568" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7055668567718924288" height="475" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
        `
    })    
})

projetoCard4.addEventListener("mouseleave",()=>{
    document.getElementById('card-footer').remove() 
})

const projetoCard5=document.getElementById("projeto-card5")

projetoCard5.addEventListener('mouseenter',()=>{
    projetoCard5.innerHTML=`
        <div id="card-footer" class="card-footer">
            <button id="acessa-projetos">Acessar</button>
        </div>
         `
        const acessaProjetos=document.getElementById("acessa-projetos") 
        acessaProjetos.addEventListener('click',()=>{
            acessaProjetos.style.color="white"
            acessaProjetos.style.backgroundColor="rgb(30,144,255)"
        }) 
    document.getElementById("acessa-projetos").addEventListener('click',()=>{
        videosContainer.innerHTML=`
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7045530165820436480" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7029823013273448448" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
            <div class="card-video">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7022272015633899520" height="undefined" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
            </div>
        `
    })    
})

projetoCard5.addEventListener("mouseleave",()=>{
    document.getElementById('card-footer').remove() 
})

