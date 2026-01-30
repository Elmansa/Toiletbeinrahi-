console.log("OK SHOD");

async function loadCases() {
  const res = await fetch('./cases.json?v=' + Date.now());
  const cases = await res.json();
  const container = document.getElementById('cases');

  cases.forEach(c => {
    const firstMedia = c.media.find(m => m.type === 'image') || c.media[0];
    const card = document.createElement('div');
    card.className = 'case-card';
    card.innerHTML = `
      <a href="case.html?id=${c.id}" style="text-decoration:none; color:inherit;">
        <img src="${firstMedia.src}" style="width:100%; height:180px; object-fit:cover;">
        <div class="case-content">
          <h2>${c.title}</h2>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
}

async function loadCaseDetail(caseId) {
  const res = await fetch('./cases.json?v=' + Date.now());
  const cases = await res.json();
  const c = cases.find(x => x.id === caseId);
  if(!c) return;

  const container = document.getElementById('case-detail');
  container.innerHTML = `<h1>${c.title}</h1><p>${c.desc}</p><div id="gallery"></div><div class="comments" id="comments-${c.id}"><h3>نظرات</h3><div class="comment-list"></div><div class="comment-form"><textarea rows="2" placeholder="نظر خود را بنویسید..."></textarea><button>ارسال نظر</button></div></div>`;

  const gallery = document.getElementById('gallery');
  if(Array.isArray(c.media)) {
    c.media.forEach(m => {
      let el;
      if(m.type === 'video') {
        el = document.createElement('video');
        el.src = m.src;
        el.controls = true;
        el.style.width = '100%';
        el.style.marginBottom = '0.5rem';
      } else {
        el = document.createElement('img');
        el.src = m.src;
        el.style.width = '100%';
        el.style.marginBottom = '0.5rem';
      }
      gallery.appendChild(el);
    });
  }

  // Back button
  const backBtn = document.createElement('button');
  backBtn.textContent = 'بازگشت به صفحه اصلی';
  backBtn.style.marginTop = '1rem';
  backBtn.onclick = () => { window.location.href = 'index.html'; };
  container.appendChild(backBtn);
}

// اجرا
const params = new URLSearchParams(location.search);
const id = params.get('id');
if(id && document.getElementById('case-detail')) {
  loadCaseDetail(id);
} else if(document.getElementById('cases')) {
  loadCases();
}
