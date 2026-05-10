<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Star Soda — Sip Your Sign</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{--deep:#06030f;--void:#0d0820;--gold:#f5c842;--rose:#e8678a;--aqua:#5ae8d4;--purple:#9b6ef3;--white:#f5f0ff;--dim:rgba(245,240,255,0.6);--glass:rgba(255,255,255,0.05);--border:rgba(255,255,255,0.08);}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--deep);color:var(--white);font-family:'Cormorant Garamond',serif;overflow-x:hidden;cursor:none;}
#cur{position:fixed;width:20px;height:20px;border:2px solid var(--gold);border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .2s,height .2s;mix-blend-mode:difference;}
#cur2{position:fixed;width:5px;height:5px;background:var(--gold);border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);}
.sf{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse at 20% 30%,#1a0a2e 0%,var(--deep) 65%);}
.sf::after{content:'';position:absolute;inset:0;background-image:radial-gradient(1px 1px at 8% 15%,rgba(255,255,255,.9) 0%,transparent 100%),radial-gradient(1px 1px at 22% 8%,rgba(255,255,255,.7) 0%,transparent 100%),radial-gradient(1.5px 1.5px at 45% 35%,rgba(255,255,255,.8) 0%,transparent 100%),radial-gradient(2px 2px at 80% 12%,rgba(245,200,66,.9) 0%,transparent 100%),radial-gradient(1px 1px at 65% 55%,rgba(255,255,255,.6) 0%,transparent 100%),radial-gradient(1.5px 1.5px at 38% 72%,rgba(90,232,212,.7) 0%,transparent 100%),radial-gradient(1px 1px at 92% 40%,rgba(255,255,255,.8) 0%,transparent 100%),radial-gradient(2px 2px at 18% 88%,rgba(155,110,243,.8) 0%,transparent 100%),radial-gradient(1px 1px at 55% 20%,rgba(232,103,138,.7) 0%,transparent 100%),radial-gradient(1px 1px at 72% 78%,rgba(255,255,255,.5) 0%,transparent 100%);animation:twinkle 7s ease-in-out infinite alternate;}
@keyframes twinkle{0%{opacity:.5}100%{opacity:1}}
nav{position:fixed;top:0;width:100%;z-index:1000;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 3rem;background:linear-gradient(to bottom,rgba(6,3,15,.95),transparent);backdrop-filter:blur(12px);border-bottom:1px solid rgba(245,200,66,.08);}
.nav-logo{font-family:'Cinzel Decorative',serif;font-size:1.1rem;color:var(--gold);letter-spacing:.1em;text-decoration:none;}
.nav-links{display:flex;gap:1.8rem;list-style:none;align-items:center;}
.nav-links a{font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.12em;color:var(--dim);text-decoration:none;text-transform:uppercase;transition:color .3s;cursor:none;}
.nav-links a:hover{color:var(--gold);}
.nav-cta{padding:.55rem 1.2rem;background:linear-gradient(135deg,var(--gold),var(--rose));color:var(--deep)!important;font-weight:700;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:none;background:none;border:none;padding:.4rem;}
.hamburger span{width:22px;height:2px;background:var(--gold);transition:all .3s;}
.hero{position:relative;z-index:1;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:7rem 2rem 4rem;overflow:hidden;}
.hero-badge{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.4em;color:var(--aqua);text-transform:uppercase;margin-bottom:1.5rem;animation:fadeUp 1s ease .2s both;}
.hero-title{font-family:'Cinzel Decorative',serif;font-size:clamp(3rem,9vw,8rem);font-weight:900;line-height:1;background:linear-gradient(135deg,var(--gold) 0%,var(--rose) 50%,var(--purple) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:fadeUp 1s ease .4s both;filter:drop-shadow(0 0 60px rgba(245,200,66,.25));}
.hero-tagline{font-size:clamp(1.2rem,3vw,2.2rem);font-style:italic;color:var(--dim);margin-top:.8rem;animation:fadeUp 1s ease .6s both;}
.hero-desc{max-width:560px;margin:2rem auto 0;font-size:1.1rem;line-height:1.85;color:rgba(245,240,255,.6);animation:fadeUp 1s ease .8s both;}
.hero-btns{margin-top:3rem;display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;animation:fadeUp 1s ease 1s both;}
.btn{padding:.9rem 2.4rem;font-family:'Space Mono',monospace;font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;font-weight:700;border:none;cursor:none;text-decoration:none;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);transition:all .3s;display:inline-flex;align-items:center;gap:.5rem;}
.btn-gold{background:linear-gradient(135deg,var(--gold),var(--rose));color:var(--deep);}
.btn-gold:hover{filter:brightness(1.15);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--white);border:1px solid rgba(245,240,255,.25);}
.btn-outline:hover{border-color:var(--aqua);transform:translateY(-2px);}
.btn-purple{background:linear-gradient(135deg,var(--purple),var(--rose));color:var(--white);}
.btn-purple:hover{filter:brightness(1.15);transform:translateY(-2px);}
.hero-stats{margin-top:4rem;display:flex;gap:4rem;animation:fadeUp 1s ease 1.2s both;}
.stat{text-align:center;}
.stat-num{font-family:'Cinzel Decorative',serif;font-size:2rem;color:var(--gold);}
.stat-label{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;}
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
.sec{position:relative;z-index:1;padding:7rem 4rem;}
.sec-label{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.4em;text-transform:uppercase;margin-bottom:.8rem;display:block;}
.sec-title{font-family:'Cinzel Decorative',serif;font-size:clamp(1.8rem,4vw,3.2rem);line-height:1.15;margin-bottom:1.5rem;}
.sec-sub{color:var(--dim);font-size:1.05rem;line-height:1.8;max-width:540px;}
.flavors-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:1rem;margin-top:3.5rem;}
.flavor-card{background:var(--glass);border:1px solid var(--border);padding:1.6rem 1rem;text-align:center;cursor:none;position:relative;overflow:hidden;transition:all .4s cubic-bezier(.34,1.56,.64,1);}
.flavor-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent,rgba(245,200,66,.07));opacity:0;transition:opacity .4s;}
.flavor-card:hover{transform:translateY(-8px) scale(1.03);border-color:rgba(245,200,66,.4);}
.flavor-card:hover::before{opacity:1;}
.fc-sym{font-size:2.2rem;margin-bottom:.4rem;display:block;}
.fc-name{font-family:'Cinzel Decorative',serif;font-size:.7rem;color:var(--gold);letter-spacing:.08em;display:block;margin-bottom:.3rem;}
.fc-flavor{font-size:.82rem;font-style:italic;color:var(--dim);line-height:1.4;}
.fc-dates{font-family:'Space Mono',monospace;font-size:.55rem;color:rgba(245,240,255,.3);margin-top:.5rem;display:block;}
.shop{background:rgba(155,110,243,.04);}
.shop-tabs{display:flex;gap:0;margin-top:3rem;border-bottom:1px solid var(--border);flex-wrap:wrap;}
.tab-btn{padding:.7rem 1.5rem;background:none;border:none;font-family:'Space Mono',monospace;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);cursor:none;border-bottom:2px solid transparent;transition:all .3s;margin-bottom:-1px;}
.tab-btn.active{color:var(--gold);border-bottom-color:var(--gold);}
.tab-btn:hover{color:var(--white);}
.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem;margin-top:2.5rem;}
.product-card{background:var(--glass);border:1px solid var(--border);overflow:hidden;cursor:none;transition:all .4s;position:relative;}
.product-card:hover{transform:translateY(-6px);border-color:rgba(245,200,66,.3);}
.product-img{height:200px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:linear-gradient(135deg,rgba(155,110,243,.15),rgba(90,232,212,.08));position:relative;overflow:hidden;}
.product-badge{position:absolute;top:.7rem;right:.7rem;padding:.2rem .6rem;background:var(--rose);color:var(--white);font-family:'Space Mono',monospace;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;}
.product-info{padding:1.2rem;}
.product-name{font-family:'Cinzel Decorative',serif;font-size:.85rem;color:var(--white);margin-bottom:.3rem;}
.product-sign{font-size:.78rem;font-style:italic;color:var(--dim);}
.product-price{font-family:'Space Mono',monospace;font-size:.9rem;color:var(--gold);margin-top:.6rem;}
.product-footer{display:flex;justify-content:space-between;align-items:center;padding:.8rem 1.2rem;border-top:1px solid var(--border);}
.add-cart{padding:.5rem 1rem;background:linear-gradient(135deg,var(--gold),var(--rose));color:var(--deep);font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.1em;font-weight:700;border:none;cursor:none;clip-path:polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);transition:filter .3s;}
.add-cart:hover{filter:brightness(1.15);}
.wishlist-btn{background:none;border:1px solid var(--border);color:var(--dim);width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:none;font-size:1rem;transition:all .3s;}
.wishlist-btn:hover{border-color:var(--rose);color:var(--rose);}
.events-list{margin-top:3rem;display:flex;flex-direction:column;gap:1.2rem;}
.event-card{background:var(--glass);border:1px solid var(--border);padding:1.8rem 2rem;display:flex;align-items:center;gap:2rem;cursor:none;transition:all .4s;position:relative;overflow:hidden;}
.event-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(to bottom,var(--gold),var(--rose));transform:scaleY(0);transition:transform .4s;transform-origin:bottom;}
.event-card:hover{transform:translateX(6px);border-color:rgba(245,200,66,.3);}
.event-card:hover::before{transform:scaleY(1);}
.event-date{text-align:center;min-width:60px;}
.event-day{font-family:'Cinzel Decorative',serif;font-size:2rem;color:var(--gold);line-height:1;}
.event-month{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.15em;color:var(--dim);text-transform:uppercase;}
.event-info{flex:1;}
.event-name{font-family:'Cinzel Decorative',serif;font-size:1.1rem;color:var(--white);margin-bottom:.3rem;}
.event-meta{font-family:'Space Mono',monospace;font-size:.65rem;color:var(--dim);letter-spacing:.08em;}
.event-desc{font-size:.9rem;color:rgba(245,240,255,.5);margin-top:.4rem;line-height:1.6;}
.event-tag{padding:.25rem .7rem;border:1px solid rgba(245,200,66,.3);font-family:'Space Mono',monospace;font-size:.55rem;color:var(--gold);letter-spacing:.1em;text-transform:uppercase;}
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:200px;gap:.8rem;margin-top:3rem;}
.gallery-item{display:flex;align-items:center;justify-content:center;font-size:3rem;overflow:hidden;position:relative;cursor:none;transition:transform .4s;}
.gallery-item:hover{transform:scale(1.03);z-index:2;}
.gallery-item:nth-child(1){grid-column:span 2;grid-row:span 2;}
.gallery-item:nth-child(4){grid-column:span 2;}
.gallery-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(6,3,15,.8),transparent);display:flex;align-items:flex-end;padding:1rem;opacity:0;transition:opacity .4s;}
.gallery-item:hover .gallery-overlay{opacity:1;}
.gallery-caption{font-family:'Space Mono',monospace;font-size:.6rem;color:var(--white);letter-spacing:.1em;text-transform:uppercase;}
.booking{background:linear-gradient(135deg,rgba(155,110,243,.08),rgba(90,232,212,.04));}
.booking-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;margin-top:3rem;align-items:start;}
.booking-form{background:var(--glass);border:1px solid var(--border);padding:2rem;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
.form-group{margin-bottom:1.2rem;}
.form-group label{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--dim);display:block;margin-bottom:.5rem;}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:.75rem 1rem;background:rgba(255,255,255,.06);border:1px solid var(--border);color:var(--white);font-family:'Cormorant Garamond',serif;font-size:1rem;outline:none;transition:border-color .3s;cursor:none;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--gold);}
.form-group select option{background:var(--void);color:var(--white);}
.form-group textarea{resize:vertical;min-height:100px;}
.booking-info{display:flex;flex-direction:column;gap:1.5rem;}
.booking-info-card{background:var(--glass);border:1px solid var(--border);padding:1.5rem;}
.bic-icon{font-size:1.8rem;margin-bottom:.7rem;}
.bic-title{font-family:'Cinzel Decorative',serif;font-size:.9rem;color:var(--gold);margin-bottom:.4rem;}
.bic-text{font-size:.9rem;color:var(--dim);line-height:1.6;}
.ai-sec{background:radial-gradient(ellipse at 50% 50%,rgba(155,110,243,.12),transparent 70%);}
.ai-box{background:var(--glass);border:1px solid rgba(155,110,243,.3);padding:2.5rem;margin-top:3rem;max-width:700px;margin-left:auto;margin-right:auto;}
.ai-title{font-family:'Cinzel Decorative',serif;font-size:1.3rem;color:var(--purple);margin-bottom:.5rem;}
.ai-desc{color:var(--dim);font-size:1rem;line-height:1.7;margin-bottom:1.5rem;}
.sign-pickers{display:flex;gap:1rem;margin-bottom:1.2rem;flex-wrap:wrap;align-items:flex-end;}
.sign-picker{flex:1;min-width:140px;}
.ai-prompt-input{width:100%;padding:.75rem 1rem;background:rgba(255,255,255,.06);border:1px solid rgba(155,110,243,.3);color:var(--white);font-family:'Cormorant Garamond',serif;font-size:1rem;outline:none;resize:none;min-height:80px;transition:border-color .3s;}
.ai-prompt-input:focus{border-color:var(--purple);}
.ai-actions{display:flex;gap:1rem;margin-top:1rem;flex-wrap:wrap;align-items:center;}
.ai-result{margin-top:1.5rem;border:1px solid rgba(155,110,243,.2);background:rgba(155,110,243,.05);padding:1.5rem;display:none;}
.ai-result.visible{display:block;}
.ai-result-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1rem;}
.ai-loading{text-align:center;padding:2rem;display:none;}
.ai-loading.visible{display:block;}
.ai-spinner{width:40px;height:40px;border:3px solid rgba(155,110,243,.2);border-top-color:var(--purple);border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 1rem;}
@keyframes spin{to{transform:rotate(360deg)}}
#chat-bubble{position:fixed;bottom:2rem;right:2rem;z-index:5000;display:flex;flex-direction:column;align-items:flex-end;gap:.8rem;}
.chat-toggle{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,var(--purple),var(--rose));border:none;cursor:none;display:flex;align-items:center;justify-content:center;font-size:1.5rem;box-shadow:0 8px 32px rgba(155,110,243,.4);transition:transform .3s;position:relative;}
.chat-toggle:hover{transform:scale(1.1);}
.chat-notif{position:absolute;top:-4px;right:-4px;width:18px;height:18px;background:var(--rose);border-radius:50%;font-family:'Space Mono',monospace;font-size:.55rem;color:var(--white);display:flex;align-items:center;justify-content:center;animation:pulse 2s ease-in-out infinite;}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
#chat-window{width:340px;background:var(--void);border:1px solid rgba(155,110,243,.3);box-shadow:0 20px 60px rgba(0,0,0,.6);display:none;flex-direction:column;max-height:480px;overflow:hidden;}
#chat-window.open{display:flex;}
.chat-header{background:linear-gradient(135deg,rgba(155,110,243,.3),rgba(232,103,138,.2));padding:1rem 1.2rem;display:flex;align-items:center;gap:.8rem;border-bottom:1px solid var(--border);}
.chat-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--purple),var(--rose));display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
.chat-agent{flex:1;}
.chat-agent-name{font-family:'Cinzel Decorative',serif;font-size:.75rem;color:var(--gold);}
.chat-status{font-family:'Space Mono',monospace;font-size:.55rem;color:var(--aqua);display:flex;align-items:center;gap:.3rem;}
.chat-status::before{content:'';width:6px;height:6px;background:var(--aqua);border-radius:50%;display:inline-block;animation:pulse 2s ease-in-out infinite;}
.chat-close{background:none;border:none;color:var(--dim);cursor:none;font-size:1.1rem;transition:color .3s;}
.chat-close:hover{color:var(--rose);}
.chat-messages{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.8rem;max-height:280px;}
.chat-messages::-webkit-scrollbar{width:3px;}
.chat-messages::-webkit-scrollbar-thumb{background:rgba(155,110,243,.3);}
.msg{max-width:80%;padding:.7rem 1rem;font-size:.88rem;line-height:1.5;}
.msg.bot{background:rgba(155,110,243,.15);border:1px solid rgba(155,110,243,.2);border-radius:0 12px 12px 12px;color:var(--white);}
.msg.user{background:linear-gradient(135deg,rgba(245,200,66,.15),rgba(232,103,138,.1));border:1px solid rgba(245,200,66,.2);border-radius:12px 0 12px 12px;color:var(--white);margin-left:auto;}
.msg-time{font-family:'Space Mono',monospace;font-size:.5rem;color:rgba(245,240,255,.3);margin-top:.3rem;}
.chat-input-area{padding:.8rem;border-top:1px solid var(--border);display:flex;gap:.6rem;}
.chat-input{flex:1;background:rgba(255,255,255,.06);border:1px solid var(--border);color:var(--white);padding:.6rem .8rem;font-family:'Cormorant Garamond',serif;font-size:.95rem;outline:none;transition:border-color .3s;cursor:none;}
.chat-input:focus{border-color:var(--purple);}
.chat-send{background:linear-gradient(135deg,var(--purple),var(--rose));border:none;color:var(--white);padding:.6rem .9rem;cursor:none;font-size:.9rem;transition:filter .3s;}
.chat-send:hover{filter:brightness(1.15);}
#cart-sidebar{position:fixed;top:0;right:-420px;width:400px;height:100vh;background:var(--void);border-left:1px solid rgba(245,200,66,.15);z-index:5000;transition:right .4s cubic-bezier(.34,1.56,.64,1);display:flex;flex-direction:column;overflow:hidden;}
#cart-sidebar.open{right:0;}
.cart-header{padding:1.5rem;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}
.cart-title{font-family:'Cinzel Decorative',serif;font-size:1rem;color:var(--gold);}
.cart-close{background:none;border:1px solid var(--border);color:var(--dim);width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:none;font-size:1rem;transition:all .3s;}
.cart-close:hover{border-color:var(--rose);color:var(--rose);}
.cart-items{flex:1;overflow-y:auto;padding:1.2rem;}
.cart-empty{text-align:center;padding:3rem 1rem;color:var(--dim);font-size:1rem;font-style:italic;}
.cart-item{display:flex;gap:1rem;padding:1rem;border:1px solid var(--border);margin-bottom:.8rem;align-items:center;}
.ci-emoji{font-size:2rem;width:50px;text-align:center;flex-shrink:0;}
.ci-info{flex:1;}
.ci-name{font-family:'Cinzel Decorative',serif;font-size:.75rem;color:var(--white);margin-bottom:.2rem;}
.ci-price{font-family:'Space Mono',monospace;font-size:.8rem;color:var(--gold);}
.ci-qty{display:flex;align-items:center;gap:.5rem;margin-top:.4rem;}
.qty-btn{background:var(--glass);border:1px solid var(--border);color:var(--white);width:22px;height:22px;display:flex;align-items:center;justify-content:center;cursor:none;font-size:.9rem;transition:all .3s;}
.qty-btn:hover{border-color:var(--gold);color:var(--gold);}
.qty-num{font-family:'Space Mono',monospace;font-size:.75rem;min-width:20px;text-align:center;}
.ci-remove{background:none;border:none;color:rgba(245,240,255,.3);cursor:none;font-size:.85rem;transition:color .3s;}
.ci-remove:hover{color:var(--rose);}
.cart-footer{padding:1.2rem;border-top:1px solid var(--border);}
.cart-total{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;}
.cart-total-label{font-family:'Space Mono',monospace;font-size:.65rem;letter-spacing:.15em;color:var(--dim);text-transform:uppercase;}
.cart-total-val{font-family:'Cinzel Decorative',serif;font-size:1.2rem;color:var(--gold);}
.overlay{position:fixed;inset:0;background:rgba(6,3,15,.7);z-index:4999;display:none;}
.overlay.show{display:block;}
.newsletter{text-align:center;padding:7rem 4rem;border-top:1px solid var(--border);}
.nl-form{display:flex;max-width:480px;margin:2.5rem auto 0;}
.nl-input{flex:1;padding:.9rem 1.2rem;background:rgba(255,255,255,.06);border:1px solid var(--border);border-right:none;color:var(--white);font-family:'Cormorant Garamond',serif;font-size:1rem;outline:none;transition:border-color .3s;cursor:none;}
.nl-input:focus{border-color:var(--gold);}
.nl-btn{padding:.9rem 1.5rem;background:var(--gold);color:var(--deep);border:none;cursor:none;font-family:'Space Mono',monospace;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;transition:filter .3s;}
.nl-btn:hover{filter:brightness(1.15);}
footer{position:relative;z-index:1;padding:4rem;border-top:1px solid var(--border);}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem;}
.footer-brand p{color:var(--dim);font-size:.95rem;line-height:1.7;margin-top:1rem;max-width:260px;}
.footer-col-title{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem;}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.6rem;}
.footer-links a{color:var(--dim);text-decoration:none;font-size:.9rem;transition:color .3s;cursor:none;}
.footer-links a:hover{color:var(--gold);}
.footer-bottom{border-top:1px solid var(--border);padding-top:2rem;display:flex;justify-content:space-between;align-items:center;}
.footer-copy{font-family:'Space Mono',monospace;font-size:.6rem;color:rgba(245,240,255,.3);letter-spacing:.08em;}
.social-links{display:flex;gap:.8rem;margin-top:1.2rem;}
.social-link{width:34px;height:34px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--dim);text-decoration:none;font-size:.9rem;transition:all .3s;cursor:none;}
.social-link:hover{border-color:var(--gold);color:var(--gold);}
.toast{position:fixed;bottom:7rem;right:2rem;background:linear-gradient(135deg,rgba(155,110,243,.95),rgba(232,103,138,.85));padding:.8rem 1.5rem;font-family:'Space Mono',monospace;font-size:.65rem;letter-spacing:.1em;color:var(--white);z-index:9999;transform:translateY(100px);opacity:0;transition:all .4s;max-width:270px;border-left:3px solid var(--gold);}
.toast.show{transform:translateY(0);opacity:1;}
.orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;z-index:0;}
.orb1{width:500px;height:500px;background:rgba(155,110,243,.1);top:5%;left:-15%;}
.orb2{width:400px;height:400px;background:rgba(90,232,212,.08);bottom:15%;right:-10%;}
.modal-overlay{position:fixed;inset:0;background:rgba(6,3,15,.85);z-index:6000;display:none;align-items:center;justify-content:center;padding:2rem;}
.modal-overlay.open{display:flex;}
.modal{background:var(--void);border:1px solid rgba(245,200,66,.2);max-width:520px;width:100%;padding:2.5rem;position:relative;max-height:90vh;overflow-y:auto;}
.modal-close{position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--dim);cursor:none;font-size:1.2rem;transition:color .3s;}
.modal-close:hover{color:var(--rose);}
.modal-title{font-family:'Cinzel Decorative',serif;font-size:1.3rem;color:var(--gold);margin-bottom:1.5rem;}
@media(max-width:900px){
  nav{padding:1rem 1.5rem;}
  .nav-links{display:none;}
  .nav-links.open{display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(6,3,15,.98);padding:1.5rem;gap:1.2rem;border-bottom:1px solid var(--border);}
  .hamburger{display:flex;}
  .sec{padding:4rem 1.5rem;}
  .footer-grid{grid-template-columns:1fr 1fr;gap:2rem;}
  .booking-grid{grid-template-columns:1fr;}
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .gallery-item:nth-child(1){grid-column:span 2;}
  .hero-stats{gap:2rem;}
  .form-row{grid-template-columns:1fr;}
  #cart-sidebar{width:100%;}
}
</style>
</head>
<body>
<div id="cur"></div><div id="cur2"></div>
<div class="sf"></div>
<div class="orb orb1"></div><div class="orb orb2"></div>
<div class="overlay" id="overlay" onclick="closeCart()"></div>
<div class="toast" id="toast"></div>

