async function loadCase() {
  const res = await fetch('./cases.json?v=' + Date.now());
  const cases = await res.json();
  const c = cases.find(x => x.id == caseId);
  if (!c) return;

  const container = document.getElementById('case');
  container.innerHTML = `
    <h1>${c.title}</h1>
    <div class="case-meta">سال: ${c.date}</div>
    <p>${c.desc}</p>
    <div class="media-gallery"></div>
    
    <!-- بخش نظرات -->
    <div class="comments" id="comments-${c.id}">
      <h3>نظرات</h3>
      <div class="comment-list"></div>
      <div class="comment-form">
        <textarea rows="2" placeholder="نظر خود را بنویسید..."></textarea>
        <button>ارسال نظر</button>
      </div>
    </div>

    <a href="index.html" class="back-btn">← بازگشت</a>
  `;

  const gallery = container.querySelector('.media-gallery');
  c.media.forEach(src => {
    let el;
    if (src.endsWith('.mp4')) {
      el = document.createElement('video');
      el.src = src;
      el.controls = true;
      el.style.width = '100%';
      el.style.marginBottom = '10px';
    } else {
      el = document.createElement('img');
      el.src = src;
      el.style.width = '100%';
      el.style.marginBottom = '10px';
      el.style.borderRadius = '12px';
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => openLightbox(src));
    }
    gallery.appendChild(el);
  });

  // --- JS برای مدیریت نظرات ---
  const commentList = container.querySelector('.comment-list');
  const commentForm = container.querySelector('.comment-form');
  const textarea = commentForm.querySelector('textarea');
  const button = commentForm.querySelector('button');

  button.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.textContent = text;
    commentList.appendChild(div);
    textarea.value = '';
    // اسکرول به پایین
    commentList.scrollTop = commentList.scrollHeight;
  });
}
async function loadCase() {
  const res = await fetch('./cases.json?v=' + Date.now());
  const cases = await res.json();
  const c = cases.find(x => x.id == caseId);
  if (!c) return;

  const container = document.getElementById('case');
  container.innerHTML = `
    <h1>${c.title}</h1>
    <div class="case-meta">سال: ${c.date}</div>
    <p>${c.desc}</p>
    <div class="media-gallery"></div>
    
    <!-- بخش نظرات -->
    <div class="comments" id="comments-${c.id}">
      <h3>نظرات</h3>
      <div class="comment-list"></div>
      <div class="comment-form">
        <textarea rows="2" placeholder="نظر خود را بنویسید..."></textarea>
        <button>ارسال نظر</button>
      </div>
    </div>

    <a href="index.html" class="back-btn">← بازگشت</a>
  `;

  const gallery = container.querySelector('.media-gallery');
  c.media.forEach(src => {
    let el;
    if (src.endsWith('.mp4')) {
      el = document.createElement('video');
      el.src = src;
      el.controls = true;
      el.style.width = '100%';
      el.style.marginBottom = '10px';
    } else {
      el = document.createElement('img');
      el.src = src;
      el.style.width = '100%';
      el.style.marginBottom = '10px';
      el.style.borderRadius = '12px';
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => openLightbox(src));
    }
    gallery.appendChild(el);
  });

  // --- JS برای مدیریت نظرات ---
  const commentList = container.querySelector('.comment-list');
  const commentForm = container.querySelector('.comment-form');
  const textarea = commentForm.querySelector('textarea');
  const button = commentForm.querySelector('button');

  button.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.textContent = text;
    commentList.appendChild(div);
    textarea.value = '';
    // اسکرول به پایین
    commentList.scrollTop = commentList.scrollHeight;
    

  });
}
