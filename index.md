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
    html,body{margin:0;width:100%;min-height:100%;background:#f0efdc;color:#202020;font-family:Arial,sans-serif}
    .site-header{position:relative;z-index:10;background:#f0efdc;border-bottom:1px solid #ece7e3}
    .header-inner{width:min(1120px,calc(100% - 40px));min-height:82px;margin:0 auto;display:flex;align-items:center;gap:28px}
    .logo{display:block;margin-right:auto}
    .logo img{display:block;width:335px;max-width:48vw;height:auto}
    .navigation{display:flex;align-items:center;gap:24px}
    .nav-item{position:relative}
    .nav-button{border:0;background:transparent;padding:12px 4px;color:#173f34;font:inherit;font-weight:700;cursor:pointer}
    .nav-button:hover,.nav-button[aria-expanded="true"]{color:#a73534}
    .nav-button::after{content:"▾";margin-left:7px;font-size:.75em}
    .dropdown{position:absolute;top:calc(100% + 8px);right:0;width:250px;min-height:70px;padding:20px;background:#fff;border:1px solid #e7ded7;border-radius:10px;box-shadow:0 14px 34px rgba(30,22,18,.15);opacity:0;visibility:hidden;transform:translateY(-6px);transition:.16s ease}
    .nav-item.open .dropdown{opacity:1;visibility:visible;transform:none}
    .dropdown h2{margin:0;color:#173f34;font-family:Georgia,serif;font-size:1.15rem}
    .blank-page{min-height:calc(100vh - 83px);background:#f0efdc}
    .hero{width:min(1120px,calc(100% - 40px));min-height:380px;margin:0 auto;display:grid;grid-template-columns:52% 48%;gap:8px;align-items:center}
    .hero-copy{position:relative;z-index:2;padding:42px 0}
    .hero-title{margin:0 0 30px;font-family:Georgia,"Times New Roman",serif;font-size:26px;line-height:1.14;letter-spacing:0}
    .hero-title span{display:block;color:#a73534;white-space:nowrap}
    .hero-title strong{display:block;color:#173f34;white-space:nowrap}
    .hero-intro{max-width:480px;margin:0;color:#2d2d2d;font-family:Georgia,"Times New Roman",serif;font-size:15px;line-height:1.5}
    .hero-photo{position:relative;width:420px;height:340px;max-width:100%;justify-self:end;margin-left:0;z-index:1;overflow:hidden;-webkit-mask-image:none;mask-image:none}
    .hero-photo::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to right,#f0efdc 0,rgba(240,239,220,.94) 5%,rgba(240,239,220,.55) 12%,transparent 23%,transparent 77%,rgba(240,239,220,.55) 88%,rgba(240,239,220,.94) 95%,#f0efdc 100%),linear-gradient(to bottom,#f0efdc 0,rgba(240,239,220,.94) 5%,rgba(240,239,220,.55) 12%,transparent 23%,transparent 77%,rgba(240,239,220,.55) 88%,rgba(240,239,220,.94) 95%,#f0efdc 100%)}
    .hero-photo img{display:block;width:100%;height:100%;object-fit:fill;object-position:center}
    .services-gallery{position:relative;width:min(1120px,calc(100% - 40px));height:430px;margin:0 auto;padding-top:10px;font-family:Georgia,"Times New Roman",serif}
    .services-kicker{position:absolute;left:20px;top:8px;margin:0;color:#a73534;font-size:20px;font-weight:700}
    .services-heading{position:absolute;left:390px;top:28px;margin:0;color:#173f34;font-size:24px;line-height:1.2}
    .service-photo{position:absolute;overflow:hidden}
    .service-photo img{display:block;width:100%;height:auto}
    .service-photo::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to right,#f0efdc 0,rgba(240,239,220,.94) 5%,rgba(240,239,220,.55) 12%,transparent 23%,transparent 77%,rgba(240,239,220,.55) 88%,rgba(240,239,220,.94) 95%,#f0efdc 100%),linear-gradient(to bottom,#f0efdc 0,rgba(240,239,220,.94) 5%,rgba(240,239,220,.55) 12%,transparent 23%,transparent 77%,rgba(240,239,220,.55) 88%,rgba(240,239,220,.94) 95%,#f0efdc 100%)}
    .service-garden{left:20px;top:70px;width:230px}
    .service-house{right:20px;top:105px;width:230px}
    .service-bathroom{left:455px;top:230px;width:210px}
    .service-text{position:absolute;margin:0;color:#202020;font-size:15px;line-height:1.45}
    .garden-text{left:290px;top:88px;width:430px}
    .extension-text{left:285px;top:195px;width:280px}
    .renovation-text{left:25px;top:300px;width:390px}
    @media(max-width:760px){
      .header-inner{min-height:74px;gap:14px}
      .logo img{width:235px;max-width:51vw}
      .navigation{gap:8px}
      .nav-button{font-size:.78rem}
      .dropdown{position:fixed;top:74px;left:20px;right:20px;width:auto}
      .hero{grid-template-columns:1fr;gap:6px;padding:30px 0}
      .hero-copy{padding:10px 0}
      .hero-title{font-size:26px;margin-bottom:22px}
      .hero-photo{width:250px;height:250px;margin-left:0;justify-self:center}
      .services-gallery{position:static;height:auto;padding:26px 0 40px;display:grid;grid-template-columns:1fr;gap:18px}
      .services-kicker,.services-heading,.service-photo,.service-text{position:static;width:100%}
      .services-heading{font-size:22px}
      .service-photo{max-width:330px;margin:0 auto}
    }
  
    @media(min-width:761px){
      html,body{height:100%;overflow:hidden}
      .header-inner{min-height:74px}
      .blank-page{height:calc(100vh - 75px);min-height:0;display:grid;grid-template-rows:250px minmax(0,1fr);overflow:hidden}
      .hero{width:min(1120px,calc(100% - 40px));height:250px;min-height:0;gap:8px}
      .hero-copy{padding:12px 0}
      .hero-title{margin-bottom:20px}
      .hero-photo{width:380px;height:240px}
      .services-gallery{height:100%;min-height:0;padding-top:0}
      .services-kicker{left:20px;top:2px;font-size:17px}
      .services-heading{left:390px;top:2px;font-size:20px}
      .service-photo img{width:100%;height:100%;object-fit:contain}
      .service-garden{left:20px;top:36px;width:190px;height:130px}
      .garden-text{left:245px;top:42px;width:375px}
      .service-house{right:20px;top:38px;width:190px;height:130px}
      .extension-text{left:300px;top:125px;width:270px}
      .service-bathroom{left:480px;top:145px;width:170px;height:115px}
      .renovation-text{left:25px;top:185px;width:390px}
      .service-text{font-size:13px;line-height:1.35}
    }
  
    /* Three services: photos side by side with matching writing underneath */
    .services-gallery{position:relative;width:min(1120px,calc(100% - 40px));margin:0 auto;font-family:Georgia,"Times New Roman",serif}
    .services-header-row{display:flex;align-items:baseline;gap:42px;padding:2px 20px 5px}
    .services-header-row .services-kicker,.services-header-row .services-heading{position:static;margin:0;width:auto}
    .services-header-row .services-kicker{color:#a73534;font-size:17px;font-weight:700}
    .services-header-row .services-heading{color:#173f34;font-size:20px;line-height:1.2}
    .services-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px;padding:0 20px}
    .service-item{min-width:0}
    .services-row .service-photo{position:relative;inset:auto;width:220px;height:125px;margin:0 auto 5px;overflow:hidden}
    .services-row .service-photo img{display:block;width:100%;height:100%;object-fit:contain}
    .service-item p{max-width:290px;margin:0 auto;color:#202020;font-size:13px;line-height:1.35}
    @media(max-width:760px){
      .services-header-row{display:block;padding:0}
      .services-header-row .services-heading{margin-top:6px}
      .services-row{grid-template-columns:1fr;padding:0;gap:18px}
      .services-row .service-photo{width:250px;height:160px}
      .service-item p{max-width:330px}
    }
  
    /* Stack the service headings with clear spacing */
    .services-header-row{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:0 20px 18px}
    .services-header-row .services-heading{order:1}
    .services-header-row .services-kicker{order:2}
  
    /* Click-to-open Services & Gallery */
    .services-header-row .services-toggle{order:2;border:0;background:transparent;padding:0;color:#a73534;font-family:Georgia,"Times New Roman",serif;font-size:17px;font-weight:700;cursor:pointer}
    .services-toggle span{display:inline-block;margin-left:6px;transition:transform .18s ease}
    .services-gallery.open .services-toggle span{transform:rotate(180deg)}
    .services-dropdown{position:absolute;left:0;right:0;top:58px;opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .18s ease,transform .18s ease}
    .services-gallery.open .services-dropdown{opacity:1;visibility:visible;transform:none}
    @media(max-width:760px){
      .services-dropdown{position:static;display:none;opacity:1;visibility:visible;transform:none;margin-top:14px}
      .services-gallery.open .services-dropdown{display:block}
    }
  
    /* Contact & Get a Quote dropdown details */
    .contact-dropdown{width:360px;padding:20px}
    .contact-dropdown h2{margin:0 0 14px;font-size:22px}
    .contact-options{display:grid;gap:8px}
    .contact-options a{display:block;padding:10px 12px;border:1px solid rgba(23,63,52,.16);border-radius:8px;background:rgba(255,255,255,.52);text-decoration:none}
    .contact-options strong,.contact-options small{display:block}
    .contact-options strong{color:#173f34;font-size:14px}
    .contact-options small{margin-top:2px;color:#5d5a50;font-size:12px}
    @media(max-width:760px){.contact-dropdown{width:auto}}
  
    /* Trust statements above the green footer */
    .trust-strip{height:30px;background:#f0efdc;color:#a73534}
    .trust-row{width:min(1120px,calc(100% - 40px));height:30px;margin:0 auto;display:flex;align-items:center;justify-content:space-around;gap:18px;white-space:nowrap}
    .trust-row strong{font-family:Georgia,"Times New Roman",serif;font-size:12px}
    .site-footer{height:32px;background:#173f34;color:#fff}
    .footer-row{width:min(1120px,calc(100% - 40px));height:32px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;white-space:nowrap}
    .copyright{font-size:10px;color:#e6eadf}
    .footer-socials{display:flex;align-items:center;gap:9px}
    .footer-socials span{display:grid;place-items:center;width:20px;height:20px;border:1px solid rgba(255,255,255,.65);border-radius:50%;font-weight:700;font-size:11px}
    @media(min-width:761px){.blank-page{height:calc(100vh - 137px)}}
    @media(max-width:760px){
      .trust-strip,.site-footer{height:auto}
      .trust-row,.footer-row{height:auto;min-height:32px;padding:8px 0;flex-wrap:wrap;white-space:normal}
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
          <div class="dropdown contact-dropdown">
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

    <section class="services-gallery" aria-labelledby="services-heading">
      <div class="services-header-row">
        <h2 id="services-heading" class="services-heading">Building &amp; Renovation</h2>
        <p class="services-kicker">Our Services &amp; Gallery</p>
      </div>

      <div class="services-row">
        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4842.jpg' | relative_url }}" alt="Completed garden and landscaping project">
          </div>
          <p>Patios, paving, fencing, garden clearance, lawns, garden buildings and outdoor spaces.</p>
        </article>

        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4841.jpg' | relative_url }}" alt="Completed house extension">
          </div>
          <p>House extensions, conversions and loft conversions to create more useful space.</p>
        </article>

        <article class="service-item">
          <div class="service-photo">
            <img src="{{ '/assets/images/IMG_4844.jpg' | relative_url }}" alt="Completed bathroom renovation">
          </div>
          <p><strong>Renovations &amp; improvements</strong><br>Kitchen, bathrooms, plastering, decorating, flooring and general home improvements.</p>
        </article>
      </div>
    </section>
  </main>
  <section class="trust-strip" aria-label="Why choose Bobby Pro Builds">
    <div class="trust-row">
      <strong>15+ Years’ Experience</strong>
      <strong>Fully Insured</strong>
      <strong>Covering England</strong>
      <strong>Quality Work</strong>
    </div>
  </section>
  <footer class="site-footer">
    <div class="footer-row">
      <span class="copyright">&copy; 2026 Bobby Pro Builds</span>
      <div class="footer-socials" aria-label="Social media">
        <span aria-label="Facebook">f</span>
        <span aria-label="Instagram">◎</span>
        <span aria-label="TikTok">♪</span>
      </div>
    </div>
  </footer>
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

    const servicesSection = document.querySelector('.services-gallery');
    const servicesToggle = document.querySelector('.services-toggle');
    if(servicesSection && servicesToggle){
      servicesToggle.addEventListener('click', () => {
        const opening = !servicesSection.classList.contains('open');
        servicesSection.classList.toggle('open', opening);
        servicesToggle.setAttribute('aria-expanded', String(opening));
      });
    }
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeMenus();
    });
  </script>
</body>
</html>
