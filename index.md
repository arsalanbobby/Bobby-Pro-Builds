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
    .logo img{display:block;width:250px;max-width:42vw;height:auto}
    .navigation{display:flex;align-items:center;gap:24px}
    .nav-item{position:relative}
    .nav-button{border:0;background:transparent;padding:12px 4px;color:#202020;font:inherit;font-weight:700;cursor:pointer}
    .nav-button:hover,.nav-button[aria-expanded="true"]{color:#a73534}
    .nav-button::after{content:"▾";margin-left:7px;font-size:.75em}
    .dropdown{position:absolute;top:calc(100% + 8px);right:0;width:250px;min-height:70px;padding:20px;background:#fff;border:1px solid #e7ded7;border-radius:10px;box-shadow:0 14px 34px rgba(30,22,18,.15);opacity:0;visibility:hidden;transform:translateY(-6px);transition:.16s ease}
    .nav-item.open .dropdown{opacity:1;visibility:visible;transform:none}
    .dropdown h2{margin:0;color:#173f34;font-family:Georgia,serif;font-size:1.15rem}
    .blank-page{min-height:calc(100vh - 83px);background:#fff}
    @media(max-width:760px){
      .header-inner{min-height:74px;gap:14px}
      .logo img{width:185px;max-width:45vw}
      .navigation{gap:8px}
      .nav-button{font-size:.78rem}
      .dropdown{position:fixed;top:74px;left:20px;right:20px;width:auto}
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
  <main class="blank-page"></main>
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