<nav>
  <a href="#" class="nav-logo">★ Star Soda</a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#flavors">Flavors</a></li>
    <li><a href="#shop">Shop</a></li>
    <li><a href="#events">Events</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#booking">Book Now</a></li>
    <li><a href="#ai-gen">AI Studio</a></li>
    <li><a href="#" class="nav-cta" onclick="openCart(event)">🛒 Cart (<span id="cart-count">0</span>)</a></li>
  </ul>
  <button class="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></button>
</nav>

<section class="hero">
  <p class="hero-badge">✦ Celestially Crafted · Zodiac-Inspired ✦</p>
  <h1 class="hero-title">Star Soda</h1>
  <p class="hero-tagline">Sip Your Sign</p>
  <p class="hero-desc">Twelve zodiac flavors, cosmic merchandise, and an AI studio to immortalize your signs together. The universe has a flavor waiting for you.</p>
  <div class="hero-btns">
    <a href="#shop" class="btn btn-gold">🛍 Shop Now</a>
    <a href="#flavors" class="btn btn-outline">✦ Find Your Flavor</a>
    <a href="#ai-gen" class="btn btn-purple">✨ AI Couple Prints</a>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="stat-num">12</div><div class="stat-label">Zodiac Flavors</div></div>
    <div class="stat"><div class="stat-num">50+</div><div class="stat-label">Merch Items</div></div>
    <div class="stat"><div class="stat-num">10K+</div><div class="stat-label">Cosmic Sippers</div></div>
  </div>
