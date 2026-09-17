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
    :root{
      --cream:#c8b89f;
      --green:#173f34;
      --light-green:#2f8a51;
      --red:#a73534;
      --text:#252525;
      --line:rgba(23,63,52,.14);
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:linear-gradient(135deg,#d1c3ad 0%,#b7a085 52%,#947b64 100%);
      color:var(--text);
      font-family:Arial,sans-serif;
      font-size:16px;
      line-height:1.5;
    }

    .page-width{
      width:min(1080px,calc(100% - 48px));
      margin:0 auto;
    }

    /* Header */
    .site-header{
      position:relative;
      z-index:20;
      background:#fff;
      border-bottom:1px solid var(--line);
    }

    .header-inner{
      min-height:82px;
      display:flex;
      align-items:center;
      gap:34px;
    }

    .logo{
      display:block;
      margin-right:auto;
    }

    .logo img{
      display:block;
      width:340px;
      max-width:50vw;
      height:auto;
    }

    .navigation{
      display:flex;
      align-items:center;
      gap:26px;
    }

    .nav-item{position:relative}

    .nav-button{
      display:inline-block;
      border:0;
      background:transparent;
      padding:14px 0;
      color:var(--green);
      font:inherit;
      font-size:16px;
      font-weight:700;
      text-decoration:none;
      white-space:nowrap;
      cursor:pointer;
    }

    button.nav-button::after{
      content:"▾";
      margin-left:7px;
      font-size:.72em;
    }

    .nav-button:hover,
    .nav-button[aria-expanded="true"]{color:var(--red)}

    .dropdown{
      position:absolute;
      top:calc(100% + 7px);
      right:0;
      width:390px;
      padding:22px;
      background:#fff;
      border:1px solid #e5ded3;
      border-radius:12px;
      box-shadow:0 16px 38px rgba(23,35,29,.17);
      opacity:0;
      visibility:hidden;
      transform:translateY(-7px);
      transition:opacity .18s ease,transform .18s ease;
    }

    .nav-item.open .dropdown{
      opacity:1;
      visibility:visible;
      transform:none;
    }

    .dropdown-label{
      margin:0 0 8px;
      color:var(--red);
      font-size:12px;
      font-weight:800;
      letter-spacing:.12em;
    }

    .dropdown h2{
      margin:0 0 12px;
      color:var(--green);
      font-family:Georgia,"Times New Roman",serif;
      font-size:21px;
      line-height:1.25;
    }

    .about-dropdown p:not(.dropdown-label){
      margin:0 0 11px;
      color:#333;
      font-family:Georgia,"Times New Roman",serif;
      font-size:14px;
      line-height:1.55;
    }

    .about-dropdown p:last-child{margin-bottom:0}

    .contact-dropdown{width:370px}

    .contact-options{
      display:grid;
      gap:9px;
    }

    .contact-options a{
      display:block;
      padding:10px 12px;
      border:1px solid var(--line);
      border-radius:9px;
      background:#fbfbf7;
      text-decoration:none;
    }

    .contact-options strong,
    .contact-options small{display:block}

    .contact-options strong{
      color:var(--green);
      font-size:14px;
    }

    .contact-options small{
      margin-top:2px;
      color:#655f57;
      font-size:12px;
    }

    /* Hero */
    .hero{
      display:grid;
      grid-template-columns:minmax(0,1fr) minmax(380px,.92fr);
      align-items:center;
      gap:58px;
      padding:42px 0 38px;
    }

    .hero-copy{max-width:520px}

    .hero-title{
      margin:0 0 24px;
      font-family:Georgia,"Times New Roman",serif;
      font-size:32px;
      line-height:1.12;
    }

    .hero-title span,
    .hero-title strong{display:block}

    .hero-title span{color:var(--red)}
    .hero-title strong{color:var(--green)}

    .hero-intro{
      margin:0;
      max-width:500px;
      color:#333;
      font-family:Georgia,"Times New Roman",serif;
      font-size:16px;
      line-height:1.65;
    }

    .soft-photo{
      position:relative;
      overflow:hidden;
      background:linear-gradient(135deg,#d1c3ad 0%,#b7a085 52%,#947b64 100%);
    }

    .soft-photo::after{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        linear-gradient(to right,var(--cream) 0,rgba(200,184,159,.78) 7%,transparent 21%,transparent 79%,rgba(200,184,159,.78) 93%,var(--cream) 100%),
        linear-gradient(to bottom,var(--cream) 0,rgba(200,184,159,.78) 7%,transparent 21%,transparent 79%,rgba(200,184,159,.78) 93%,var(--cream) 100%);
    }

    .hero-photo{
      width:100%;
      height:285px;
    }

    .hero-photo img,
    .service-photo img{
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
    }

    .hero-photo img{object-position:center}

    /* Services */
    .services-section{
      padding:20px 0 48px;
    }

    .services-heading{
      position:relative;
      top:-116px;
      margin:0 0 10px;
      color:var(--green);
      font-family:Georgia,"Times New Roman",serif;
      font-size:26px;
      line-height:1.2;
    }

    .services-toggle{
      display:inline-flex;
      align-items:center;
      gap:7px;
      margin:0 0 26px;
      border:0;
      background:transparent;
      padding:0;
      color:var(--red);
      font-family:Georgia,"Times New Roman",serif;
      font-size:18px;
      font-weight:700;
      cursor:pointer;
    }

    .services-toggle span{transition:transform .18s ease}
    .services-section.open .services-toggle span{transform:rotate(180deg)}

    .services-dropdown{
      display:none;
      margin:-10px 0 28px;
      padding:18px 20px;
      border:1px solid var(--line);
      border-radius:12px;
      background:rgba(255,255,255,.5);
    }

    .services-section.open .services-dropdown{display:block}

    .services-dropdown-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:24px;
    }

    .services-dropdown-grid strong{
      display:block;
      margin-bottom:4px;
      color:var(--green);
      font-family:Georgia,"Times New Roman",serif;
      font-size:15px;
    }

    .services-dropdown-grid span{
      color:#555;
      font-size:13px;
      line-height:1.45;
    }

    .services-row{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:34px;
    }

    .service-item{min-width:0}

    .service-photo{
      width:100%;
      height:185px;
      margin:0 0 15px;
    }

    .service-item p{
      margin:0;
      color:#333;
      font-family:Georgia,"Times New Roman",serif;
      font-size:15px;
      line-height:1.5;
    }

    .service-item p strong{
      display:block;
      margin-bottom:3px;
      color:var(--green);
      font-size:16px;
    }

    /* Trust row */
    .trust-strip{
      background:#fff;
      border-top:1px solid var(--line);
    }

    .trust-row{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:28px;
      padding:24px 0;
    }

    .trust-item strong{
      display:block;
      color:var(--light-green);
      font-family:Georgia,"Times New Roman",serif;
      font-size:14px;
    }

    .trust-item span{
      display:block;
      margin-top:4px;
      color:#333;
      font-size:13px;
      font-weight:700;
    }

    /* Footer */
    .site-footer{
      background:var(--green);
      color:#fff;
    }

    .footer-inner{padding:26px 0 18px}

    .footer-details{
      display:grid;
      grid-template-columns:.8fr 1.3fr;
      gap:70px;
      padding-bottom:19px;
      border-bottom:1px solid rgba(255,255,255,.16);
    }

    .footer-details strong{
      display:block;
      font-family:Georgia,"Times New Roman",serif;
      font-size:14px;
    }

    .footer-details span{
      display:block;
      margin-top:7px;
      color:#e1e8e3;
      font-size:13px;
    }

    .footer-bottom{
      display:flex;
      align-items:center;
      gap:14px;
      padding-top:14px;
    }

    .copyright{
      color:#e1e8e3;
      font-size:11px;
    }

    .footer-socials{
      display:flex;
      align-items:center;
      gap:8px;
    }

    .footer-socials span{
      display:grid;
      place-items:center;
      width:22px;
      height:22px;
      border:1px solid rgba(255,255,255,.68);
      border-radius:50%;
      font-size:11px;
      font-weight:700;
    }

    .whatsapp-button{
      margin-left:auto;
      padding:8px 16px;
      border-radius:999px;
      background:#22c55e;
      color:#fff;
      text-decoration:none;
      font-size:12px;
      font-weight:800;
    }

    @media(min-width:821px){
      .hero-copy{transform:translateY(-32px)}
    }

    @media(max-width:820px){
      .page-width{width:min(100% - 32px,680px)}
      .header-inner{min-height:76px;gap:18px}
      .logo img{width:270px;max-width:50vw}
      .navigation{gap:13px}
      .nav-button{font-size:13px}
      .hero{grid-template-columns:1fr;gap:24px;padding:34px 0}
      .hero-copy{max-width:none}
      .hero-title{font-size:29px}
      .hero-photo{width:min(100%,480px);height:270px;margin:0 auto}
      .services-row{grid-template-columns:1fr;gap:30px}
      .service-photo{width:min(100%,430px);height:240px}
      .service-item p{max-width:430px}
      .services-dropdown-grid{grid-template-columns:1fr;gap:14px}
      .trust-row{grid-template-columns:repeat(2,1fr)}
      .footer-details{grid-template-columns:1fr;gap:18px}
      .dropdown{position:fixed;top:76px;left:16px;right:16px;width:auto;max-height:calc(100vh - 92px);overflow:auto}
    }

    @media(max-width:820px){
      .site-header{background:#fff}
    }

    @media(max-width:560px){
      .header-inner{align-items:flex-start;flex-wrap:wrap;padding:12px 0}
      .logo{width:100%;margin:0}
      .logo img{width:235px;max-width:80vw}
      .navigation{width:100%;justify-content:space-between;gap:9px}
      .nav-button{padding:7px 0;font-size:12px}
      .hero-title{font-size:27px}
      .hero-intro{font-size:15px}
      .service-photo{height:210px}
      .trust-row{grid-template-columns:1fr 1fr;gap:18px}
      .footer-bottom{flex-wrap:wrap}
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner page-width">
      <a class="logo" href="/" aria-label="Bobby Pro Builds home">
        <img src="{{ '/assets/logo.svg' | relative_url }}" alt="Bobby Pro Builds logo">
      </a>

      <nav class="navigation" aria-label="Main navigation">
        <a class="nav-button" href="/">Home</a>

        <div class="nav-item">
          <button class="nav-button" type="button" aria-expanded="false">About</button>
          <div class="dropdown about-dropdown">
            <p class="dropdown-label">ABOUT US</p>
            <h2>Let’s create a home you will love</h2>
            <p>Your home should feel right for you. For over 15 years, Bobby Pro Builds has been helping people turn their ideas into comfortable, practical spaces they can enjoy every day.</p>
            <p>We take time to listen, talk you through the work and treat your home with care. We believe quality work makes all the difference, so we pay attention to the details and take pride in the finish. From a fresh new kitchen or bathroom to a conservatory or full renovation, we bring reliable workmanship and a personal touch to every job.</p>
          </div>
        </div>

        <div class="nav-item">
          <button class="nav-button" type="button" aria-expanded="false">Contact &amp; Get a Quote</button>
          <div class="dropdown contact-dropdown">
            <p class="dropdown-label">CONTACT</p>
            <h2>Contact Bobby Pro Builds</h2>
            <div class="contact-options">
              <a href="tel:+447344304402"><strong>07344 304402</strong><small>Tap to call</small></a>
              <a href="tel:+447833778270"><strong>07833 778270</strong><small>Tap to call</small></a>
              <a href="mailto:Quickfixhome2@gmail.com"><strong>Quickfixhome2@gmail.com</strong><small>Send an email</small></a>
              <a href="https://wa.me/447344304402" target="_blank" rel="noopener"><strong>WhatsApp</strong><small>07344 304402</small></a>
              <a href="https://wa.me/447833778270" target="_blank" rel="noopener"><strong>WhatsApp</strong><small>07833 778270</small></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero page-width">
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

    <section class="services-section page-width" aria-labelledby="services-heading">
      <h2 id="services-heading" class="services-heading">Building &amp; Renovation</h2>

      <button class="services-toggle" type="button" aria-expanded="false">
        Our Services &amp; Gallery <span aria-hidden="true">▾</span>
      </button>

      <div class="services-dropdown">
        <div class="services-dropdown-grid">
          <div><strong>Renovations &amp; Improvements</strong><span>Kitchens, bathrooms, plastering, decorating, tiling and flooring.</span></div>
          <div><strong>Extensions &amp; Conversions</strong><span>House extensions, conservatories and loft conversions.</span></div>
          <div><strong>Exterior &amp; Landscaping</strong><span>Patios, paving, fencing, lawns and garden buildings.</span></div>
        </div>
      </div>

      <div class="services-row">
        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4842.jpg' | relative_url }}" alt="Completed garden and landscaping project">
          </div>
          <p><strong>Exterior &amp; Landscaping</strong>Patios, paving, fencing, garden clearance, lawns, garden buildings and outdoor spaces.</p>
        </article>

        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4841.jpg' | relative_url }}" alt="Completed house extension">
          </div>
          <p><strong>Extensions &amp; Conversions</strong>House extensions, conservatories and loft conversions to create more useful space.</p>
        </article>

        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4844.jpg' | relative_url }}" alt="Completed bathroom renovation">
          </div>
          <p><strong>Renovations &amp; Improvements</strong>Kitchens, bathrooms, plastering, decorating, flooring and general home improvements.</p>
        </article>
      </div>
    </section>
  </main>

  <section class="trust-strip" aria-label="Why choose Bobby Pro Builds">
    <div class="trust-row page-width">
      <div class="trust-item"><strong>15+ Years</strong><span>Experience</span></div>
      <div class="trust-item"><strong>Reliable &amp; Trusted</strong><span>Professional service</span></div>
      <div class="trust-item"><strong>Fully Insured</strong><span>For your peace of mind</span></div>
      <div class="trust-item"><strong>Covering England</strong><span>Quality building work</span></div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="footer-inner page-width">
      <div class="footer-details">
        <div>
          <strong>Bobby Pro Builds</strong>
          <span>Building Homes &amp; Gardens</span>
        </div>
        <div>
          <strong>Building &amp; renovation services</strong>
          <span>Renovations • Extensions • Conversions • Landscaping</span>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="copyright">&copy; 2026 Bobby Pro Builds. All rights reserved.</span>
        <div class="footer-socials" aria-label="Social media">
          <span aria-label="Facebook">f</span>
          <span aria-label="Instagram">◎</span>
          <span aria-label="TikTok">♪</span>
        </div>
        <a class="whatsapp-button" href="https://wa.me/447344304402" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </footer>

  <script>
    const navItems = document.querySelectorAll('.nav-item');

    const closeMenus = () => {
      navItems.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.nav-button').setAttribute('aria-expanded','false');
      });
    };

    navItems.forEach(item => {
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

    const servicesSection = document.querySelector('.services-section');
    const servicesToggle = document.querySelector('.services-toggle');

    servicesToggle.addEventListener('click', () => {
      const opening = !servicesSection.classList.contains('open');
      servicesSection.classList.toggle('open', opening);
      servicesToggle.setAttribute('aria-expanded', String(opening));
    });
  </script>
</body>
</html>
