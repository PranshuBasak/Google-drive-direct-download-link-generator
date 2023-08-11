const gLink  = document.getElementById('glink');
const btn  = document.getElementById('btn');
const downloadLink  = document.getElementById('download-link');



btn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    
    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");
    

    if(confirmLink === true){
        const getDownloadLink = gLink.value.replace("https://drive.google.com/file/d/","https://drive.google.com/u/1/uc?export=download&id=").replace("/view?usp=sharing","");
        
        downloadLink.value = getDownloadLink;
        function copyText(target){
            if(target.value === ""){
                alert("Please generate a download link")
            }else{
                navigator.clipboard.writeText(target.value).then(() =>{
                    alert("Link has been copied to clipboard ")
                    // console.log(target.value);
                });
                // Set SameSite attribute for cookie
                document.cookie = "myCookie=" + target.value + "; SameSite=None; Secure";
            }
        }

        const copy = document.querySelector('.copy');
        copy.addEventListener("click", () =>{
            return copyText(downloadLink);
        })

        // Embed Audio 

        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        const embed_audio = document.getElementById("embed-audio");
        embed_audio.value = `${audio1}${downloadLink.value}${audio2}`;
        // console.log(embed_audio.value);
        const copyAudio = document.querySelector('.copy-audio');
        copyAudio.addEventListener("click", () =>{
            return copyText(embed_audio); 
        });

        // Embed Video/Docs

        const getVideoLink = gLink.value.replace("/view?usp=sharing","");

        const video1 = '<iframe src=" ';
        const video2 = '/preview" width="600" height="315"></iframe>';

        const embedVideo = document.getElementById('embed-video');
        embedVideo.value = `${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector('.copy-video');
        copyVideo.addEventListener('click', () =>{
            return copyText(embedVideo);
        });

        
    }else {
        alert("Please Enter correct Goodge Drive Link")
    }


})