</section>

<section class="sec" id="flavors">
  <span class="sec-label" style="color:var(--rose)">✦ The Flavor Collection</span>
  <h2 class="sec-title">Twelve Signs.<br>Twelve Flavors.</h2>
  <p class="sec-sub">Each blend mirrors the soul of your sign — from fiery Aries to dreamy Pisces. Every sip is written in the stars.</p>
  <div class="flavors-grid">
    <div class="flavor-card"><span class="fc-sym">♈</span><span class="fc-name">Aries</span><span class="fc-flavor">Blazing Raspberry Chili</span><span class="fc-dates">Mar 21 – Apr 19</span></div>
    <div class="flavor-card"><span class="fc-sym">♉</span><span class="fc-name">Taurus</span><span class="fc-flavor">Velvet Rose Vanilla</span><span class="fc-dates">Apr 20 – May 20</span></div>
    <div class="flavor-card"><span class="fc-sym">♊</span><span class="fc-name">Gemini</span><span class="fc-flavor">Citrus & Lychee Twist</span><span class="fc-dates">May 21 – Jun 20</span></div>
    <div class="flavor-card"><span class="fc-sym">♋</span><span class="fc-name">Cancer</span><span class="fc-flavor">Coconut Moonberry</span><span class="fc-dates">Jun 21 – Jul 22</span></div>
    <div class="flavor-card"><span class="fc-sym">♌</span><span class="fc-name">Leo</span><span class="fc-flavor">Golden Mango Passion</span><span class="fc-dates">Jul 23 – Aug 22</span></div>
    <div class="flavor-card"><span class="fc-sym">♍</span><span class="fc-name">Virgo</span><span class="fc-flavor">Cucumber Mint Clarity</span><span class="fc-dates">Aug 23 – Sep 22</span></div>
    <div class="flavor-card"><span class="fc-sym">♎</span><span class="fc-name">Libra</span><span class="fc-flavor">Peach Hibiscus Bloom</span><span class="fc-dates">Sep 23 – Oct 22</span></div>
    <div class="flavor-card"><span class="fc-sym">♏</span><span class="fc-name">Scorpio</span><span class="fc-flavor">Dark Cherry Obsidian</span><span class="fc-dates">Oct 23 – Nov 21</span></div>
    <div class="flavor-card"><span class="fc-sym">♐</span><span class="fc-name">Sagittarius</span><span class="fc-flavor">Tropical Wanderlust</span><span class="fc-dates">Nov 22 – Dec 21</span></div>
    <div class="flavor-card"><span class="fc-sym">♑</span><span class="fc-name">Capricorn</span><span class="fc-flavor">Smoked Caramel Earth</span><span class="fc-dates">Dec 22 – Jan 19</span></div>
    <div class="flavor-card"><span class="fc-sym">♒</span><span class="fc-name">Aquarius</span><span class="fc-flavor">Electric Blue Yuzu</span><span class="fc-dates">Jan 20 – Feb 18</span></div>
    <div class="flavor-card"><span class="fc-sym">♓</span><span class="fc-name">Pisces</span><span class="fc-flavor">Dreamy Lavender Mist</span><span class="fc-dates">Feb 19 – Mar 20</span></div>
  </div>
