console.log("OK SHOD");
import cases from './cases.json' assert { type: 'json' };
const container = document.getElementById('cases');
cases.forEach(c => {
  const card = document.createElement('div');
  card.className = 'case-card';
  card.innerHTML = `
    <img src="${c.image}">
    <div class="case-content">
      <h2>${c.title}</h2>
      <div class="case-meta">سال وقوع: ${c.date}</div>
      <div class="case-desc">${c.desc}</div>
      <div class="comments" id="comments-${c.id}">
        <h3>نظرات</h3>
        <div class="comment-list"></div>
        <div class="comment-form">
          <textarea rows="2" placeholder="نظر یا سرنخ خود را بنویسید..."></textarea>
          <button>ارسال نظر</button>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
});