// Utterances yorum sayısı - GitHub API
(function() {
  const REPO = 'ahmeturganci/ahmeturganci.github.io';
  const CACHE_KEY = 'utterances_comment_counts';
  const CACHE_DURATION = 1000 * 60 * 30; // 30 dakika cache

  function getCache() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < CACHE_DURATION) {
          return data.counts;
        }
      }
    } catch (e) {}
    return null;
  }

  function setCache(counts) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        counts: counts
      }));
    } catch (e) {}
  }

  async function fetchAllCommentCounts() {
    const cached = getCache();
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(
        `https://api.github.com/search/issues?q=repo:${REPO}+type:issue&per_page=100`
      );
      
      if (!response.ok) return {};
      
      const data = await response.json();
      const counts = {};
      
      if (data.items) {
        data.items.forEach(issue => {
          // Issue title'dan pathname'i çıkar
          const title = issue.title;
          counts[title] = issue.comments;
        });
      }
      
      setCache(counts);
      return counts;
    } catch (e) {
      return {};
    }
  }

  async function updateCommentCounts() {
    const elements = document.querySelectorAll('[data-comment-count]');
    if (elements.length === 0) return;

    const counts = await fetchAllCommentCounts();
    
    elements.forEach(el => {
      const pathname = el.getAttribute('data-comment-count');
      // pathname ile eşleşen issue'yu bul
      let count = 0;
      
      for (const [title, commentCount] of Object.entries(counts)) {
        if (title.includes(pathname) || pathname.includes(title)) {
          count = commentCount;
          break;
        }
      }
      
      if (count > 0) {
        el.textContent = `💬 ${count}`;
        el.style.display = 'inline';
      } else {
        el.textContent = '💬 0';
        el.style.display = 'inline';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCommentCounts);
  } else {
    updateCommentCounts();
  }
})();
