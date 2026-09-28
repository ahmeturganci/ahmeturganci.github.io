(function() {
  const API_URL = 'https://api.languagetool.org/v2/check';
  const MAX_SUGGESTIONS = 8;

  function applySuggestions(text, matches) {
    const orderedMatches = [...matches].sort((left, right) => left.offset - right.offset);
    let cursor = 0;
    let result = '';

    orderedMatches.forEach(match => {
      const replacement = match.replacements && match.replacements[0];

      if (!replacement || match.offset < cursor) {
        return;
      }

      result += text.slice(cursor, match.offset);
      result += replacement.value;
      cursor = match.offset + match.length;
    });

    result += text.slice(cursor);
    return result;
  }

  function escapeHtml(value) {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function renderSuggestions(matches, listElement, summaryElement) {
    const items = matches
      .filter(match => match.replacements && match.replacements.length > 0)
      .slice(0, MAX_SUGGESTIONS)
      .map(match => {
        const replacement = match.replacements[0].value;
        const fragment = match.context && typeof match.context.offset === 'number'
          ? match.context.text.slice(match.context.offset, match.context.offset + match.context.length)
          : '';

        return `<li><strong>${escapeHtml(fragment || 'Düzeltme')}</strong> → ${escapeHtml(replacement)}</li>`;
      });

    if (items.length === 0) {
      listElement.innerHTML = '';
      summaryElement.hidden = true;
      return;
    }

    listElement.innerHTML = items.join('');
    summaryElement.hidden = false;
  }

  async function requestCorrections(text) {
    const body = new URLSearchParams({
      language: 'tr',
      text
    });

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    });

    if (!response.ok) {
      throw new Error('Servise ulaşılamadı.');
    }

    return response.json();
  }

  function init() {
    const input = document.getElementById('proofreader-input');
    const output = document.getElementById('proofreader-output');
    const status = document.querySelector('[data-role="status"]');
    const summary = document.querySelector('[data-role="summary"]');
    const suggestions = document.querySelector('[data-role="suggestions"]');
    const correctButton = document.querySelector('[data-action="correct"]');
    const clearButton = document.querySelector('[data-action="clear"]');
    const copyButton = document.querySelector('[data-action="copy"]');

    if (!input || !output || !status || !summary || !suggestions || !correctButton || !clearButton || !copyButton) {
      return;
    }

    async function handleCorrection() {
      const text = input.value.trim();

      if (!text) {
        status.textContent = 'Lütfen düzeltilecek bir metin gir.';
        output.value = '';
        summary.hidden = true;
        copyButton.disabled = true;
        return;
      }

      correctButton.disabled = true;
      clearButton.disabled = true;
      copyButton.disabled = true;
      status.textContent = 'Metin kontrol ediliyor...';

      try {
        const data = await requestCorrections(text);
        const correctedText = applySuggestions(text, data.matches || []);

        output.value = correctedText;
        renderSuggestions(data.matches || [], suggestions, summary);

        if ((data.matches || []).length === 0) {
          status.textContent = 'Yazım veya imla hatası bulunamadı.';
        } else {
          status.textContent = `${data.matches.length} öneri bulundu.`;
        }

        copyButton.disabled = !output.value;
      } catch (error) {
        output.value = '';
        summary.hidden = true;
        status.textContent = 'Düzeltme servisine erişilemedi. Lütfen daha sonra tekrar dene.';
      } finally {
        correctButton.disabled = false;
        clearButton.disabled = false;
      }
    }

    async function handleCopy() {
      if (!output.value) {
        return;
      }

      try {
        await navigator.clipboard.writeText(output.value);
        status.textContent = 'Düzeltilmiş metin panoya kopyalandı.';
      } catch (error) {
        status.textContent = 'Metin kopyalanamadı.';
      }
    }

    function handleClear() {
      input.value = '';
      output.value = '';
      status.textContent = '';
      summary.hidden = true;
      suggestions.innerHTML = '';
      copyButton.disabled = true;
      input.focus();
    }

    correctButton.addEventListener('click', handleCorrection);
    clearButton.addEventListener('click', handleClear);
    copyButton.addEventListener('click', handleCopy);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
