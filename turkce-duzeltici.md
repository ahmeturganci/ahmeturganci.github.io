---
title: "Türkçe Düzeltici"
permalink: "/turkce-duzeltici/"
layout: page
---

<div class="proofreader-page">
  <p class="proofreader-intro">
    Metnini yapıştır, yaygın Türkçe yazım ve imla hatalarını otomatik düzelt. Araç, metni tarayıcı içinde analiz edip düzenlenmiş hâlini üretir.
  </p>

  <div class="proofreader-grid">
    <section class="proofreader-card">
      <label class="proofreader-label" for="proofreader-input">Metin</label>
      <textarea
        id="proofreader-input"
        class="proofreader-textarea"
        rows="12"
        placeholder="Düzeltilmesini istediğin metni buraya yaz."
      ></textarea>

      <div class="proofreader-actions">
        <button type="button" class="proofreader-button" data-action="correct">Düzelt</button>
        <button type="button" class="proofreader-button proofreader-button--ghost" data-action="clear">Temizle</button>
      </div>

      <p class="proofreader-status" data-role="status" aria-live="polite"></p>
    </section>

    <section class="proofreader-card">
      <div class="proofreader-output-header">
        <label class="proofreader-label" for="proofreader-output">Düzeltilmiş Metin</label>
        <button type="button" class="proofreader-button proofreader-button--ghost" data-action="copy" disabled>Kopyala</button>
      </div>
      <textarea
        id="proofreader-output"
        class="proofreader-textarea proofreader-textarea--output"
        rows="12"
        readonly
        placeholder="Düzeltilmiş metin burada görünecek."
      ></textarea>

      <div class="proofreader-summary" data-role="summary" hidden>
        <h2>Öneriler</h2>
        <ul data-role="suggestions"></ul>
      </div>
    </section>

  </div>

  <p class="proofreader-note">
    Not: Sonuçlar otomatik kurallarla üretilir; paylaşmadan önce son kontrolü yapman iyi olur.
  </p>
</div>

<script src="{{ '/assets/js/turkce-proofreader.js' | relative_url }}" defer></script>
