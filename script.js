const viewer=document.getElementById('viewer');let previousFocus;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;document.getElementById('viewer-title').textContent=button.dataset.title;const image=document.getElementById('viewer-image');image.src=button.dataset.image;image.alt=button.querySelector('img').alt;viewer.showModal();document.body.style.overflow='hidden';document.getElementById('close-viewer').focus();}));
document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus();});
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
