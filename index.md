---
layout: null
permalink: /
---
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bobby Pro Builds</title>
  <style>
    *{box-sizing:border-box}
    html,body{margin:0;width:100%;min-height:100%;background:#fff;color:#202020;font-family:Arial,sans-serif}
    .site-header{position:relative;z-index:10;background:#fff;border-bottom:1px solid #ece7e3}
    .header-inner{width:min(1120px,calc(100% - 40px));min-height:82px;margin:0 auto;display:flex;align-items:center;gap:28px}
    .logo{display:block;margin-right:auto}
    .logo img{display:block;width:335px;max-width:48vw;height:auto}
    .navigation{display:flex;align-items:center;gap:24px}
    .nav-item{position:relative}
    .nav-button{border:0;background:transparent;padding:12px 4px;color:#202020;font:inherit;font-weight:700;cursor:pointer}
    .nav-button:hover,.nav-button[aria-expanded="true"]{color:#a73534}
    .nav-button::after{content:"▾";margin-left:7px;font-size:.75em}
    .dropdown{position:absolute;top:calc(100% + 8px);right:0;width:250px;min-height:70px;padding:20px;background:#fff;border:1px solid #e7ded7;border-radius:10px;box-shadow:0 14px 34px rgba(30,22,18,.15);opacity:0;visibility:hidden;transform:translateY(-6px);transition:.16s ease}
    .nav-item.open .dropdown{opacity:1;visibility:visible;transform:none}
    .dropdown h2{margin:0;color:#173f34;font-family:Georgia,serif;font-size:1.15rem}
    .blank-page{min-height:calc(100vh - 83px);background:#fff}
    .hero{width:min(1120px,calc(100% - 40px));min-height:380px;margin:0 auto;display:grid;grid-template-columns:52% 48%;gap:8px;align-items:center}
    .hero-copy{padding:42px 0}
    .hero-title{margin:0 0 30px;font-family:Georgia,"Times New Roman",serif;font-size:24px;line-height:1.16;letter-spacing:0}
    .hero-title span{display:block;color:#a73534;white-space:nowrap}
    .hero-title strong{display:block;color:#173f34;white-space:nowrap}
    .hero-intro{max-width:540px;margin:0;color:#2d2d2d;font-family:Georgia,"Times New Roman",serif;font-size:14px;line-height:1.5}
    .hero-photo{position:relative;width:340px;height:340px;max-width:100%;justify-self:start;overflow:hidden;-webkit-mask-image:none;mask-image:none}
    .hero-photo::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to right,#fff 0,rgba(255,255,255,.94) 5%,rgba(255,255,255,.55) 12%,transparent 23%,transparent 77%,rgba(255,255,255,.55) 88%,rgba(255,255,255,.94) 95%,#fff 100%),linear-gradient(to bottom,#fff 0,rgba(255,255,255,.94) 5%,rgba(255,255,255,.55) 12%,transparent 23%,transparent 77%,rgba(255,255,255,.55) 88%,rgba(255,255,255,.94) 95%,#fff 100%)}
    .hero-photo img{display:block;width:100%;height:100%;object-fit:contain;object-position:center}
    @media(max-width:760px){
      .header-inner{min-height:74px;gap:14px}
      .logo img{width:235px;max-width:51vw}
      .navigation{gap:8px}
      .nav-button{font-size:.78rem}
      .dropdown{position:fixed;top:74px;left:20px;right:20px;width:auto}
      .hero{grid-template-columns:1fr;gap:6px;padding:30px 0}
      .hero-copy{padding:10px 0}
      .hero-title{font-size:22px;margin-bottom:22px}
      .hero-photo{width:250px;height:250px}
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="logo" href="/" aria-label="Bobby Pro Builds home">
        <img src="{{ '/assets/logo.svg' | relative_url }}" alt="Bobby Pro Builds logo">
      </a>
      <nav class="navigation" aria-label="Main navigation">
        <div class="nav-item">
          <button class="nav-button" type="button" aria-expanded="false">Home</button>
          <div class="dropdown"><h2>Home</h2></div>
        </div>
        <div class="nav-item">
          <button class="nav-button" type="button" aria-expanded="false">About</button>
          <div class="dropdown"><h2>About</h2></div>
        </div>
        <div class="nav-item">
          <button class="nav-button" type="button" aria-expanded="false">Contact &amp; Get a Quote</button>
          <div class="dropdown"><h2>Contact &amp; Get a Quote</h2></div>
        </div>
      </nav>
    </div>
  </header>
  <main class="blank-page">
    <section class="hero">
      <div class="hero-copy">
        <h1 class="hero-title">
          <span>Building a Better Home</span>
          <strong>As You Dream Of</strong>
        </h1>
        <p class="hero-intro">Professional building, renovation and property improvement services with more than 15 years of hands-on experience. Reliable workmanship, clear communication and attention to detail from start to finish.</p>
      </div>
      <div class="hero-photo">
        <img src="{{ '/assets/images/2ff575ca-cc75-410e-b5b4-560d87022bf0.jpg' | relative_url }}?v=red-lights-1" alt="Completed modern kitchen by Bobby Pro Builds">
      </div>
    </section>
  </main>
  <script>
    const items = document.querySelectorAll('.nav-item');
    const closeMenus = () => items.forEach(item => {
      item.classList.remove('open');
      item.querySelector('.nav-button').setAttribute('aria-expanded','false');
    });
    items.forEach(item => {
      const button = item.querySelector('.nav-button');
      button.addEventListener('click', event => {
        event.stopPropagation();
        const opening = !item.classList.contains('open');
        closeMenus();
        if(opening){
          item.classList.add('open');
          button.setAttribute('aria-expanded','true');
        }
      });
    });
    document.addEventListener('click', closeMenus);
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeMenus();
    });
  </script>
</body>
</html>