</section>

<section class="sec shop" id="shop">
  <span class="sec-label" style="color:var(--aqua)">✦ Cosmic Merchandise</span>
  <h2 class="sec-title">Wear Your<br>Universe</h2>
  <p class="sec-sub">Zodiac-themed merch for every vibe. Phone covers, tumblers, bottles, hoodies, shirts, stickers, bags — all customizable with your sign.</p>
  <div class="shop-tabs">
    <button class="tab-btn active" onclick="filterProducts('all',this)">All Items</button>
    <button class="tab-btn" onclick="filterProducts('drinkware',this)">Drinkware</button>
    <button class="tab-btn" onclick="filterProducts('apparel',this)">Apparel</button>
    <button class="tab-btn" onclick="filterProducts('accessories',this)">Accessories</button>
    <button class="tab-btn" onclick="filterProducts('soda',this)">Soda Packs</button>
  </div>
  <div class="products-grid" id="products-grid"></div>
  <div style="text-align:center;margin-top:2.5rem;"><a href="#" class="btn btn-outline">View All 50+ Products →</a></div>
</section>

<section class="sec" id="events">
  <span class="sec-label" style="color:var(--gold)">✦ Upcoming Events</span>
  <h2 class="sec-title">Cosmic<br>Gatherings</h2>
  <p class="sec-sub">Pop-ups, tasting nights, zodiac mixers — come sip with us under the stars in Karachi.</p>
  <div class="events-list">
    <div class="event-card">
      <div class="event-date"><div class="event-day">15</div><div class="event-month">Jun</div></div>
      <div class="event-info">
        <div class="event-name">Zodiac Tasting Night — Karachi</div>
        <div class="event-meta">📍 Beach Luxury Club, DHA Phase 8 &nbsp;·&nbsp; 7:00 PM – 11:00 PM</div>
        <div class="event-desc">Sample all 12 Star Soda flavors, get your cosmic reading, and meet fellow zodiac lovers.</div>
      </div>
      <span class="event-tag">Free Entry</span>
    </div>
    <div class="event-card">
      <div class="event-date"><div class="event-day">22</div><div class="event-month">Jun</div></div>
      <div class="event-info">
        <div class="event-name">Couples Cosmic Print Pop-Up</div>
        <div class="event-meta">📍 Dolmen Mall, Clifton &nbsp;·&nbsp; 12:00 PM – 8:00 PM</div>
        <div class="event-desc">Use our AI Studio live — generate your couple print and get it custom-printed on the spot.</div>
      </div>
      <span class="event-tag">Limited Spots</span>
    </div>
    <div class="event-card">
      <div class="event-date"><div class="event-day">05</div><div class="event-month">Jul</div></div>
      <div class="event-info">
        <div class="event-name">Star Soda Official Launch Party</div>
        <div class="event-meta">📍 The Venue, Zamzama &nbsp;·&nbsp; 6:00 PM – 12:00 AM</div>
        <div class="event-desc">Live music, giveaways, zodiac photobooth, and the full merch drop. You don't want to miss this.</div>
      </div>
      <span class="event-tag">RSVP Required</span>
    </div>
    <div class="event-card">
      <div class="event-date"><div class="event-day">19</div><div class="event-month">Jul</div></div>
      <div class="event-info">
        <div class="event-name">Leo & Sagittarius Season Mixer</div>
        <div class="event-meta">📍 Frere Hall Lawn &nbsp;·&nbsp; 5:00 PM – 10:00 PM</div>
        <div class="event-desc">A fire sign celebration with merch discounts for fire signs, exclusive flavors, and a live DJ set.</div>
      </div>
      <span class="event-tag">Ticketed</span>
    </div>
  </div>
  <div style="text-align:center;margin-top:2.5rem;"><a href="#booking" class="btn btn-gold">Book Your Spot →</a></div>
