const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit',(event:Event)=> {
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLTextAreaElement).value
    const email=(document.getElementById('email') as HTMLTextAreaElement).value
    const phone=(document.getElementById('phone') as HTMLTextAreaElement).value
    const education=(document.getElementById('education') as HTMLTextAreaElement).value
    const experience=(document.getElementById('experience') as HTMLTextAreaElement).value
    const skills=(document.getElementById('skills') as HTMLTextAreaElement).value

    const resumeHTML=`
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span conteteditable="true">${name}</span></p>
    <p><b>Email:</b><span conteteditable="true">${email}</span></p>
    <p><b>Phone:</b><span conteteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p conteteditable="true"><b>Education:</b>${education}</p>
  
    <h3>Experience</h3>
    <p conteteditable="true"><b>Experience:</b>${experience}</p>
  
    <h3>Skills</h3>
    <p conteteditable="true"><b>Skills:</b>${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    };
    
});