</section>

<section class="sec" id="gallery">
  <span class="sec-label" style="color:var(--purple)">✦ Event Gallery</span>
  <h2 class="sec-title">Moments from<br>Our Universe</h2>
  <div class="gallery-grid">
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(155,110,243,.3),rgba(232,103,138,.2));"><span>🌟</span><div class="gallery-overlay"><span class="gallery-caption">Zodiac Night — May 2025</span></div></div>
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(90,232,212,.2),rgba(155,110,243,.2));"><span>🥂</span><div class="gallery-overlay"><span class="gallery-caption">Launch Tasting Event</span></div></div>
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(245,200,66,.15),rgba(232,103,138,.15));"><span>✨</span><div class="gallery-overlay"><span class="gallery-caption">Couple Prints Pop-Up</span></div></div>
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(232,103,138,.2),rgba(245,200,66,.1));"><span>🎉</span><div class="gallery-overlay"><span class="gallery-caption">Brand Anniversary Night</span></div></div>
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(6,3,15,.5),rgba(155,110,243,.3));"><span>🔭</span><div class="gallery-overlay"><span class="gallery-caption">Cosmic Reading Night</span></div></div>
    <div class="gallery-item" style="background:linear-gradient(135deg,rgba(90,232,212,.15),rgba(6,3,15,.4));"><span>🛍</span><div class="gallery-overlay"><span class="gallery-caption">Merch Drop Event</span></div></div>
  </div>
</section>

<section class="sec booking" id="booking">
  <span class="sec-label" style="color:var(--aqua)">✦ Reservations</span>
  <h2 class="sec-title">Book a Cosmic<br>Experience</h2>
  <div class="booking-grid">
    <div class="booking-form">
      <div class="form-row">
        <div class="form-group"><label>First Name</label><input type="text" placeholder="Your name"></div>
        <div class="form-group"><label>Last Name</label><input type="text" placeholder="Last name"></div>
      </div>
      <div class="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com"></div>
      <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="+92 300 0000000"></div>
      <div class="form-group"><label>Event Type</label>
        <select>
          <option>Select an event...</option>
          <option>Zodiac Tasting Night</option>
          <option>Couples Cosmic Print Pop-Up</option>
          <option>Star Soda Launch Party</option>
          <option>Private / Corporate Event</option>
          <option>Custom Merch Order Consultation</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Preferred Date</label><input type="date"></div>
        <div class="form-group"><label>Number of Guests</label><input type="number" placeholder="2" min="1"></div>
      </div>
      <div class="form-group"><label>Your Zodiac Sign</label>
        <select>
          <option>Select your sign...</option>
          <option>♈ Aries</option><option>♉ Taurus</option><option>♊ Gemini</option>
          <option>♋ Cancer</option><option>♌ Leo</option><option>♍ Virgo</option>
          <option>♎ Libra</option><option>♏ Scorpio</option><option>♐ Sagittarius</option>
          <option>♑ Capricorn</option><option>♒ Aquarius</option><option>♓ Pisces</option>
        </select>
      </div>
      <div class="form-group"><label>Special Requests</label><textarea placeholder="Tell us about any special requirements, dietary needs, or custom merchandise requests..."></textarea></div>
      <button class="btn btn-gold" style="width:100%;justify-content:center;" onclick="submitBooking()">✦ Confirm Booking</button>
    </div>
    <div class="booking-info">
      <div class="booking-info-card"><div class="bic-icon">📍</div><div class="bic-title">Location</div><div class="bic-text">Multiple venues across Karachi. Exact location confirmed upon booking via WhatsApp or email.</div></div>
      <div class="booking-info-card"><div class="bic-icon">⭐</div><div class="bic-title">VIP Packages</div><div class="bic-text">Premium zodiac experience with custom merch pack, private tasting, and AI print session included.</div></div>
      <div class="booking-info-card"><div class="bic-icon">🎁</div><div class="bic-title">Corporate Events</div><div class="bic-text">Custom branded Star Soda experiences for teams. Minimum 20 guests. Contact us for pricing.</div></div>
      <div class="booking-info-card"><div class="bic-icon">💬</div><div class="bic-title">Questions?</div><div class="bic-text">Use the live chat in the corner or WhatsApp us at +92 300 000 0000. We reply within 2 hours.</div></div>
    </div>
  </div>
</section>

<section class="sec ai-sec" id="ai-gen">
  <span class="sec-label" style="color:var(--purple)">✦ AI Couple Studio</span>
  <h2 class="sec-title">Print Your Signs<br>Together</h2>
  <p class="sec-sub">Choose your zodiac signs, describe your vision, and our AI generates custom cosmic artwork — send it to us and we'll print it on any merchandise!</p>
  <div class="ai-box">
    <div class="ai-title">✨ Zodiac Art Generator</div>
    <div class="ai-desc">Perfect for couples, best friends, or anyone who wants their star signs immortalized in cosmic art. Generated artwork can be printed on hoodies, phone covers, tumblers, bags, and more.</div>
    <div class="sign-pickers">
      <div class="sign-picker">
        <div class="form-group"><label>Your Sign</label>
          <select id="sign1">
            <option value="">Choose your sign...</option>
            <option>♈ Aries</option><option>♉ Taurus</option><option>♊ Gemini</option>
            <option>♋ Cancer</option><option>♌ Leo</option><option>♍ Virgo</option>
            <option>♎ Libra</option><option>♏ Scorpio</option><option>♐ Sagittarius</option>
            <option>♑ Capricorn</option><option>♒ Aquarius</option><option>♓ Pisces</option>
          </select>
        </div>
      </div>
      <div style="display:flex;align-items:center;padding-bottom:1.2rem;font-size:1.5rem;color:var(--rose);">💫</div>
      <div class="sign-picker">
        <div class="form-group"><label>Partner's Sign</label>
          <select id="sign2">
            <option value="">Choose their sign...</option>
            <option>♈ Aries</option><option>♉ Taurus</option><option>♊ Gemini</option>
            <option>♋ Cancer</option><option>♌ Leo</option><option>♍ Virgo</option>
            <option>♎ Libra</option><option>♏ Scorpio</option><option>♐ Sagittarius</option>
            <option>♑ Capricorn</option><option>♒ Aquarius</option><option>♓ Pisces</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Describe your artwork vision (optional)</label>
      <textarea class="ai-prompt-input" id="aiPrompt" placeholder="e.g. Two celestial figures representing our signs, surrounded by stars and cosmic nebula, holding Star Soda cans, romantic art nouveau style with deep space background..."></textarea>
    </div>
    <div class="form-group">
      <label>Art Style</label>
      <select id="aiStyle" style="width:100%;padding:.75rem 1rem;background:rgba(255,255,255,.06);border:1px solid rgba(155,110,243,.3);color:var(--white);font-family:'Cormorant Garamond',serif;font-size:1rem;outline:none;cursor:none;">
        <option value="cosmic art nouveau">Cosmic Art Nouveau</option>
        <option value="celestial watercolor">Celestial Watercolor</option>
        <option value="retro zodiac poster">Retro Zodiac Poster</option>
        <option value="dark galaxy fantasy illustration">Dark Galaxy Fantasy</option>
        <option value="minimalist constellation line art">Minimalist Constellation</option>
      </select>
    </div>
    <div class="ai-actions">
      <button class="btn btn-purple" onclick="generateAIArt()">✨ Generate Artwork</button>
      <span style="font-family:'Space Mono',monospace;font-size:.6rem;color:var(--dim);">Powered by Claude AI</span>
    </div>
    <div class="ai-loading" id="aiLoading">
      <div class="ai-spinner"></div>
      <p style="font-family:'Space Mono',monospace;font-size:.7rem;color:var(--dim);letter-spacing:.15em;">GENERATING YOUR COSMIC ART...</p>
    </div>
    <div class="ai-result" id="aiResult">
      <div style="background:linear-gradient(135deg,rgba(155,110,243,.15),rgba(90,232,212,.08));padding:2rem;text-align:center;margin-bottom:1rem;border:1px solid rgba(155,110,243,.2);">
        <div style="font-size:5rem;margin-bottom:1rem;" id="aiArtEmoji">🌌</div>
        <div style="font-family:'Cinzel Decorative',serif;font-size:.9rem;color:var(--gold);margin-bottom:.8rem;" id="aiArtTitle">Your Cosmic Portrait</div>
        <div style="font-size:.95rem;color:var(--dim);line-height:1.75;font-style:italic;text-align:left;" id="aiArtDesc"></div>
      </div>
      <div class="ai-result-actions">
        <button class="btn btn-gold" onclick="orderPrint()">🖨 Order Custom Print</button>
        <button class="btn btn-outline" onclick="sendToUs()">📧 Send to Star Soda</button>
        <button class="btn btn-outline" style="font-size:.65rem;padding:.7rem 1.2rem;" onclick="generateAIArt()">↻ Regenerate</button>
      </div>
    </div>
  </div>
</section>

<div class="modal-overlay" id="orderModal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('orderModal')">✕</button>
    <div class="modal-title">🖨 Choose Your Print Item</div>
    <p style="color:var(--dim);font-size:.95rem;line-height:1.7;margin-bottom:1.5rem;">Select which item you'd like your cosmic artwork printed on. We'll contact you within 24 hours to confirm your custom order.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.8rem;margin-bottom:1.5rem;" id="printItems"></div>
    <div class="form-group"><label>Your Email or WhatsApp</label><input type="text" placeholder="For order confirmation"></div>
    <div class="form-group"><label>Additional Notes</label><textarea style="min-height:60px;" placeholder="Any specific size, color, or customization requests..."></textarea></div>
    <button class="btn btn-gold" style="width:100%;justify-content:center;" onclick="confirmPrintOrder()">✦ Confirm Print Order</button>
  </div>
</div>

<section class="newsletter">
  <span class="sec-label" style="color:var(--rose)">✦ Stay Cosmic</span>
  <h2 class="sec-title" style="max-width:500px;margin:0 auto 1rem;">Get Exclusive Drops &<br>Zodiac Updates</h2>
  <p style="color:var(--dim);font-size:1rem;">New flavors, merch drops, event invites — delivered to your inbox.</p>
  <div class="nl-form">
    <input type="email" class="nl-input" placeholder="your@email.com">
    <button class="nl-btn" onclick="showToast('🌟 You\'re now a cosmic insider!')">Subscribe</button>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="nav-logo">★ Star Soda</div>
      <p>Sip Your Sign. Twelve zodiac-inspired sparkling sodas, cosmic merchandise, and AI-powered couple prints. Born in Karachi, loved by the cosmos.</p>
      <div class="social-links">
        <a href="#" class="social-link">📸</a>
        <a href="#" class="social-link">🎵</a>
        <a href="#" class="social-link">▶</a>
        <a href="#" class="social-link">💼</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Shop</div>
      <ul class="footer-links">
        <li><a href="#">Soda Packs</a></li>
        <li><a href="#">Tumblers & Bottles</a></li>
        <li><a href="#">Hoodies & Shirts</a></li>
        <li><a href="#">Phone Covers</a></li>
        <li><a href="#">Stickers & Bags</a></li>
        <li><a href="#">Gift Sets</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Experience</div>
      <ul class="footer-links">
        <li><a href="#flavors">Find Your Flavor</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#booking">Book Now</a></li>
        <li><a href="#ai-gen">AI Couple Studio</a></li>
        <li><a href="#gallery">Gallery</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Help</div>
      <ul class="footer-links">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Shipping Info</a></li>
        <li><a href="#">Returns Policy</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2025 Star Soda · Sip Your Sign · All Rights Reserved · Karachi, PK</div>
    <div class="footer-copy">By kanwalramrakhiani-maker ✨</div>
  </div>
</footer>

<div id="chat-bubble">
  <div id="chat-window">
    <div class="chat-header">
      <div class="chat-avatar">⭐</div>
      <div class="chat-agent">
        <div class="chat-agent-name">Star Soda Support</div>
        <div class="chat-status">Online Now</div>
      </div>
      <button class="chat-close" onclick="toggleChat()">✕</button>
    </div>
    <div class="chat-messages" id="chatMessages">
      <div class="msg bot">Hello! 🌟 Welcome to Star Soda! I'm your cosmic assistant. Ask me anything about our flavors, merchandise, events, or how to order an AI couple print!<div class="msg-time">Just now</div></div>
    </div>
    <div class="chat-input-area">
      <input type="text" class="chat-input" id="chatInput" placeholder="Ask about Star Soda..." onkeydown="if(event.key==='Enter')sendChat()">
      <button class="chat-send" onclick="sendChat()">➤</button>
    </div>
  </div>
  <button class="chat-toggle" onclick="toggleChat()">💬<span class="chat-notif">1</span></button>
</div>

<div id="cart-sidebar">
  <div class="cart-header">
    <div class="cart-title">🛒 Your Cart</div>
    <button class="cart-close" onclick="closeCart()">✕</button>
  </div>
  <div class="cart-items" id="cartItems"><div class="cart-empty">Your cart is empty.<br><br>Start shopping ✨</div></div>
  <div class="cart-footer">
    <div class="cart-total">
      <div class="cart-total-label">Total</div>
      <div class="cart-total-val" id="cartTotal">PKR 0</div>
    </div>
    <button class="btn btn-gold" style="width:100%;justify-content:center;" onclick="checkout()">Checkout →</button>
  </div>
</div>

<script>
// CURSOR
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';cur2.style.left=e.clientX+'px';cur2.style.top=e.clientY+'px';});

// NAV
function toggleNav(){document.getElementById('navLinks').classList.toggle('open');}

// PRODUCTS
let cart=[];
const products=[
  {id:1,name:"Leo Tumbler",sign:"♌ Leo",price:2499,emoji:"🥤",cat:"drinkware",badge:"Best Seller"},
  {id:2,name:"Scorpio Phone Cover",sign:"♏ Scorpio",price:1299,emoji:"📱",cat:"accessories",badge:"New"},
  {id:3,name:"Aquarius Hoodie",sign:"♒ Aquarius",price:5999,emoji:"🧥",cat:"apparel",badge:""},
  {id:4,name:"Pisces Water Bottle",sign:"♓ Pisces",price:1899,emoji:"🍶",cat:"drinkware",badge:""},
  {id:5,name:"Gemini Tote Bag",sign:"♊ Gemini",price:1499,emoji:"👜",cat:"accessories",badge:""},
  {id:6,name:"Aries Soda 6-Pack",sign:"♈ Aries",price:999,emoji:"🥫",cat:"soda",badge:"Sale"},
  {id:7,name:"Libra Sticker Set",sign:"♎ Libra",price:499,emoji:"🎨",cat:"accessories",badge:""},
  {id:8,name:"Capricorn Hoodie",sign:"♑ Capricorn",price:5999,emoji:"👕",cat:"apparel",badge:""},
  {id:9,name:"Virgo Tumbler",sign:"♍ Virgo",price:2499,emoji:"🧴",cat:"drinkware",badge:""},
  {id:10,name:"Sagittarius T-Shirt",sign:"♐ Sagittarius",price:2999,emoji:"👚",cat:"apparel",badge:"New"},
  {id:11,name:"Taurus Coffee Mug",sign:"♉ Taurus",price:1299,emoji:"☕",cat:"drinkware",badge:""},
  {id:12,name:"Cancer Soda 12-Pack",sign:"♋ Cancer",price:1799,emoji:"🫙",cat:"soda",badge:"Popular"},
];

function filterProducts(cat,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat==='all'?products:products.filter(p=>p.cat===cat));
}
function renderProducts(list){
  document.getElementById('products-grid').innerHTML=list.map(p=>`
    <div class="product-card">
      <div class="product-img">${p.emoji}${p.badge?`<span class="product-badge">${p.badge}</span>`:''}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-sign">${p.sign}</div>
        <div class="product-price">PKR ${p.price.toLocaleString()}</div>
      </div>
      <div class="product-footer">
        <button class="add-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="wishlist-btn" onclick="showToast('Added to wishlist ♥')">♡</button>
      </div>
    </div>`).join('');
}
renderProducts(products);

function addToCart(id){
  const p=products.find(x=>x.id===id);
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  updateCart();showToast(`${p.emoji} ${p.name} added!`);
}
function updateCart(){
  const count=cart.reduce((a,x)=>a+x.qty,0);
  document.getElementById('cart-count').textContent=count;
  const total=cart.reduce((a,x)=>a+x.price*x.qty,0);
  document.getElementById('cartTotal').textContent='PKR '+total.toLocaleString();
  const ci=document.getElementById('cartItems');
  if(!cart.length){ci.innerHTML='<div class="cart-empty">Your cart is empty.<br><br>Start shopping ✨</div>';return;}
  ci.innerHTML=cart.map(x=>`
    <div class="cart-item">
      <div class="ci-emoji">${x.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${x.name}</div>
        <div class="ci-price">PKR ${x.price.toLocaleString()}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${x.id},-1)">−</button>
          <span class="qty-num">${x.qty}</span>
          <button class="qty-btn" onclick="changeQty(${x.id},1)">+</button>
        </div>
      </div>
      <button class="ci-remove" onclick="removeItem(${x.id})">✕</button>
    </div>`).join('');
}
function changeQty(id,d){const i=cart.findIndex(x=>x.id===id);cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);updateCart();}
function removeItem(id){cart=cart.filter(x=>x.id!==id);updateCart();}
function openCart(e){if(e)e.preventDefault();document.getElementById('cart-sidebar').classList.add('open');document.getElementById('overlay').classList.add('show');}
function closeCart(){document.getElementById('cart-sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('show');}
function checkout(){if(!cart.length){showToast('Your cart is empty!');return;}showToast('🌟 Order placed! We\'ll contact you shortly.');cart=[];updateCart();closeCart();}

// BOOKING
function submitBooking(){showToast('✦ Booking confirmed! Check your inbox.');}

// AI GENERATOR
async function generateAIArt(){
  const s1=document.getElementById('sign1').value;
  const s2=document.getElementById('sign2').value;
  const prompt=document.getElementById('aiPrompt').value;
  const style=document.getElementById('aiStyle').value;
  if(!s1||!s2){showToast('Please select both zodiac signs first!');return;}
  document.getElementById('aiLoading').classList.add('visible');
  document.getElementById('aiResult').classList.remove('visible');
  const fullPrompt=`You are a vivid cosmic art director for Star Soda, a zodiac-themed soda brand from Karachi.
Create a rich, poetic description of custom merchandise artwork for:
- Sign 1: ${s1}
- Sign 2: ${s2}  
- Art Style: ${style}
- Client vision: ${prompt||'a romantic, celestial couple portrait'}

Write exactly 4 sentences describing this artwork as if it were fully created and ready to print. Be highly visual — describe colors, composition, symbols, mood, and cosmic elements. Make it feel magical, printable, and totally unique to these two signs. End with: "This artwork would look stunning on [suggest 2 specific Star Soda merch items like tumblers, hoodies, phone covers, bags].`;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:fullPrompt}]})});
    const data=await res.json();
    const desc=data.content[0].text;
    const signSymbols={'Aries':'♈','Taurus':'♉','Gemini':'♊','Cancer':'♋','Leo':'♌','Virgo':'♍','Libra':'♎','Scorpio':'♏','Sagittarius':'♐','Capricorn':'♑','Aquarius':'♒','Pisces':'♓'};
    const e1=Object.entries(signSymbols).find(([k])=>s1.includes(k));
    const e2=Object.entries(signSymbols).find(([k])=>s2.includes(k));
    document.getElementById('aiArtEmoji').textContent=(e1?e1[1]:'✨')+' '+(e2?e2[1]:'💫');
    document.getElementById('aiArtTitle').textContent=s1.replace(/[♈♉♊♋♌♍♎♏♐♑♒♓]\s*/,'')+' × '+s2.replace(/[♈♉♊♋♌♍♎♏♐♑♒♓]\s*/,'')+' — '+style.split(' ').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
    document.getElementById('aiArtDesc').textContent=desc;
    document.getElementById('aiLoading').classList.remove('visible');
    document.getElementById('aiResult').classList.add('visible');
  }catch(e){
    document.getElementById('aiLoading').classList.remove('visible');
    showToast('Could not generate art. Please try again!');
  }
}

function orderPrint(){
  const items=[{e:'📱',n:'Phone Cover',p:'PKR 1,299'},{e:'🥤',n:'Tumbler',p:'PKR 2,499'},{e:'🍶',n:'Water Bottle',p:'PKR 1,899'},{e:'🧥',n:'Hoodie',p:'PKR 5,999'},{e:'👚',n:'T-Shirt',p:'PKR 2,999'},{e:'👜',n:'Tote Bag',p:'PKR 1,499'}];
  document.getElementById('printItems').innerHTML=items.map(o=>`
    <div onclick="selectPrint(this)" style="background:var(--glass);border:1px solid var(--border);padding:1rem;text-align:center;cursor:none;transition:all .3s;">
      <div style="font-size:2rem;margin-bottom:.3rem;">${o.e}</div>
      <div style="font-family:'Cinzel Decorative',serif;font-size:.65rem;color:var(--white);margin-bottom:.2rem;">${o.n}</div>
      <div style="font-family:'Space Mono',monospace;font-size:.6rem;color:var(--gold);">${o.p}</div>
    </div>`).join('');
  document.getElementById('orderModal').classList.add('open');
}
function selectPrint(el){document.querySelectorAll('#printItems>div').forEach(d=>{d.style.borderColor='var(--border)';d.style.background='var(--glass)';});el.style.borderColor='var(--gold)';el.style.background='rgba(245,200,66,.08)';}
function confirmPrintOrder(){closeModal('orderModal');showToast('🎉 Print order sent! We\'ll WhatsApp you within 24hrs.');}
function sendToUs(){showToast('📧 Artwork sent to hello@starsoda.pk!');}
function closeModal(id){document.getElementById(id).classList.remove('open');}

// LIVE CHAT
let chatOpen=false;
function toggleChat(){
  chatOpen=!chatOpen;
  const w=document.getElementById('chat-window');
  chatOpen?w.classList.add('open'):w.classList.remove('open');
  document.querySelector('.chat-notif').style.display='none';
}
const botReplies=[
  {keys:['hello','hi','hey'],reply:"Hello, cosmic sipper! ⭐ How can I help you today? Ask about our flavors, merch, events, or AI couple prints!"},
  {keys:['flavor','soda','drink','taste'],reply:"We have 12 zodiac flavors! ♌ Leo gets Golden Mango Passion, ♓ Pisces gets Dreamy Lavender Mist, ♈ Aries gets Blazing Raspberry Chili... What's your sign? 🌟"},
  {keys:['merch','merchandise','hoodie','shirt','tumbler','bottle','bag','cover','sticker'],reply:"We have phone covers (PKR 1,299), tumblers (PKR 2,499), water bottles (PKR 1,899), hoodies (PKR 5,999), t-shirts (PKR 2,999), tote bags (PKR 1,499), and sticker sets (PKR 499)! All zodiac-themed 🛍"},
  {keys:['order','buy','cart','purchase'],reply:"Add items to cart from our Shop section and checkout! For custom AI prints, visit our AI Studio section. We deliver across Pakistan ✨"},
  {keys:['event','party','launch','pop-up','popup'],reply:"Upcoming events: Zodiac Tasting Night (Jun 15), Couples Print Pop-Up (Jun 22), Launch Party (Jul 5), Leo & Sag Mixer (Jul 19). Book your spot in the Book Now section! 📅"},
  {keys:['book','reserve','reservation'],reply:"Head to our Book Now section to reserve your spot! Just fill the form and we'll confirm via WhatsApp 🎉"},
  {keys:['price','cost','pkr','how much'],reply:"Soda packs from PKR 999, stickers PKR 499, phone covers PKR 1,299, tumblers PKR 2,499, bottles PKR 1,899, hoodies PKR 5,999. Great gifts! 💝"},
  {keys:['couple','partner','ai','print','custom','generate'],reply:"Our AI Studio lets you generate custom cosmic artwork for any two zodiac signs! Then order it printed on hoodies, phone covers, tumblers, bags and more. Visit the AI Studio section ✨💑"},
  {keys:['karachi','deliver','shipping','location'],reply:"We're based in Karachi and deliver across Pakistan! Standard delivery 3-5 days. Events are held at multiple venues in Karachi 📍"},
];
async function sendChat(){
  const inp=document.getElementById('chatInput');
  const msg=inp.value.trim();if(!msg)return;
  addMsg(msg,'user');inp.value='';
  const lower=msg.toLowerCase();
  let reply="Great question! For more details, email us at hello@starsoda.pk or WhatsApp +92 300 000 0000. We're happy to help you sip your sign! ✦";
  for(const{keys,reply:r} of botReplies){if(keys.some(k=>lower.includes(k))){reply=r;break;}}
  setTimeout(()=>addMsg(reply,'bot'),600);
}
function addMsg(text,type){
  const cm=document.getElementById('chatMessages');
  const now=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  cm.innerHTML+=`<div class="msg ${type}">${text}<div class="msg-time">${now}</div></div>`;
  cm.scrollTop=cm.scrollHeight;
}

// TOAST
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3200);
}

// SCROLL ANIMATIONS
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.animation=`fadeUp .6s ease ${(i%5)*.08}s both`;obs.unobserve(e.target);}});
},{threshold:.1});
document.querySelectorAll('.flavor-card,.event-card,.booking-info-card,.gallery-item,.product-card').forEach(el=>obs.observe(el));
</script>
</body>
</html>
